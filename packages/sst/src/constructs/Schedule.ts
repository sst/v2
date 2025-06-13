import { Construct } from "constructs";
import { CfnSchedule } from "aws-cdk-lib/aws-scheduler";
import { Role, ServicePrincipal, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Function as Func } from "./Function.js";
import { getFunctionRef } from "./Construct.js";
import { SSTConstruct } from "./Construct.js";
import { Permissions } from "./util/permission.js";

type ScheduleJob =
    | string
    | {
    function: string;
    cdk?: {
        target?: Partial<CfnSchedule.TargetProperty>;
    };
};

export interface ScheduleProps {
    schedule: string;
    timezone?: string;
    enabled?: boolean;
    description?: string;
    retryPolicy?: CfnSchedule.RetryPolicyProperty;
    job: ScheduleJob;
}

export class Schedule extends Construct implements SSTConstruct {
    readonly id: string;
    readonly jobFunction: Func;
    readonly invokeRole: Role;
    readonly scheduleResource: CfnSchedule;

    constructor(scope: Construct, id: string, props: ScheduleProps) {
        super(scope, id);
        this.id = id;

        let jobDefinition: string;
        let jobTargetOverride: Partial<CfnSchedule.TargetProperty> = {};

        if (typeof props.job === "string") {
            jobDefinition = props.job;
        } else if (typeof props.job === "object" && "function" in props.job) {
            jobDefinition = props.job.function;
            jobTargetOverride = props.job.cdk?.target ?? {};
        } else {
            throw new Error(`Invalid "job" property provided to Schedule: ${props.job}`);
        }

        this.jobFunction = Func.fromDefinition(
            this,
            `Job_${this.node.id}`,
            jobDefinition
        );

        this.invokeRole = new Role(this, "ScheduleLambdaInvokeRole", {
            assumedBy: new ServicePrincipal("scheduler.amazonaws.com"),
        });

        this.invokeRole.addToPolicy(
            new PolicyStatement({
                actions: ["lambda:InvokeFunction"],
                resources: [this.jobFunction.functionArn],
            })
        );

        const target: CfnSchedule.TargetProperty = {
            arn: this.jobFunction.functionArn,
            roleArn: this.invokeRole.roleArn,
            ...jobTargetOverride,
            ...(props.retryPolicy ? { retryPolicy: props.retryPolicy } : {}),
        };

        this.scheduleResource = new CfnSchedule(this, "ScheduleResource", {
            flexibleTimeWindow: { mode: "OFF" },
            scheduleExpression: props.schedule,
            scheduleExpressionTimezone: props.timezone,
            target,
            state: props.enabled === false ? "DISABLED" : "ENABLED",
            description: props.description,
        });

        const app = this.node.root as any;
        app.registerTypes?.(this);
    }

    bind = (constructs: SSTConstruct[]) => {
        this.jobFunction.bind(constructs);
    };

    attachPermissions = (permissions: string | string[] | Permissions) => {
        const perms: Permissions = typeof permissions === "string" ? [permissions] : permissions;
        this.jobFunction.attachPermissions(perms);
    };

    getConstructMetadata() {
        return {
            type: "Schedule",
            data: {
                schedule: this.scheduleResource.scheduleExpression,
                job: getFunctionRef(this.jobFunction),
                scheduleResourceName: this.scheduleResource.node.id,
            },
        };
    }

    getBindings() {
        return undefined;
    }
}
