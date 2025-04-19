import path from "path";
import fs from "fs";
import { IConstruct } from "constructs";
import { Stack } from "./Stack.js";
import {
  SSTConstruct,
  SSTConstructMetadata,
  isSSTConstruct,
  isStackConstruct,
} from "./Construct.js";
import { FunctionProps, useFunctions } from "./Function.js";
import { Permissions } from "./util/permission.js";
import {
  BindingResource,
  getBindingParameters,
  getBindingType,
} from "./util/binding.js";
import { StackProps } from "./Stack.js";
import { FunctionalStack, stack } from "./FunctionalStack.js";
import { Auth } from "./Auth.js";
import { useDeferredTasks } from "./deferred_task.js";
import { provideApp } from "./context.js";
import { useProject } from "../project.js";
import { VisibleError } from "../error.js";
import { Logger } from "../logger.js";
import {
  AppProps as CDKAppProps,
  App as CDKApp,
  Stack as CDKStack,
  Tags,
  IAspect,
  CfnResource,
  RemovalPolicy,
  CustomResource,
  Aspects,
} from "aws-cdk-lib/core";
import { CfnFunction, ILayerVersion } from "aws-cdk-lib/aws-lambda";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Effect, Policy, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { CfnLogGroup } from "aws-cdk-lib/aws-logs";
import { useBootstrap } from "../bootstrap.js";
import { useWarning } from "./util/warning.js";

/**
 * @internal
 */
export interface AppDeployProps {
  /**
   * The app name, used to prefix stacks.
   *
   * @default - Defaults to empty string
   */
  readonly name?: string;

  /**
   * The stage to deploy this app to.
   *
   * @default - Defaults to dev
   */
  readonly stage?: string;

  /**
   * The region to deploy this app to.
   *
   * @default - Defaults to us-east-1
   */
  readonly region?: string;

  readonly buildDir?: string;
  readonly account?: string;
  readonly debugScriptVersion?: string;
  readonly debugIncreaseTimeout?: boolean;

  readonly mode: "deploy" | "dev" | "remove";
  readonly isActiveStack?: (stackName: string) => boolean;
}

type AppRemovalPolicy = Lowercase<RemovalPolicy>;

export type AppProps = CDKAppProps;

/**
 * The App construct extends cdk.App and is used internally by SST.
 */
export class App extends CDKApp {
  /**
   * Whether or not the app is running locally under `sst dev`
   */
  public readonly local: boolean = false;

  /**
   * Whether the app is running locally under start, deploy or remove
   */
  public readonly mode: AppDeployProps["mode"];

  /**
   * The name of your app, comes from the `name` in your `sst.config.ts`
   */
  public readonly name: string;
  /**
   * The stage the app is being deployed to. If this is not specified as the --stage option, it'll default to the stage configured during the initial run of the SST CLI.
   */
  public readonly stage: string;
  /**
   * The region the app is being deployed to. If this is not specified as the --region option in the SST CLI, it'll default to the region in your sst.config.ts.
   */
  public readonly region: string;
  /**
   * The AWS account the app is being deployed to. This comes from the IAM credentials being used to run the SST CLI.
   */
  public readonly account: string;
  /** @internal */
  public readonly debugScriptVersion?: string;
  /** @internal */
  public readonly debugIncreaseTimeout?: boolean;
  /** @internal */
  public readonly appPath: string;
  /** @internal */
  public readonly isActiveStack?: (stackName: string) => boolean;

  /** @internal */
  public defaultFunctionProps: (
    | FunctionProps
    | ((stack: Stack) => FunctionProps)
  )[];
  private _defaultRemovalPolicy?: AppRemovalPolicy;

  /** @internal */
  public get defaultRemovalPolicy() {
    return this._defaultRemovalPolicy;
  }

