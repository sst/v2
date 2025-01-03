/* eslint-disable @typescript-eslint/ban-types */
// Note: disabling ban-type rule so we don't get an error referencing the class Function

import path from "path";
import type { Loader, BuildOptions } from "esbuild";
import { Construct } from "constructs";
import fs from "fs/promises";
import zlib from "zlib";

import { App } from "./App.js";
import { Stack } from "./Stack.js";
import { Job } from "./Job.js";
import { Secret } from "./Config.js";
import { SSTConstruct, isSSTConstruct } from "./Construct.js";
import { Size, toCdkSize } from "./util/size.js";
import { Duration, toCdkDuration } from "./util/duration.js";
import {
  BindingResource,
  BindingProps,
  getBindingEnvironments,
  getBindingPermissions,
  getBindingReferencedSecrets,
} from "./util/binding.js";
import { Permissions, attachPermissionsToRole } from "./util/permission.js";
import * as functionUrlCors from "./util/functionUrlCors.js";

import url from "url";
import { useDeferredTasks } from "./deferred_task.js";
import { useProject } from "../project.js";
import { VisibleError } from "../error.js";
import { useRuntimeHandlers } from "../runtime/handlers.js";
import { createAppContext } from "./context.js";
import { useWarning } from "./util/warning.js";
import {
  Architecture,
  AssetCode,
  CfnFunction,
  Code,
  Function as CDKFunction,
  FunctionOptions,
  FunctionUrl,
  FunctionUrlAuthType,
  Handler as CDKHandler,
  ILayerVersion,
  LayerVersion,
  Runtime as CDKRuntime,
  Tracing,
  InvokeMode,
} from "aws-cdk-lib/aws-lambda";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import {
  Token,
  Size as CDKSize,
  Duration as CDKDuration,
  IgnoreMode,
  DockerCacheOption,
  CustomResource,
} from "aws-cdk-lib/core";
import { Effect, Policy, PolicyStatement, Role } from "aws-cdk-lib/aws-iam";
import { StringParameter } from "aws-cdk-lib/aws-ssm";
import { Platform } from "aws-cdk-lib/aws-ecr-assets";
import { useBootstrap } from "../bootstrap.js";
import { Colors } from "../cli/colors.js";
import { Asset } from "aws-cdk-lib/aws-s3-assets";
import { Config } from "../config.js";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const supportedRuntimes = {
  container: CDKRuntime.FROM_IMAGE,
  rust: CDKRuntime.PROVIDED_AL2023,
  "nodejs18.x": CDKRuntime.NODEJS_18_X,
  "nodejs20.x": CDKRuntime.NODEJS_20_X,
  "nodejs22.x": CDKRuntime.NODEJS_22_X,
  "python3.7": CDKRuntime.PYTHON_3_7,
  "python3.8": CDKRuntime.PYTHON_3_8,
  "python3.9": CDKRuntime.PYTHON_3_9,
  "python3.10": CDKRuntime.PYTHON_3_10,
  "python3.11": CDKRuntime.PYTHON_3_11,
  "python3.12": CDKRuntime.PYTHON_3_12,
  "dotnetcore3.1": CDKRuntime.DOTNET_CORE_3_1,
  dotnet6: CDKRuntime.DOTNET_6,
  dotnet8: CDKRuntime.DOTNET_8,
  java8: CDKRuntime.JAVA_8,
  java11: CDKRuntime.JAVA_11,
  java17: CDKRuntime.JAVA_17,
  java21: CDKRuntime.JAVA_21,
  "go1.x": CDKRuntime.PROVIDED_AL2023,
  go: CDKRuntime.PROVIDED_AL2023,
};

export type Runtime = keyof typeof supportedRuntimes;
export type FunctionInlineDefinition = string | Function;
export type FunctionDefinition = string | Function | FunctionProps;
export interface FunctionUrlCorsProps extends functionUrlCors.CorsProps {}
export interface FunctionDockerBuildCacheProps extends DockerCacheOption {}

export interface FunctionDockerBuildProps {
  /**
   * Cache from options to pass to the `docker build` command.
   * @default No cache from args are passed
   * @example
   * ```js
   * cacheFrom: [{type: "gha"}],
   * ```
   */
  cacheFrom?: FunctionDockerBuildCacheProps[];
  /**
   * Cache to options to pass to the `docker build` command.
   * @default No cache to args are passed
   * @example
   * ```js
   * cacheTo: {type: "gha"},
   * ```
   */
  cacheTo?: FunctionDockerBuildCacheProps;
}

export interface FunctionHooks {
  /**
   * Hook to run before build
   */
  beforeBuild?: (props: FunctionProps, out: string) => Promise<void>;

  /**
   * Hook to run after build
   */
  afterBuild?: (props: FunctionProps, out: string) => Promise<void>;
}

