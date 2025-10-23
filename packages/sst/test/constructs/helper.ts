import { Match, Matcher, MatchResult, Template } from "aws-cdk-lib/assertions";
import { Stack } from "aws-cdk-lib";
import { App, AppDeployProps } from "../../dist/constructs";
import { setProject, useProject } from "../../dist/project.js";

import * as os from "os";
import * as path from "path";
import * as fs from "fs/promises";
import * as crypto from "crypto";

///////////////////////
// Matcher functions //
///////////////////////

export const ANY = Match.anyValue();
export const ABSENT = Match.absent();
export const not = Match.not;
export const arrayWith = Match.arrayWith;
export const objectLike = Match.objectLike;
export const stringLikeRegexp = Match.stringLikeRegexp;

export async function createApp(props?: Partial<AppDeployProps>) {
  // Suppress warnings about deprecated CDK props.
  process.env.JSII_DEPRECATED = "quiet";

  const root = path.join(os.tmpdir(), "sst", crypto.randomUUID());
  await fs.mkdir(root, { recursive: true });
  await fs.mkdir(path.join(root, ".sst"), { recursive: true });
  setProject({
    version: "test",
    cdkVersion: "test",
    constructsVersion: "test",
    stacks: async () => {},
    metafile: null as any,
    config: {
      stage: "test",
      name: "app",
      ssmPrefix: "/test/test/",
      region: "us-east-1",
    },
    paths: {
      root: root,
      out: path.join(root, ".sst"),
      config: path.join(root, "sst.config.ts"),
      artifacts: path.join(root, ".sst", "artifacts"),
    },
  });
  const project = useProject();

  return new App({
    mode: "deploy",
    stage: project.config.stage,
    name: project.config.name,
    region: project.config.region,
    ...props,
  });
}

export function stringLike(pattern: RegExp): Matcher {
  return new StringMatch("stringLike", pattern);
}
export function stringNotLike(pattern: RegExp): Matcher {
  return new StringNotMatch("stringLike", pattern);
}

class StringMatch extends Matcher {
  constructor(public readonly name: string, private readonly pattern: RegExp) {
    super();
  }

  public test(actual: any): MatchResult {
    const result = new MatchResult(actual);
    if (!actual.match(this.pattern)) {
      result.recordFailure({
        matcher: this,
        path: [],
        message: `Expected ${this.pattern} but received ${actual}`,
      });
    }
    return result;
  }
}

class StringNotMatch extends Matcher {
  constructor(public readonly name: string, private readonly pattern: RegExp) {
    super();
  }

  public test(actual: any): MatchResult {
    const result = new MatchResult(actual);
    if (actual.match(this.pattern)) {
      result.recordFailure({
        matcher: this,
        path: [],
        message: `Expected ${this.pattern} but received ${actual}`,
      });
    }
    return result;
  }
}

////////////////////////
// Template functions //
////////////////////////

export function getResources(stack: Stack, type: string) {
  const template = Template.fromStack(stack);
  return template.findResources(type);
}

export function countResources(
  stack: Stack,
  type: string,
  count: number
): void {
  // Each stack has a Lambda function "MetadataUploader", ignore it
  if (type === "AWS::Lambda::Function" || type === "AWS::IAM::Role") {
    count = count + 1;
  }
  const template = Template.fromStack(stack);
  template.resourceCountIs(type, count);
}

export function countResourcesLike(
  stack: Stack,
  type: string,
  count: number,
  props: any
): void {
  const template = Template.fromStack(stack);
  const resources = template.findResources(
    type,
    Match.objectLike({
      Properties: props,
    })
  );
  const counted = Object.keys(resources).length;
  if (counted !== count) {
    throw new Error(
      `Expected ${count} resources of type ${type} but found ${counted}`
    );
  }
}

export function hasResource(stack: Stack, type: string, props: any) {
  const template = Template.fromStack(stack);
  template.hasResourceProperties(type, props);
}

export function hasResourceTemplate(stack: Stack, type: string, props: any) {
  const template = Template.fromStack(stack);
  template.hasResource(type, props);
}

export function hasOutput(stack: Stack, logicalId: string, props: any) {
  const template = Template.fromStack(stack);
  template.hasOutput(logicalId, props);
}

export function hasNoOutput(stack: Stack, logicalId: string) {
  const template = Template.fromStack(stack);
  const results = template.findOutputs(logicalId);
  if (results[logicalId]) {
    throw new Error(
      `Expected "${logicalId}" output to not exist. But found value "${JSON.stringify(
        results[logicalId]
      )}"`
    );
  }
}

export function templateMatches(stack: Stack, props: any) {
  const template = Template.fromStack(stack);
  template.templateMatches(props);
}

export function printResource(stack: Stack, type: string) {
  const template = Template.fromStack(stack);
  const resources = template.findResources(type);
  console.log(JSON.stringify(resources, null, 2));
}
