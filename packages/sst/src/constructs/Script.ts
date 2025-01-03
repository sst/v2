import path from "path";
import url from "url";
import { Construct } from "constructs";
import { CustomResource, Duration } from "aws-cdk-lib/core";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Code, Runtime, Function as CdkFunction } from "aws-cdk-lib/aws-lambda";
import { App } from "./App.js";
import { Stack } from "./Stack.js";
import {
  Function as Fn,
  FunctionProps,
  FunctionDefinition,
} from "./Function.js";
import { SSTConstruct, getFunctionRef } from "./Construct.js";
import { Permissions } from "./util/permission.js";
import { BindingResource } from "./util/binding.js";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export interface ScriptProps {
  /**
   * An object of input parameters to be passed to the script. Made available in the `event` object of the function.
   *
   * @example
   * ```js
   * import { Script } from "sst/constructs";
   *
   * new Script(stack, "Script", {
   *   onCreate: "src/function.create",
   *   params: {
   *     hello: "world",
   *   },
   * });
   * ```
   */
  params?: Record<string, any>;
  /**
   * By default, the `onUpdate` function runs during each deployment. If a version is provided, it will only run when the version changes.
   *
   * @example
   * ```js
   * import { Script } from "sst/constructs";
   *
   * new Script(stack, "Script", {
   *   onUpdate: "src/function.update",
   *   version: "v17",
   * });
   * ```
   */
  version?: string;
  defaults?: {
    /**
     * The default function props to be applied to all the Lambda functions in the API. The `environment`, `permissions` and `layers` properties will be merged with per route definitions if they are defined.
     *
     * @example
     * ```js
     * new Script(stack, "Api", {
     *   defaults: {
     *     function: {
     *       timeout: 20,
     *     }
     *   }
     * });
     * ```
     */
    function?: FunctionProps;
  };
  /**
   * Specifies the function to be run once when the Script construct is added to the stack or when the entire stack is deployed for the first time.
   * @example
   * ```js
   * new Script(stack, "Api", {
   *   onCreate: "src/function.create",
   * })
   * ```
   */
  onCreate?: FunctionDefinition;
  /**
   * Specifies the function to be run each time the Script construct is redeployed. If a version is provided, the function is only executed when the version changes.
   *
   * Note that the `onUpdate` function is not run during the initial creation of the Script construct.
   * For initial creation, use `onCreate`.
   * @example
   * ```js
   * new Script(stack, "Api", {
   *   onUpdate: "src/function.update",
   * })
   * ```
   */
  onUpdate?: FunctionDefinition;
  /**
   * Specifies the function to be run once when the Script construct is deleted from the stack or when the entire stack is removed from the app.
   * @example
   * ```js
   * new Script(stack, "Api", {
   *   onDelete: "src/function.delete",
   * })
   * ```
   */
  onDelete?: FunctionDefinition;
}

/////////////////////
// Construct
/////////////////////

/**
 * The `Script` construct is a higher level CDK construct that makes it easy to run a script in a Lambda function during the deployment process.
 *
 * @example
 *
 * ```js
 * import { Script } from "sst/constructs";
 *
 * new Script(stack, "Script", {
 *   onCreate: "src/function.create",
 *   onUpdate: "src/function.update",
 *   onDelete: "src/function.delete",
 * });
 * ```
 */
export class Script extends Construct implements SSTConstruct {
  /**
   * The internally created onCreate `Function` instance.
   */
  public readonly createFunction?: Fn;
  /**
   * The internally created onUpdate `Function` instance.
   */
  public readonly updateFunction?: Fn;
  /**
   * The internally created onDelete `Function` instance.
   */
  public readonly deleteFunction?: Fn;
  protected readonly props: ScriptProps;
  public readonly id: string;

  constructor(scope: Construct, id: string, props: ScriptProps) {
    super(scope, id);
    this.id = id;
    if ((props as any).function) this.checkDeprecatedFunction();

    // Validate deprecated "function" prop

    // Validate at least 1 function is provided
    if (!props.onCreate && !props.onUpdate && !props.onDelete) {
      throw new Error(
        `Need to provide at least one of "onCreate", "onUpdate", or "onDelete" functions for the "${this.node.id}" Script`
      );
    }

    const root = scope.node.root as App;
    this.props = props;

    this.createFunction = this.createUserFunction("onCreate", props.onCreate);
    this.updateFunction = this.createUserFunction("onUpdate", props.onUpdate);
    this.deleteFunction = this.createUserFunction("onDelete", props.onDelete);
    const crFunction = this.createCustomResourceFunction();
    this.createCustomResource(root, crFunction);

    const app = this.node.root as App;
    app.registerTypes(this);
  }