export interface FunctionProps
  extends Omit<
    FunctionOptions,
    | "functionName"
    | "memorySize"
    | "timeout"
    | "runtime"
    | "tracing"
    | "layers"
    | "architecture"
    | "logRetention"
    | "ephemeralStorageSize"
  > {
  /**
   * Used to configure additional files to copy into the function bundle
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   copyFiles: [{ from: "src/index.js" }]
   * })
   *```
   */
  copyFiles?: FunctionCopyFilesProps[];

  /**
   * Used to configure go function properties
   */
  go?: GoProps;

  /**
   * Used to configure nodejs function properties
   */
  nodejs?: NodeJSProps;

  /**
   * Used to configure java function properties
   */
  java?: JavaProps;

  /**
   * Used to configure python function properties
   */
  python?: PythonProps;

  /**
   * Used to configure container function properties
   */
  container?: ContainerProps;

  /**
   * Hooks to run before and after function builds
   */
  hooks?: FunctionHooks;

  /**
   * The CPU architecture of the lambda function.
   *
   * @default "x86_64"
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   architecture: "arm_64",
   * })
   * ```
   */
  architecture?: Lowercase<
    keyof Pick<typeof Architecture, "ARM_64" | "X86_64">
  >;
  /**
   * By default, the name of the function is auto-generated by AWS. You can configure the name by providing a string.
   *
   * @default Auto-generated function name
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   functionName: "my-function",
   * })
   *```
   */
  functionName?: string | ((props: FunctionNameProps) => string);
  /**
   * Path to the entry point and handler function. Of the format:
   * `/path/to/file.function`.
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   * })
   *```
   */
  handler?: string;
  /**
   * The runtime environment for the function.
   * @default "nodejs18.x"
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "function.handler",
   *   runtime: "nodejs18.x",
   * })
   *```
   */
  runtime?: Runtime;
  /**
   * The amount of disk storage in MB allocated.
   *
   * @default "512 MB"
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   diskSize: "2 GB",
   * })
   *```
   */
  diskSize?: number | Size;
  /**
   * The amount of memory in MB allocated.
   *
   * @default "1 GB"
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   memorySize: "2 GB",
   * })
   *```
   */
  memorySize?: number | Size;
  /**
   * The execution timeout in seconds.
   *
   * @default "10 seconds"
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   timeout: "30 seconds",
   * })
   *```
   */
  timeout?: number | Duration;
  /**
   * Enable AWS X-Ray Tracing.
   *
   * @default "active"
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   tracing: "pass_through",
   * })
   *```
   */
  tracing?: Lowercase<keyof typeof Tracing>;
  /**
   * Can be used to disable Live Lambda Development when using `sst start`. Useful for things like Custom Resources that need to execute during deployment.
   *
   * @default true
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   enableLiveDev: false
   * })
   *```
   */
  enableLiveDev?: boolean;
  /**
   * Configure environment variables for the function
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   environment: {
   *     TABLE_NAME: table.tableName,
   *   }
   * })
   * ```
   */
  environment?: Record<string, string>;
  /**
   * Bind resources for the function
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   bind: [STRIPE_KEY, bucket],
   * })
   * ```
   */
  bind?: BindingResource[];
  /**
   * Attaches the given list of permissions to the function. Configuring this property is equivalent to calling `attachPermissions()` after the function is created.
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   permissions: ["ses"]
   * })
   * ```
   */
  permissions?: Permissions;
  /**
   * Enable function URLs, a dedicated endpoint for your Lambda function.
   * @default Disabled
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   url: true
   * })
   * ```
   *
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   url: {
   *     authorizer: "iam",
   *     cors: {
   *       allowedOrigins: ['https://example.com'],
   *     },
   *   },
   * })
   * ```
   */
  url?: boolean | FunctionUrlProps;
  /**
   * A list of Layers to add to the function's execution environment.
   *
   * Note that, if a Layer is created in a stack (say `stackA`) and is referenced in another stack (say `stackB`), SST automatically creates an SSM parameter in `stackA` with the Layer's ARN. And in `stackB`, SST reads the ARN from the SSM parameter, and then imports the Layer.
   *
   * This is to get around the limitation that a Lambda Layer ARN cannot be referenced across stacks via a stack export. The Layer ARN contains a version number that is incremented everytime the Layer is modified. When you refer to a Layer's ARN across stacks, a CloudFormation export is created. However, CloudFormation does not allow an exported value to be updated. Once exported, if you try to deploy the updated layer, the CloudFormation update will fail. You can read more about this issue here - https://github.com/sst/sst/issues/549.
   *
   * @default no layers
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   layers: ["arn:aws:lambda:us-east-1:764866452798:layer:chrome-aws-lambda:22", myLayer]
   * })
   * ```
   */
  layers?: (string | ILayerVersion)[];
  /**
   * Disable sending function logs to CloudWatch Logs.
   *
   * Note that, logs will still appear locally when running `sst dev`.
   * @default false
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   disableCloudWatchLogs: true
   * })
   * ```
   *
   */
  disableCloudWatchLogs?: boolean;
  /**
   * Prefetches bound secret values and injects them into the function's environment variables.
   * @default false
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   prefetchSecrets: true
   * })
   * ```
   *
   */
  prefetchSecrets?: boolean;
  /**
   * The duration function logs are kept in CloudWatch Logs.
   *
   * When updating this property, unsetting it doesn't retain the logs indefinitely. Explicitly set the value to "infinite".
   * @default Logs retained indefinitely
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   logRetention: "one_week"
   * })
   * ```
   */
  logRetention?: Lowercase<keyof typeof RetentionDays>;
  /**
   * @internal
   */
  _doNotAllowOthersToBind?: boolean;
}

