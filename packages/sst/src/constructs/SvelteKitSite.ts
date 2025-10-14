import fs from "fs";
import path from "path";
import { SsrSite, SsrSiteNormalizedProps, SsrSiteProps } from "./SsrSite.js";
import { Construct } from "constructs";

export interface SvelteKitSiteProps extends SsrSiteProps {
  /**
   * The server function is deployed to Lambda in a single region. Alternatively, you can enable this option to deploy to Lambda@Edge.
   * @default false
   */
  edge?: boolean;

  /**
   * Configures the base path for the SvelteKit app.
   * Base path allows the app to live on a non-root path. The base path must start, but not end with /.
   * @default No base path
   * @example
   * ```js
   * basePath: '/docs'
   * ```
   */
  basePath?: `/${string}`;
}

type SvelteKitSiteNormalizedProps = SvelteKitSiteProps & SsrSiteNormalizedProps;

/**
 * The `SvelteKitSite` construct is a higher level CDK construct that makes it easy to create a SvelteKit app.
 * @example
 * Deploys a SvelteKit app in the `my-svelte-app` directory.
 *
 * ```js
 * new SvelteKitSite(stack, "web", {
 *   path: "my-svelte-app/",
 * });
 * ```
 */
export class SvelteKitSite extends SsrSite {
  declare props: SvelteKitSiteNormalizedProps;

  constructor(scope: Construct, id: string, props?: SvelteKitSiteProps) {
    super(scope, id, {
      ...props,
      typesPath: props?.typesPath ?? "src",
    });
  }

  protected plan() {
    const { path: sitePath, edge, basePath: rawBasePath } = this.props;
    const basePath = rawBasePath ? `/${rawBasePath}` : "";
    const serverDir = ".svelte-kit/svelte-kit-sst/server";
    const clientDir = ".svelte-kit/svelte-kit-sst/client";
    const prerenderedDir = ".svelte-kit/svelte-kit-sst/prerendered";
    const serverConfig = {
      description: "Server handler for SvelteKit",
      handler: path.join(
        sitePath,
        serverDir,
        "lambda-handler",
        "index.handler"
      ),
      nodejs: {
        esbuild: {
          minify: process.env.SST_DEBUG ? false : true,
          sourcemap: process.env.SST_DEBUG ? ("inline" as const) : false,
          define: {
            "process.env.SST_DEBUG": process.env.SST_DEBUG ? "true" : "false",
          },
        },
      },
      copyFiles: [
        {
          from: path.join(sitePath, prerenderedDir),
          to: "prerendered",
        },
      ],
    };

    return this.validatePlan({
      edge: edge ?? false,
      buildId: JSON.parse(
        fs
          .readFileSync(path.join(sitePath, clientDir, "_app/version.json"))
          .toString()
      ).version,
      cloudFrontFunctions: {
        serverCfFunction: {
          constructId: "CloudFrontFunction",
          injections: [
            this.useCloudFrontFunctionHostHeaderInjection(),
            // Note: form action requests contain "/" in request query string
            //       ie. POST request with query string "?/action"
            //       CloudFront does not allow query string with "/". It needs to be encoded.
            `for (var key in request.querystring) {`,
            `  if (key.includes("/")) {`,
            `    request.querystring[encodeURIComponent(key)] = request.querystring[key];`,
            `    delete request.querystring[key];`,
            `  }`,
            `}`,
          ],
        },
      },
      edgeFunctions: edge
        ? {
            edgeServer: {
              constructId: "Server",
              function: {
                scopeOverride: this as SvelteKitSite,
                ...serverConfig,
              },
            },
          }
        : undefined,
      origins: {
        ...(edge
          ? {}
          : {
              regionalServer: {
                type: "function",
                constructId: "ServerFunction",
                function: serverConfig,
              },
            }),
        s3: {
          type: "s3",
          copy: [
            {
              from: clientDir,
              to: basePath,
              cached: true,
              versionedSubDir: "_app",
            },
            {
              from: prerenderedDir,
              to: basePath,
              cached: false,
            },
          ],
        },
      },
      behaviors: [
        edge
          ? {
              cacheType: "server",
              cfFunction: "serverCfFunction",
              edgeFunction: "edgeServer",
              origin: "s3",
            }
          : {
              cacheType: "server",
              cfFunction: "serverCfFunction",
              origin: "regionalServer",
            },
        // create 1 behaviour for each top level asset file/folder
        ...fs.readdirSync(path.join(sitePath, clientDir)).map(
          (item) =>
            ({
              cacheType: "static",
              pattern: fs
                .statSync(path.join(sitePath, clientDir, item))
                .isDirectory()
                ? path.join(basePath, item, "*")
                : path.join(basePath, item),
              origin: "s3",
            } as const)
        ),
      ],
    });
  }

  public getConstructMetadata() {
    return {
      type: "SvelteKitSite" as const,
      ...this.getConstructMetadataBase(),
    };
  }
}