  /**
   * @internal
   */
  constructor(deployProps: AppDeployProps, props: AppProps = {}) {
    super(props);
    provideApp(this);
    this.appPath = process.cwd();

    this.mode = deployProps.mode;
    this.local = this.mode === "dev";
    this.stage = deployProps.stage || "dev";
    this.name = deployProps.name || "my-app";
    this.region =
      deployProps.region || process.env.CDK_DEFAULT_REGION || "us-east-1";
    this.account =
      deployProps.account || process.env.CDK_DEFAULT_ACCOUNT || "my-account";
    this.isActiveStack = deployProps.isActiveStack;
    this.defaultFunctionProps = [];
    this.createTypesFile();

    if (this.mode === "dev") {
      this.debugScriptVersion = deployProps.debugScriptVersion;
      this.debugIncreaseTimeout = deployProps.debugIncreaseTimeout;
    }
  }

  /**
   * Use this method to prefix resource names in your stacks to make sure they don't thrash when deployed to different stages in the same AWS account. This method will prefix a given resource name with the stage and app name. Using the format `${stage}-${name}-${logicalName}`.
   * @example
   * ```js
   * console.log(app.logicalPrefixedName("myTopic"));
   *
   * // dev-my-app-myTopic
   * ```
   */
  public logicalPrefixedName(logicalName: string): string {
    const namePrefix = this.name === "" ? "" : `${this.name}-`;
    return `${this.stage}-${namePrefix}${logicalName}`;
  }

  /**
   * The default removal policy that'll be applied to all the resources in the app. This can be useful to set ephemeral (dev or feature branch) environments to remove all the resources on deletion.
   * :::danger
   * Make sure to not set the default removal policy to `DESTROY` for production environments.
   * :::
   * @example
   * ```js
   * app.setDefaultRemovalPolicy(app.mode === "dev" ? "destroy" : "retain")
   * ```
   */
  public setDefaultRemovalPolicy(policy: AppRemovalPolicy) {
    this._defaultRemovalPolicy = policy;
  }

  /**
   * The default function props to be applied to all the Lambda functions in the app. These default values will be overridden if a Function sets its own props.
   * This needs to be called before a stack with any functions have been added to the app.
   *
   * @example
   * ```js
   * app.setDefaultFunctionProps({
   *   runtime: "nodejs20.x",
   *   timeout: 30
   * })
   * ```
   */
  public setDefaultFunctionProps(
    props: FunctionProps | ((stack: CDKStack) => FunctionProps)
  ): void {
    this.defaultFunctionProps.push(props);
  }

  /**
   * Adds additional default Permissions to be applied to all Lambda functions in the app.
   *
   * @example
   * ```js
   * app.addDefaultFunctionPermissions(["s3"])
   * ```
   */
  public addDefaultFunctionPermissions(permissions: Permissions) {
    this.defaultFunctionProps.push({
      permissions,
    });
  }

  /**
   * Adds additional default environment variables to be applied to all Lambda functions in the app.
   *
   * @example
   * ```js
   * app.addDefaultFunctionEnv({
   *   "MY_ENV_VAR": "my-value"
   * })
   * ```
   */
  public addDefaultFunctionEnv(environment: Record<string, string>) {
    this.defaultFunctionProps.push({
      environment,
    });
  }

  /**
   * Binds additional default resources to be applied to all Lambda functions in the app.
   *
   * @example
   * ```js
   * app.addDefaultFunctionBinding([STRIPE_KEY, bucket]);
   * ```
   */
  public addDefaultFunctionBinding(bind: BindingResource[]) {
    this.defaultFunctionProps.push({ bind });
  }

  /**
   * Adds additional default layers to be applied to all Lambda functions in the stack.
   */
  public addDefaultFunctionLayers(layers: ILayerVersion[]) {
    this.defaultFunctionProps.push({
      layers,
    });
  }

  private useTypesPath() {
    const project = useProject();
    return path.resolve(project.paths.out, "types");
  }

  private createTypesFile() {
    const typesPath = this.useTypesPath();
    Logger.debug(`Generating types in ${typesPath}`);

    fs.rmSync(typesPath, {
      recursive: true,
      force: true,
    });
    fs.mkdirSync(typesPath, {
      recursive: true,
    });
    fs.appendFileSync(
      `${typesPath}/index.ts`,
      [
        `import "sst/node/config";`,
        `declare module "sst/node/config" {`,
        `  export interface ConfigTypes {`,
        `    APP: string;`,
        `    STAGE: string;`,
        `  }`,
        `}`,
        ``,
        `declare global {`,
        `  const __SST_DIRNAME: string;`,
        `  const __SST_FILENAME: string;`,
        `}`,
        ``,
        ``,
      ].join("\n")
    );
  }