export interface FunctionNameProps {
  /**
   * The stack the function is being created in
   */
  stack: Stack;
  /**
   * The function properties
   */
  functionProps: FunctionProps;
}

export interface FunctionUrlProps {
  /**
   * The authorizer for the function URL
   * @default "none"
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   url: {
   *     authorizer: "iam",
   *   },
   * })
   * ```
   */
  authorizer?: "none" | "iam";
  /**
   * CORS support for the function URL
   * @default true
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   url: {
   *     cors: true,
   *   },
   * })
   * ```
   *
   * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   url: {
   *     cors: {
   *       allowedMethods: ["GET", "POST"]
   *       allowedOrigins: ['https://example.com'],
   *     },
   *   },
   * })
   * ```
   */
  cors?: boolean | FunctionUrlCorsProps;
  /**
   * Stream the response payload.
   * @default false
   * * ```js
   * new Function(stack, "Function", {
   *   handler: "src/function.handler",
   *   url: {
   *     streaming: true,
   *   },
   * })
   * ```
   */
  streaming?: boolean;
}

export interface NodeJSProps {
  /**
   * Configure additional esbuild loaders for other file extensions
   *
   * @example
   * ```js
   * nodejs: {
   *   loader: {
   *    ".png": "file"
   *   }
   * }
   * ```
   */
  loader?: Record<string, Loader>;

  /**
   * Packages that will be excluded from the bundle and installed into node_modules instead. Useful for dependencies that cannot be bundled, like those with binary dependencies.
   *
   * @example
   * ```js
   * nodejs: {
   *   install: ["pg"]
   * }
   * ```
   */
  install?: string[];

  /**
   * Use this to insert an arbitrary string at the beginning of generated JavaScript and CSS files.
   *
   * @example
   * ```js
   * nodejs: {
   *   banner: "console.log('Function starting')"
   * }
   * ```
   */
  banner?: string;

  /**
   * This allows you to customize esbuild config.
   */
  esbuild?: BuildOptions;

  /**
   * Enable or disable minification
   *
   * @default false
   *
   * @example
   * ```js
   * nodejs: {
   *   minify: true
   * }
   * ```
   */
  minify?: boolean;
  /**
   * Configure format
   *
   * @default "esm"
   *
   * @example
   * ```js
   * nodejs: {
   *   format: "cjs"
   * }
   * ```
   */
  format?: "cjs" | "esm";
  /**
   * Configure if sourcemaps are generated when the function is bundled for production. Since they increase payload size and potentially cold starts they are not generated by default. They are always generated during local development mode.
   *
   * @default false
   *
   * @example
   * ```js
   * nodejs: {
   *   sourcemap: true
   * }
   * ```
   */
  sourcemap?: boolean;

  /**
   * If enabled, modules that are dynamically imported will be bundled as their own files with common dependencies placed in shared chunks. This can help drastically reduce cold starts as your function grows in size.
   *
   * @default false
   *
   * @example
   * ```js
   * nodejs: {
   *   splitting: true
   * }
   * ```
   */
  splitting?: boolean;
}

/**
 * Used to configure Python bundling options
 */
export interface PythonProps {
  /**
   * A list of commands to override the [default installing behavior](Function#bundle) for Python dependencies.
   *
   * Each string in the array is a command that'll be run. For example:
   *
   * @default "[]"
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   python: {
   *     installCommands: [
   *       'export VARNAME="my value"',
   *       'pip install --index-url https://domain.com/pypi/myprivatemodule/simple/ --extra-index-url https://pypi.org/simple -r requirements.txt .',
   *     ]
   *   }
   * })
   * ```
   */
  installCommands?: string[];

  /**
   * This options skips the Python bundle step. If you set this flag to `true`, you must ensure
   * that either:
   *
   * 1. Your Python build does not require dependencies.
   * 2. Or, you've already installed production dependencies before running `sst deploy`.
   *
   * One solution to accomplish this is to pre-compile your production dependencies to some
   * temporary directory, using pip's `--platform` argument to ensure Python pre-built wheels are
   * used and that your builds match your target Lambda runtime, and use SST's `copyFiles`
   * option to make sure these dependencies make it into your final deployment build.
   *
   * This can also help speed up Python Lambdas which do not have external dependencies. By
   * default, SST will still run a docker file that is essentially a no-op if you have no
   * dependencies. This option will bypass that step, even if you have a `Pipfile`, a `poetry.toml`,
   * a `pyproject.toml`, or a `requirements.txt` (which would normally trigger an all-dependencies
   * Docker build).
   *
   * Enabling this option implies that you have accounted for all of the above and are handling
   * your own build processes, and you are doing this for the sake of build optimization.
   */
  noDocker?: boolean;

  /**
   * Build options to pass to the docker build command.
   */
  dockerBuild?: FunctionDockerBuildProps;
}

/**
 * Used to configure Go bundling options
 */
