import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import type { AwsCredentialIdentityProvider } from "@aws-sdk/types";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { GetCallerIdentityCommand, STSClient } from "@aws-sdk/client-sts";
import { Logger } from "./logger.js";
import { StandardRetryStrategy } from "@aws-sdk/middleware-retry";
export type {} from "@smithy/types";
// @ts-expect-error
import stupid from "aws-sdk/lib/maintenance_mode_message.js";
stupid.suppress = true;
import { useProject } from "./project.js";
import { lazy } from "./util/lazy.js";

export const useAWSCredentialsProvider: () => AwsCredentialIdentityProvider =
  lazy(() => {
    const project = useProject();
    Logger.debug("Using AWS profile", project.config.profile);
    const provider = fromNodeProviderChain({
      parentClientConfig: { region: project.config.region },
      profile: project.config.profile,
      roleArn: project.config.role,
      mfaCodeProvider: async (serialArn: string) => {
        const readline = await import("readline");
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        return new Promise<string>((resolve) => {
          Logger.debug(`Require MFA token for serial ARN ${serialArn}`);
          const prompt = () =>
            rl.question(`Enter MFA code for ${serialArn}: `, async (input) => {
              if (input.trim() !== "") {
                resolve(input.trim());
                rl.close();
              } else {
                // prompt again if no input
                prompt();
              }
            });
          prompt();
        });
      },
    });
    return provider;
  });

export const useAWSCredentials = () => {
  const provider = useAWSCredentialsProvider();
  return provider();
};

export const useSTSIdentity = lazy(async () => {
  const sts = useAWSClient(STSClient);
  const identity = await sts.send(new GetCallerIdentityCommand({}));
  Logger.debug(
    "Using identity",
    "Account:",
    identity.Account,
    "User:",
    identity.UserId
  );
  return identity;
});

const useClientCache = lazy(() => new Map<string, any>());

export function useAWSClient<C extends any>(
  client: new (config: any) => C,
  force = false
) {
  const cache = useClientCache();
  const existing = cache.get(client.name);
  if (existing && !force) return existing as C;

  const [project, credentials] = [useProject(), useAWSCredentialsProvider()];
  const printNoInternet = (() => {
    let lastPrinted = 0;
    return (message: string) => {
      const isIotUnreachable = message.includes(
        `iot.${project.config.region}.amazonaws.com`
      );
      const now = Date.now();
      if (now - lastPrinted > 5000) {
        if (isIotUnreachable) {
          console.log("\nConnecting to Live Lambda...");
          if (lastPrinted === 0) {
            console.log("");
            console.log("Connecting to Live Lambda is taking long:");
            console.log("  - Check if your machine is able to connect to AWS.");
            console.log(
              "  - Or, if you're connecting to a new AWS account for the first time, give it 10 minutes."
            );
          }
        } else {
          console.log("\nWaiting for internet connection...");
        }
        lastPrinted = now;
      }
    };
  })();
  const result = new client({
    region: project.config.region,
    credentials: credentials,
    retryStrategy: new StandardRetryStrategy(async () => 10000, {
      retryDecider: (e: any) => {
        // Handle no internet connection => retry
        if (e.code === "ENOTFOUND") {
          printNoInternet(e.message);
          return true;
        }

        // Handle throttling errors => retry
        if (
          [
            "ThrottlingException",
            "Throttling",
            "TooManyRequestsException",
            "OperationAbortedException",
            "TimeoutError",
            "NetworkingError",
          ].includes(e.name)
        ) {
          Logger.debug("Retry AWS call", e.name, e.message);
          return true;
        }

        return false;
      },
      delayDecider: (_, attempts) => {
        return Math.min(1.5 ** attempts * 100, 5000);
      },
      // AWS SDK v3 has an idea of "retry tokens" which are used to
      // prevent multiple retries from happening at the same time.
      // This is a workaround to disable that.
      retryQuota: {
        hasRetryTokens: () => true,
        releaseRetryTokens: () => {},
        retrieveRetryTokens: () => 1,
      },
    }),
  });
  cache.set(client.name, result);
  Logger.debug("Created AWS client", client.name);
  return result;
}

export const useAWSProvider = lazy(async () => {
  const cdkToolkitUrl = await import.meta.resolve!("@aws-cdk/toolkit-lib");
  const cdkToolkitPath = fileURLToPath(cdkToolkitUrl);
  const { SdkProvider } = await import(
    pathToFileURL(
      path.resolve(cdkToolkitPath, "..", "api", "aws-auth", "sdk-provider.js")
    ).href
  );

  const { IoHelper } = await import(
    pathToFileURL(
      path.resolve(cdkToolkitPath, "..", "api", "io", "private", "io-helper.js")
    ).href
  );

  const project = useProject();
  return new SdkProvider(useAWSCredentialsProvider(), project.config.region!, {
    ioHelper: IoHelper.fromActionAwareIoHost({
      //notify: (msg: IoMessage<unknown>) => console.log("!@#!@#! NOTIFY", msg),
      notify: (msg: any) => {},
      //requestResponse: <T>(msg: IoRequest<unknown, T>) => ioHost.requestResponse({ ...msg }),
      requestResponse: (msg: any) => {},
    }),
  });
});