  public registerTypes(c: SSTConstruct) {
    const typesPath = this.useTypesPath();

    if ("_doNotAllowOthersToBind" in c && c._doNotAllowOthersToBind) {
      return;
    }

    const binding = getBindingType(c);
    if (!binding) {
      return;
    }

    const className = c.constructor.name;
    const id = c.id;

    fs.appendFileSync(
      `${typesPath}/index.ts`,
      (binding.variables[0] === "."
        ? // Case: variable does not have properties, ie. Secrets and Parameters
          [
            `import "sst/node/${binding.clientPackage}";`,
            `declare module "sst/node/${binding.clientPackage}" {`,
            `  export interface ${className}Resources {`,
            `    "${id}": string;`,
            `  }`,
            `}`,
            ``,
            ``,
          ]
        : [
            `import "sst/node/${binding.clientPackage}";`,
            `declare module "sst/node/${binding.clientPackage}" {`,
            `  export interface ${className}Resources {`,
            `    "${id}": {`,
            ...binding.variables.map((p) => `      ${p}: string;`),
            `    }`,
            `  }`,
            `}`,
            ``,
            ``,
          ]
      ).join("\n")
    );
  }

  private isFinished = false;
  public async finish() {
    if (this.isFinished) return;
    this.isFinished = true;
    const { config, paths } = useProject();
    Auth.injectConfig();
    this.ensureUniqueConstructIds();

    // Run deferred tasks
    // - After codegen b/c some frontend frameworks (ie. Next.js apps) runs
    //   type checking in the build step
    // - Before remove govcloud unsupported resource properties b/c deferred
    //   tasks may add govcloud unsupported resource properties
    await useDeferredTasks().run();

    // Build constructs metadata after running deferred tasks
    // - Metadata for Functions needs to know if sourcemaps are enabled, which
    //   is not known until after build
    this.buildConstructsMetadata();

    this.createBindingSsmParameters();
    this.removeGovCloudUnsupportedResourceProperties();
    useWarning().print();
    for (const child of this.node.children) {
      if (isStackConstruct(child)) {
        // Tag stacks
        Tags.of(child).add("sst:app", this.name);
        Tags.of(child).add("sst:stage", this.stage);

        if (
          child instanceof Stack &&
          !this.isRunningSSTTest() &&
          this.mode !== "dev"
        ) {
          const bootstrap = await useBootstrap();
          const functions = useFunctions();
          const sourcemaps = functions.sourcemaps.forStack(child.stackName);
          if (sourcemaps.length) {
            // Add policy with access to buckets: CKD bootstrap and SST sourcemap
            // If the object in CDK bootstrap has tags, target object will have the same tags
            const policy = new Policy(child, "SourcemapUploaderPolicy", {
              statements: [
                new PolicyStatement({
                  effect: Effect.ALLOW,
                  actions: [
                    "s3:GetObject",
                    "s3:GetObjectTagging",
                    "s3:PutObject",
                    "s3:PutObjectTagging"
                  ],
                  resources: [
                    sourcemaps[0].asset.bucket.bucketArn + "/*",
                    `arn:${child.partition}:s3:::${bootstrap.bucket}/*`,
                  ],
                }),
              ],
            });
            child.customResourceHandler.role?.attachInlinePolicy(policy);

            const resource = new CustomResource(child, "SourcemapUploader", {
              serviceToken: child.customResourceHandler.functionArn,
              resourceType: "Custom::SourcemapUploader",
              properties: {
                app: this.name,
                stage: this.stage,
                tarBucket: bootstrap.bucket,
                srcBucket: sourcemaps[0].asset.bucket.bucketName,
                sourcemaps: sourcemaps.map((s) => [
                  s.tarKey,
                  s.asset.s3ObjectKey,
                ]),
              },
            });
            resource.node.addDependency(policy);
          }
        }

        // Set removal policy
        this.applyRemovalPolicy(child);

        // Stack names need to be parameterized with the stage name
        if (
          config.advanced?.disableParameterizedStackNameCheck !== true &&
          !child.stackName.startsWith(`${this.stage}-`) &&
          !child.stackName.endsWith(`-${this.stage}`) &&
          child.stackName.indexOf(`-${this.stage}-`) === -1
        ) {
          throw new Error(
            `Stack "${child.stackName}" is not parameterized with the stage name. The stack name needs to either start with "$stage-", end in "-$stage", or contain the stage name "-$stage-".`
          );
        }
      }
    }
  }