export interface GoProps {
  /**
   * The ldflags to use when building the Go module.
   *
   * @default ["-s", "-w"]
   * @example
   * ```js
   * go: {
   *   ldFlags: ["-X main.version=1.0.0"],
   * }
   * ```
   */
  ldFlags?: string[];

  /**
   * The build tags to use when building the Go module.
   *
   * @default []
   * @example
   * ```js
   * go: {
   *   buildTags: ["enterprise", "pro"],
   * }
   * ```
   */
  buildTags?: string[];

  /**
   * Whether to enable CGO for the Go build.
   *
   * @default false
   * @example
   * ```js
   * go: {
   *   cgoEnabled: true,
   * }
   * ```
   */
  cgoEnabled?: boolean;
}

/**
 * Used to configure Java package build options
 */
export interface JavaProps {
  /**
   * Gradle build command to generate the bundled .zip file.
   *
   * @default "build"
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   java: {
   *     buildTask: "bundle"
   *   }
   * })
   * ```
   */
  buildTask?: string;
  /**
   * The output folder that the bundled .zip file will be created within.
   *
   * @default "distributions"
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   java: {
   *     buildOutputDir: "output"
   *   }
   * })
   * ```
   */
  buildOutputDir?: string;
  /**
   * Use custom Amazon Linux runtime instead of Java runtime.
   *
   * @default Not using provided runtime
   *
   * @example
   * ```js
   * new Function(stack, "Function", {
   *   java: {
   *     experimentalUseProvidedRuntime: "provided.al2"
   *   }
   * })
   * ```
   */
  experimentalUseProvidedRuntime?: "provided" | "provided.al2";
}

export interface ContainerProps {
  /**
   * Specify or override the CMD on the Docker image.
   * @example
   * ```js
   * container: {
   *   cmd: ["index.handler"]
   * }
   * ```
   */
  cmd?: string[];
  /**
   * Name of the Dockerfile.
   * @example
   * ```js
   * container: {
   *   file: "path/to/Dockerfile.prod"
   * }
   * ```
   */
  file?: string;
  /**
   * Build args to pass to the docker build command.
   * @default No build args
   * @example
   * ```js
   * container: {
   *   buildArgs: {
   *     FOO: "bar"
   *   }
   * }
   * ```
   */
  buildArgs?: Record<string, string>;
  /**
   * SSH agent socket or keys to pass to the docker build command.
   * Docker BuildKit must be enabled to use the ssh flag
   * @default No --ssh flag is passed to the build command
   * @example
   * ```js
   * container: {
   *   buildSsh: "default"
   * }
   * ```
   */
  buildSsh?: string;
  /**
   * Cache from options to pass to the docker build command.
   * [DockerCacheOption](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ecr_assets.DockerCacheOption.html)[].
   * @default No cache from options are passed to the build command
   * @example
   * ```js
   * container: {
   *   cacheFrom: [{ type: 'registry', params: { ref: 'ghcr.io/myorg/myimage:cache' }}],
   * }
   * ```
   */
  cacheFrom?: FunctionDockerBuildCacheProps[];
  /**
   * Cache to options to pass to the docker build command.
   * [DockerCacheOption](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ecr_assets.DockerCacheOption.html)[].
   * @default No cache to options are passed to the build command
   * @example
   * ```js
   * container: {
   *   cacheTo: { type: 'registry', params: { ref: 'ghcr.io/myorg/myimage:cache', mode: 'max', compression: 'zstd' }},
   * }
   * ```
   */
  cacheTo?: FunctionDockerBuildCacheProps;
}

/**
 * Used to configure additional files to copy into the function bundle
 *
 * @example
 * ```js
 * new Function(stack, "Function", {
 *   copyFiles: [{ from: "src/index.js" }]
 * })
 *```
 */
export interface FunctionCopyFilesProps {
  /**
   * Source path relative to sst.config.ts
   */
  from: string;
  /**
   * Destination path relative to function root in bundle
   */
  to?: string;
}

/**
 * The `Function` construct is a higher level CDK construct that makes it easy to create a Lambda Function with support for Live Lambda Development.
 *
 * @example
 *
 * ```js
 * import { Function } from "sst/constructs";
 *
 * new Function(stack, "MySnsLambda", {
 *   handler: "src/sns/index.main",
 * });
 * ```
 */
export class Function extends CDKFunction implements SSTConstruct {
  public readonly id: string;
  public readonly _isLiveDevEnabled: boolean;
  /** @internal */
  public readonly _doNotAllowOthersToBind?: boolean;
  /** @internal */
  public _overrideMetadataHandler?: string;
  private missingSourcemap?: boolean;
  private functionUrl?: FunctionUrl;
  private props: FunctionProps;
  private allBindings: BindingResource[] = [];