  /**
   * Binds additional resources to the script
   *
   * @example
   * ```js
   * script.bind([STRIPE_KEY, bucket]);
   * ```
   */
  public bind(constructs: BindingResource[]): void {
    this.createFunction?.bind(constructs);
    this.updateFunction?.bind(constructs);
    this.deleteFunction?.bind(constructs);
  }

  /**
   * Grants additional permissions to the script
   *
   * @example
   * ```js
   * script.attachPermissions(["s3"]);
   * ```
   */
  public attachPermissions(permissions: Permissions): void {
    this.createFunction?.attachPermissions(permissions);
    this.updateFunction?.attachPermissions(permissions);
    this.deleteFunction?.attachPermissions(permissions);
  }

  protected createUserFunction(
    type: string,
    fnDef?: FunctionDefinition
  ): Fn | undefined {
    if (!fnDef) {
      return;
    }

    // function is construct => return function directly
    if (fnDef instanceof Fn) {
      // validate live dev is not enabled
      if (fnDef._isLiveDevEnabled) {
        throw new Error(
          `Live Lambda Dev cannot be enabled for functions in the Script construct. Set the "enableLiveDev" prop for the function to "false".`
        );
      }

      return Fn.fromDefinition(
        this,
        `${type}Function`,
        fnDef,
        this.props.defaults?.function,
        `The "defaults.function" cannot be applied if an instance of a Function construct is passed in. Make sure to define the "${type}" function using FunctionProps, so the Script construct can apply the "defaults.function" to them.`
      );
    }

    // function is string => create function
    else if (typeof fnDef === "string") {
      return Fn.fromDefinition(
        this,
        `${type}Function`,
        {
          handler: fnDef,
          enableLiveDev: false,
        },
        {
          timeout: 900,
          ...this.props.defaults?.function,
        }
      );
    }

    // function is props => create function
    return Fn.fromDefinition(
      this,
      `${type}Function`,
      {
        ...fnDef,
        enableLiveDev: false,
      },
      {
        timeout: 900,
        ...this.props.defaults?.function,
      }
    );
  }

  private createCustomResourceFunction(): CdkFunction {
    const handler = new CdkFunction(this, "ScriptHandler", {
      code: Code.fromAsset(path.join(__dirname, "../support/script-function")),
      runtime: Runtime.NODEJS_22_X,
      handler: "index.handler",
      timeout: Duration.minutes(15),
      memorySize: 1024,
      initialPolicy: [
        new PolicyStatement({
          actions: ["cloudformation:DescribeStacks"],
          resources: [Stack.of(this).stackId],
        }),
      ],
    });
    this.createFunction?.grantInvoke(handler);
    this.updateFunction?.grantInvoke(handler);
    this.deleteFunction?.grantInvoke(handler);

    return handler;
  }

  private createCustomResource(app: App, crFunction: CdkFunction): void {
    // Note: "Version" is set to current timestamp to ensure the Custom
    //       Resource function is run on every update.
    //
    //       Do not use the current timestamp in Live mode, b/c we want the
    //       this custom resource to remain the same in CloudFormation template
    //       when rebuilding infrastructure. Otherwise, there will always be
    //       a change when rebuilding infrastructure b/c the "version" property
    //       changes on each build.
    const defaultVersion =
      app.mode === "dev" ? app.debugScriptVersion : Date.now().toString();
    const version = this.props.version ?? defaultVersion;
    new CustomResource(this, "ScriptResource", {
      serviceToken: crFunction.functionArn,
      resourceType: "Custom::SSTScript",
      properties: {
        UserCreateFunction: this.createFunction?.functionName,
        UserUpdateFunction: this.updateFunction?.functionName,
        UserDeleteFunction: this.deleteFunction?.functionName,
        UserParams: JSON.stringify(this.props.params || {}),
        Version: version,
      },
    });
  }

  private checkDeprecatedFunction(): void {
    throw new Error(
      `The "function" property has been replaced by "onCreate" and "onUpdate". More details on upgrading - https://docs.sst.dev/constructs/Script#upgrading-to-v0460`
    );
  }

  /** @internal */
  public getConstructMetadata() {
    return {
      type: "Script" as const,
      data: {
        createfn: getFunctionRef(this.createFunction),
        deletefn: getFunctionRef(this.deleteFunction),
        updatefn: getFunctionRef(this.updateFunction),
      },
    };
  }

  /** @internal */
  public getBindings() {
    return undefined;
  }
}