  isRunningSSTTest(): boolean {
    return process.env.NODE_ENV === "test";
  }

  getInputFilesFromEsbuildMetafile(file: string): Array<string> {
    let metaJson;

    try {
      metaJson = JSON.parse(fs.readFileSync(file).toString());
    } catch (e) {
      throw new VisibleError(
        "There was a problem reading the esbuild metafile."
      );
    }

    return Object.keys(metaJson.inputs).map((input) => path.resolve(input));
  }

  private createBindingSsmParameters() {
    class CreateSsmParameters implements IAspect {
      public visit(c: IConstruct): void {
        if (!isSSTConstruct(c)) return;
        if ("_doNotAllowOthersToBind" in c && c._doNotAllowOthersToBind) return;

        getBindingParameters(c);
      }
    }

    Aspects.of(this).add(new CreateSsmParameters());
  }

  private buildConstructsMetadata(): void {
    const constructs = this.buildConstructsMetadata_collectConstructs(this);
    type Construct = SSTConstructMetadata & {
      addr: string;
      id: string;
      stack: string;
    };
    const byStack: Record<string, Construct[]> = {};
    const local: Construct[] = [];
    for (const c of constructs) {
      const stack = Stack.of(c);
      const list = byStack[stack.node.id] || [];
      const metadata = c.getConstructMetadata();
      const item: Construct = {
        id: c.node.id,
        addr: c.node.addr,
        stack: Stack.of(c).stackName,
        ...metadata,
      };
      local.push(item);
      list.push({
        ...item,
        local: undefined,
      });
      byStack[stack.node.id] = list;
    }

    // Register constructs
    for (const child of this.node.children) {
      if (child instanceof Stack) {
        const stackName = (child as Stack).node.id;
        (child as Stack).addOutputs({
          SSTMetadata: JSON.stringify({
            app: this.name,
            stage: this.stage,
            version: useProject().version,
            metadata: byStack[stackName] || [],
          }),
        });
      }
    }
  }

  private buildConstructsMetadata_collectConstructs(
    construct: IConstruct
  ): (SSTConstruct & IConstruct)[] {
    return [
      isSSTConstruct(construct) ? construct : undefined,
      ...construct.node.children.flatMap((c) =>
        this.buildConstructsMetadata_collectConstructs(c)
      ),
    ].filter((c): c is SSTConstruct & IConstruct => Boolean(c));
  }

  private applyRemovalPolicy(current: IConstruct) {
    if (!this._defaultRemovalPolicy) return;

    // Apply removal policy to all resources
    if (current instanceof CfnResource) {
      current.applyRemovalPolicy(
        RemovalPolicy[
          this._defaultRemovalPolicy.toUpperCase() as keyof typeof RemovalPolicy
        ]
      );
    }

    // Remove S3 objects on destroy
    if (
      this._defaultRemovalPolicy === "destroy" &&
      current instanceof Bucket &&
      !current.node.tryFindChild("AutoDeleteObjectsCustomResource")
    ) {
      // Calling a private method here. It's the easiest way to lazily
      // enable auto-delete.
      // @ts-expect-error
      (current as Bucket).enableAutoDeleteObjects();
    }

    current.node.children.forEach((resource) =>
      this.applyRemovalPolicy(resource)
    );
  }