  constructor(scope: Construct, id: string, props: FunctionProps) {
    const app = scope.node.root as App;
    const stack = Stack.of(scope) as Stack;

    // Merge with app defaultFunctionProps
    // note: reverse order so later prop override earlier ones
    stack.defaultFunctionProps
      .slice()
      .reverse()
      .forEach((per) => {
        props = Function.mergeProps(per, props);
      });
    props.runtime = props.runtime || "nodejs18.x";
    if (props.runtime === "go1.x") useWarning().add("go.deprecated");

    // Set defaults
    const functionName =
      props.functionName &&
      (typeof props.functionName === "string"
        ? props.functionName
        : props.functionName({ stack, functionProps: props }));
    const timeout = Function.normalizeTimeout(props.timeout);
    const architecture = (() => {
      if (props.architecture === "arm_64") return Architecture.ARM_64;
      if (props.architecture === "x86_64") return Architecture.X86_64;
      return Architecture.X86_64;
    })();
    const memorySize = Function.normalizeMemorySize(props.memorySize);
    const diskSize = Function.normalizeDiskSize(props.diskSize);
    const tracing =
      Tracing[
        (props.tracing || "active").toUpperCase() as keyof typeof Tracing
      ];
    const logRetention =
      props.logRetention &&
      RetentionDays[
        props.logRetention.toUpperCase() as keyof typeof RetentionDays
      ];
    const isLiveDevEnabled =
      app.mode === "dev" && (props.enableLiveDev === false ? false : true);

    Function.validateHandlerSet(id, props);
    Function.validateVpcSettings(id, props);

    // Handle inactive stacks
    if (!stack.isActive) {
      // Note: need to override runtime as CDK does not support inline code
      //       for some runtimes.
      super(scope, id, {
        ...props,
        architecture,
        code: Code.fromInline("export function placeholder() {}"),
        handler: "index.placeholder",
        functionName,
        runtime: CDKRuntime.NODEJS_22_X,
        memorySize,
        ephemeralStorageSize: diskSize,
        timeout,
        tracing,
        environment: props.environment,
        layers: Function.buildLayers(scope, id, props),
        logRetention,
        logRetentionRetryOptions: logRetention && { maxRetries: 100 },
      });
    }
    // Handle local development (ie. sst start)
    // - set runtime to nodejs for non-Node runtimes (b/c the stub is in Node)
    // - set retry to 0. When the debugger is disconnected, the Cron construct
    //   will still try to periodically invoke the Lambda, and the requests would
    //   fail and retry. So when launching `sst start`, a couple of retry requests
    //   from recent failed request will be received. And this behavior is confusing.
    else if (isLiveDevEnabled) {
      // If debugIncreaseTimeout is enabled:
      //   set timeout to 900s. This will give people more time to debug the function
      //   without timing out the request. Note API Gateway requests have a maximum
      //   timeout of 29s. In this case, the API will timeout, but the Lambda function
      //   will continue to run.
      let debugOverrideProps;
      if (app.debugIncreaseTimeout) {
        debugOverrideProps = {
          timeout: toCdkDuration("900 second"),
        };
      }

      // Ensure descriptions fits the 256 chars limit
      const description = props.description
        ? `${props.description.substring(0, 240)} (live)`
        : `live`;

      super(scope, id, {
        ...props,
        ...(props.runtime === "container"
          ? {
              description,
              code: Code.fromAssetImage(
                path.resolve(__dirname, "../support/bridge"),
                {
                  ...(architecture?.dockerPlatform
                    ? { platform: Platform.custom(architecture.dockerPlatform) }
                    : {}),
                }
              ),
              handler: CDKHandler.FROM_IMAGE,
              runtime: CDKRuntime.FROM_IMAGE,
              layers: undefined,
            }
          : {
              description,
              runtime: CDKRuntime.NODEJS_22_X,
              code: Code.fromAsset(
                path.resolve(__dirname, "../support/bridge")
              ),
              handler: "live-lambda.handler",
              layers: [],
            }),
        architecture,
        functionName,
        memorySize,
        ephemeralStorageSize: diskSize,
        timeout,
        tracing,
        environment: props.environment,
        logRetention,
        logRetentionRetryOptions: logRetention && { maxRetries: 100 },
        retryAttempts: 0,
        ...(debugOverrideProps || {}),
      });
      this.addEnvironment("SST_FUNCTION_ID", this.node.addr);
      useDeferredTasks().add(async () => {
        if (app.isRunningSSTTest()) return;
        const bootstrap = await useBootstrap();
        const bootstrapBucketArn = `arn:${Stack.of(this).partition}:s3:::${
          bootstrap.bucket
        }`;
        this.attachPermissions([
          new PolicyStatement({
            actions: ["iot:*"],
            effect: Effect.ALLOW,
            resources: ["*"],
          }),
          new PolicyStatement({
            actions: ["s3:*"],
            effect: Effect.ALLOW,
            resources: [bootstrapBucketArn, `${bootstrapBucketArn}/*`],
          }),
        ]);
      });
    }
    // Handle build
    else {
      super(scope, id, {
        ...props,
        ...(props.runtime === "container"
          ? {
              code: Code.fromInline("export function placeholder() {}"),
              handler: "index.placeholder",
              runtime: CDKRuntime.NODEJS_22_X,
              layers: undefined,
            }
          : {
              code: Code.fromInline("export function placeholder() {}"),
              handler: "index.placeholder",
              runtime: CDKRuntime.NODEJS_22_X,
              layers: Function.buildLayers(scope, id, props),
            }),
        architecture,
        functionName,
        memorySize,
        ephemeralStorageSize: diskSize,
        timeout,
        tracing,
        environment: props.environment,
        logRetention,
        logRetentionRetryOptions: logRetention && { maxRetries: 100 },
      });

      useDeferredTasks().add(async () => {
        if (props.runtime === "container")
          Colors.line(
            `➜  Building the container image for the "${this.node.id}" function...`
          );

        // Build function
        const result = await useRuntimeHandlers().build(
          this.node.addr,
          "deploy"
        );

        if (result.type === "error") {
          throw new VisibleError(
            [
              `Failed to build function "${props.handler}"`,
              ...result.errors,
            ].join("\n")
          );
        }

        // Update function code for container
        const cfnFunction = this.node.defaultChild as CfnFunction;
        if (props.runtime === "container") {
          const code = Code.fromAssetImage(props.handler!, {
            ...(architecture?.dockerPlatform
              ? { platform: Platform.custom(architecture.dockerPlatform) }
              : {}),
            ...(props.container?.cmd ? { cmd: props.container.cmd } : {}),
            ...(props.container?.file ? { file: props.container.file } : {}),
            ...(props.container?.buildArgs
              ? { buildArgs: props.container.buildArgs }
              : {}),
            ...(props.container?.buildSsh
              ? { buildSsh: props.container.buildSsh }
              : {}),
            ...(props.container?.cacheFrom
              ? { cacheFrom: props.container.cacheFrom }
              : {}),
            ...(props.container?.cacheTo
              ? { cacheTo: props.container.cacheTo }
              : {}),
            exclude: [".sst/dist", ".sst/artifacts"],
            ignoreMode: IgnoreMode.GLOB,
          });
          const codeConfig = code.bind(this);
          cfnFunction.packageType = "Image";
          cfnFunction.code = {
            imageUri: codeConfig.image?.imageUri,
          };
          delete cfnFunction.runtime;
          delete cfnFunction.handler;
          code.bindToResource(cfnFunction);
          return;
        }

        // Update function code for non-container
        if (result.sourcemap) {
          const data = await fs.readFile(result.sourcemap);
          await fs.writeFile(result.sourcemap, zlib.gzipSync(data));
          const asset = new Asset(this, this.id + "-Sourcemap", {
            path: result.sourcemap,
          });
          await fs.rm(result.sourcemap);
          useFunctions().sourcemaps.add(stack.stackName, {
            asset,
            tarKey: this.functionArn,
          });
        }
        this.missingSourcemap = !result.sourcemap;

        // Update code
        const code = AssetCode.fromAsset(result.out);
        const codeConfig = code.bind(this);

        cfnFunction.code = {
          s3Bucket: codeConfig.s3Location?.bucketName,
          s3Key: codeConfig.s3Location?.objectKey,
          s3ObjectVersion: codeConfig.s3Location?.objectVersion,
        };
        cfnFunction.handler = result.handler;
        code.bindToResource(cfnFunction);

        // Update runtime
        // @ts-ignore - override "runtime" private property
        this.runtime =
          supportedRuntimes[props.runtime as keyof typeof supportedRuntimes];
        cfnFunction.runtime = this.runtime.toString();
        if (
          props.runtime?.startsWith("java") &&
          props.java?.experimentalUseProvidedRuntime
        ) {
          cfnFunction.runtime = props.java?.experimentalUseProvidedRuntime;
        }
      });
    }

    this.id = id;
    this._doNotAllowOthersToBind = props._doNotAllowOthersToBind;
    this.props = props || {};

    if (this.isNodeRuntime()) {
      // Enable reusing connections with Keep-Alive for NodeJs
      // Lambda function
      this.addEnvironment("AWS_NODEJS_CONNECTION_REUSE_ENABLED", "1", {
        removeInEdge: true,
      });
    }

    this.attachPermissions(props.permissions || []);

    // Add config
    this.addEnvironment("SST_APP", app.name, { removeInEdge: true });
    this.addEnvironment("SST_STAGE", app.stage, { removeInEdge: true });
    this.addEnvironment("SST_SSM_PREFIX", useProject().config.ssmPrefix, {
      removeInEdge: true,
    });
    this.bind(props.bind || []);

    this.disableCloudWatchLogs();
    this.createUrl();
    this.createSecretPrefetcher();

    this._isLiveDevEnabled = isLiveDevEnabled;
    useFunctions().add(this.node.addr, props);

    app.registerTypes(this);
  }

  /**
   * The AWS generated URL of the Function.
   */
  public get url(): string | undefined {
    return this.functionUrl?.url;
  }

  /**
   * Binds additional resources to function.
   *
   * @example
   * ```js
   * fn.bind([STRIPE_KEY, bucket]);
   * ```
   */
  public bind(constructs: BindingResource[]): void {
    // Get referenced secrets
    const referencedSecrets: Secret[] = [];
    constructs.forEach((r) =>
      referencedSecrets.push(...getBindingReferencedSecrets(r))
    );

    [...constructs, ...referencedSecrets].forEach((r) => {
      // Bind environment
      const env = getBindingEnvironments(r);
      Object.entries(env).forEach(([key, value]) =>
        this.addEnvironment(key, value)
      );

      // Bind permissions
      const policyStatements = getBindingPermissions(r);
      this.attachPermissions(policyStatements);
    });

    this.allBindings.push(...constructs, ...referencedSecrets);
  }

  /**
   * Attaches additional permissions to function.
   *
   * @example
   * ```js {20}
   * fn.attachPermissions(["s3"]);
   * ```
   */
  public attachPermissions(permissions: Permissions): void {
    // Grant IAM permissions
    if (this.role) {
      attachPermissionsToRole(this.role as Role, permissions);
    }

    // Add config
    if (permissions !== "*") {
      permissions
        .filter((p) => p instanceof Job)
        .forEach((p) => this.bind([p as Job]));
    }
  }