  private removeGovCloudUnsupportedResourceProperties() {
    if (!this.region.startsWith("us-gov-")) {
      return;
    }

    class RemoveGovCloudUnsupportedResourceProperties implements IAspect {
      public visit(node: IConstruct): void {
        if (node instanceof CfnFunction) {
          node.addPropertyDeletionOverride("EphemeralStorage");
        } else if (node instanceof CfnLogGroup) {
          node.addPropertyDeletionOverride("Tags");
        }
      }
    }

    Aspects.of(this).add(new RemoveGovCloudUnsupportedResourceProperties());
  }

  private ensureUniqueConstructIds() {
    // "ids" has the shape of:
    // {
    //   Table: {
    //     "id_with_hyphen": "id-with-hyphen",
    //     "id_with_underscore": "id_with_underscore",
    //   }
    // }
    const ids: Record<string, Record<string, string>> = {};

    class EnsureUniqueConstructIds implements IAspect {
      public visit(c: IConstruct): void {
        if (!isSSTConstruct(c)) return;
        if ("_doNotAllowOthersToBind" in c && c._doNotAllowOthersToBind) return;

        const className = c.constructor.name;
        const id = c.id;
        const normId = id.replace(/-/g, "_");
        const existingIds = ids[className] || {};

        if (!id.match(/^[a-zA-Z]([a-zA-Z0-9-_])*$/)) {
          throw new Error(
            [
              `Invalid id "${id}" for ${className} construct.`,
              ``,
              `Starting v1.16, construct ids can only contain alphabetic characters, hyphens ("-"), and underscores ("_"), and must start with an alphabetic character. If you are migrating from version 1.15 or earlier, please see the upgrade guide — https://docs.serverless-stack.com/upgrade-guide#upgrade-to-v116`,
            ].join("\n")
          );
        } else if (["Parameter", "Secret"].includes(className)) {
          const existingConfigId =
            ids.Secret?.[normId] || ids.Parameter?.[normId];
          if (existingConfigId === id) {
            throw new Error(`ERROR: Config with id "${id}" already exists.`);
          } else if (existingConfigId) {
            throw new Error(
              `ERROR: You cannot have the same Config id with an underscore and hyphen: "${existingConfigId}" and "${id}".`
            );
          }
        } else if (existingIds[normId]) {
          throw new Error(
            [
              existingIds[normId] === id
                ? `${className} with id "${id}" already exists.`
                : `You cannot have the same ${className} id with an underscore and hyphen: "${existingIds[normId]}" and "${id}".`,
              ``,
              `Starting v1.16, constructs must have unique ids for a given construct type. If you are migrating from version 1.15 or earlier, set the "cdk.id" in the construct with the existing id, and pick a unique id for the construct. Please see the upgrade guide — https://docs.serverless-stack.com/upgrade-guide#upgrade-to-v116`,
              ``,
              `    For example, if you have two Bucket constructs with the same id:`,
              `      new Bucket(this, "bucket");`,
              `      new Bucket(this, "bucket");`,
              ``,
              `    Change it to:`,
              `      new Bucket(this, "usersBucket", {`,
              `        cdk: {`,
              `          id: "bucket"`,
              `        }`,
              `      });`,
              `      new Bucket(this, "adminBucket", {`,
              `        cdk: {`,
              `          id: "bucket"`,
              `        }`,
              `      });`,
            ].join("\n")
          );
        }
        existingIds[normId] = id;
        ids[className] = existingIds;
      }
    }

    Aspects.of(this).add(new EnsureUniqueConstructIds());
  }

  private foreachConstruct(fn: (c: IConstruct) => void) {
    const loop = (parent: IConstruct) => {
      for (const child of parent.node.children) {
        fn(child);
        loop(child);
      }
    };

    for (const child of this.node.children) {
      if (child instanceof Stack) {
        loop(child);
      }
    }
  }

  // Functional Stack
  // This is a magical global to avoid having to pass app everywhere.
  // We only every have one instance of app

  stack<T extends FunctionalStack<any>>(
    fn: T,
    props?: StackProps & { id?: string }
  ): ReturnType<T> extends Promise<any> ? Promise<void> : App {
    return stack(this, fn, props);
  }
}