  /** @internal */
  public getConstructMetadata() {
    return {
      type: "Function" as const,
      data: {
        arn: this.functionArn,
        runtime: this.props.runtime,
        handler: this._overrideMetadataHandler ?? this.props.handler,
        missingSourcemap: this.missingSourcemap === true ? true : undefined,
        localId: this.node.addr,
        secrets: this.allBindings
          .map((r) => (isSSTConstruct(r) ? r : r.resource))
          .filter((r) => r instanceof Secret)
          .map((c) => (c as Secret).name),
        prefetchSecrets: this.props.prefetchSecrets,
      },
    };
  }

  /** @internal */
  public getBindings(): BindingProps {
    return {
      clientPackage: "function",
      variables: {
        functionName: {
          type: "plain",
          value: this.functionName,
        },
      },
      permissions: {
        "lambda:*": [this.functionArn],
      },
    };
  }

  private createUrl() {
    const { url } = this.props;
    if (url === false || url === undefined) {
      return;
    }

    let authType;
    let cors;
    let streaming;

    if (url === true) {
      authType = FunctionUrlAuthType.NONE;
      cors = true;
      streaming = false;
    } else {
      authType =
        url.authorizer === "iam"
          ? FunctionUrlAuthType.AWS_IAM
          : FunctionUrlAuthType.NONE;
      cors = url.cors === undefined ? true : url.cors;
      streaming = url.streaming;
    }

    this.functionUrl = this.addFunctionUrl({
      authType,
      cors: functionUrlCors.buildCorsConfig(cors),
      invokeMode: streaming ? InvokeMode.RESPONSE_STREAM : InvokeMode.BUFFERED,
    });
  }

  private createSecretPrefetcher() {
    const { prefetchSecrets } = this.props;
    if (!prefetchSecrets) return;

    const stack = Stack.of(this) as Stack;

    // Create custom resource to prewarm on deploy
    const policy = new Policy(this, "SecretPrefetcherPolicy", {
      statements: [
        new PolicyStatement({
          effect: Effect.ALLOW,
          actions: ["lambda:GetFunction", "lambda:UpdateFunctionConfiguration"],
          resources: [this.functionArn],
        }),
        new PolicyStatement({
          effect: Effect.ALLOW,
          actions: ["ssm:GetParameters"],
          resources: [
            `arn:${stack.partition}:ssm:${stack.region}:${stack.account}:parameter${Config.PREFIX.STAGE}*`,
            `arn:${stack.partition}:ssm:${stack.region}:${stack.account}:parameter${Config.PREFIX.FALLBACK}*`,
          ],
        }),
      ],
    });
    stack.customResourceHandler.role?.attachInlinePolicy(policy);
    const resource = new CustomResource(this, "SecretPrefetcher", {
      serviceToken: stack.customResourceHandler.functionArn,
      resourceType: "Custom::SecretPrefetcher",
      properties: {
        version: Date.now().toString(),
        functionName: this.functionName,
      },
    });
    resource.node.addDependency(policy);
  }

  private disableCloudWatchLogs() {
    const disableCloudWatchLogs = this.props.disableCloudWatchLogs ?? false;
    if (!disableCloudWatchLogs) return;

    this.attachPermissions([
      new PolicyStatement({
        effect: Effect.DENY,
        actions: [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
        ],
        resources: ["*"],
      }),
    ]);
  }

  private isNodeRuntime() {
    const { runtime } = this.props;
    return runtime!.startsWith("nodejs");
  }

  static validateHandlerSet(id: string, props: FunctionProps) {
    if (!props.handler) {
      throw new Error(`No handler defined for the "${id}" Lambda function`);
    }
  }

  static validateVpcSettings(id: string, props: FunctionProps) {
    if (props.securityGroups && !props.vpc) {
      throw new Error(
        `Cannot configure "securityGroups" without "vpc" for the "${id}" Lambda function.`
      );
    }
  }

  static buildLayers(scope: Construct, id: string, props: FunctionProps) {
    return (props.layers || []).map((layer) => {
      if (typeof layer === "string") {
        return LayerVersion.fromLayerVersionArn(scope, `${id}${layer}`, layer);
      }
      return Function.handleImportedLayer(scope, layer);
    });
  }

  static normalizeMemorySize(memorySize?: number | Size): number {
    if (typeof memorySize === "string") {
      return toCdkSize(memorySize).toMebibytes();
    }
    return memorySize || 1024;
  }

  static normalizeDiskSize(diskSize?: number | Size) {
    if (typeof diskSize === "string") {
      return toCdkSize(diskSize);
    }
    return CDKSize.mebibytes(diskSize || 512);
  }

  static normalizeTimeout(timeout?: number | Duration) {
    if (typeof timeout === "string") {
      return toCdkDuration(timeout);
    }
    return CDKDuration.seconds(timeout || 10);
  }

  static handleImportedLayer(
    scope: Construct,
    layer: ILayerVersion
  ): ILayerVersion {
    const layerStack = Stack.of(layer);
    const currentStack = Stack.of(scope);
    // Use layer directly if:
    // - layer is created in the current stack; OR
    // - layer is imported (ie. layerArn is a string)
    if (
      layerStack === currentStack ||
      !Token.isUnresolved(layer.layerVersionArn)
    ) {
      return layer;
    }
    // layer is created from another stack
    else {
      // set stack dependency b/c layerStack need to create the SSM first
      currentStack.addDependency(layerStack);
      // store layer ARN in SSM in layer's stack
      const parameterId = `${layer.node.id}Arn-${layer.node.addr}`;
      const parameterName = `/layers/${layerStack.node.id}/${parameterId}`;
      const existingSsmParam = layerStack.node.tryFindChild(parameterId);
      if (!existingSsmParam) {
        new StringParameter(layerStack, parameterId, {
          parameterName,
          stringValue: layer.layerVersionArn,
        });
      }
      // import layer from SSM value
      const layerId = `I${layer.node.id}-${layer.node.addr}`;
      const existingLayer = scope.node.tryFindChild(layerId);
      if (existingLayer) {
        return existingLayer as LayerVersion;
      } else {
        return LayerVersion.fromLayerVersionArn(
          scope,
          layerId,
          StringParameter.valueForStringParameter(scope, parameterName)
        );
      }
    }
  }

  static isInlineDefinition(
    definition: any
  ): definition is FunctionInlineDefinition {
    return typeof definition === "string" || definition instanceof Function;
  }

  static fromDefinition(
    scope: Construct,
    id: string,
    definition: FunctionDefinition,
    inheritedProps?: FunctionProps,
    inheritErrorMessage?: string
  ): Function {
    if (typeof definition === "string") {
      return new Function(scope, id, {
        ...(inheritedProps || {}),
        handler: definition,
        _doNotAllowOthersToBind: true,
      });
    } else if (definition instanceof Function) {
      if (inheritedProps && Object.keys(inheritedProps).length > 0) {
        throw new Error(
          inheritErrorMessage ||
            `Cannot inherit default props when a Function is provided`
        );
      }
      return definition;
    } else if (definition instanceof CDKFunction) {
      throw new Error(
        `Please use sst.Function instead of lambda.Function for the "${id}" Function.`
      );
    } else if ((definition as FunctionProps).handler !== undefined) {
      return new Function(scope, id, {
        ...Function.mergeProps(inheritedProps, definition),
        _doNotAllowOthersToBind: true,
      });
    }
    throw new Error(`Invalid function definition for the "${id}" Function`);
  }

  static mergeProps(
    baseProps?: FunctionProps,
    props?: FunctionProps
  ): FunctionProps {
    // Merge environment
    const environment = {
      ...(baseProps?.environment || {}),
      ...(props?.environment || {}),
    };
    const environmentProp =
      Object.keys(environment).length === 0 ? {} : { environment };

    // Merge layers
    const layers = [...(baseProps?.layers || []), ...(props?.layers || [])];
    const layersProp = layers.length === 0 ? {} : { layers };

    // Merge bind
    const bind = [...(baseProps?.bind || []), ...(props?.bind || [])];
    const bindProp = bind.length === 0 ? {} : { bind };

    // Merge permissions
    let permissionsProp;
    if (baseProps?.permissions === "*") {
      permissionsProp = { permissions: baseProps.permissions };
    } else if (props?.permissions === "*") {
      permissionsProp = { permissions: props.permissions };
    } else {
      const permissions = (baseProps?.permissions || []).concat(
        props?.permissions || []
      );
      permissionsProp = permissions.length === 0 ? {} : { permissions };
    }

    return {
      ...(baseProps || {}),
      ...(props || {}),
      ...bindProp,
      ...layersProp,
      ...environmentProp,
      ...permissionsProp,
    };
  }
}

export const useFunctions = createAppContext(() => {
  const functions: Record<string, FunctionProps> = {};
  type Sourcemap = {
    asset: Asset;
    tarKey: string;
  };
  const sourcemaps: Record<string, Sourcemap[]> = {};
  return {
    sourcemaps: {
      add(stack: string, source: Sourcemap) {
        let arr = sourcemaps[stack];
        if (!arr) sourcemaps[stack] = arr = [];
        arr.push(source);
      },
      forStack(stack: string) {
        return (sourcemaps[stack] || []).sort((a, b) => {
          if (a.asset.node.path > b.asset.node.path) return 1;
          if (a.asset.node.path < b.asset.node.path) return -1;
          return 0;
        });
      },
    },
    fromID(id: string) {
      const result = functions[id];
      if (!result) return;
      return result;
    },
    add(name: string, props: FunctionProps) {
      functions[name] = props;
    },
    get all() {
      return functions;
    },
  };
});
