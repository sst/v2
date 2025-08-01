# How to use SST with IntelliJ IDEA

An example serverless app created with SST.

## Getting Started

[**Read the tutorial**](https://sst.dev/examples/how-to-debug-lambda-functions-with-intellij-idea.html)

Install the example.

```bash
$ npx create-sst@two --template=examples/intellij-idea
# Or with Yarn
$ yarn create sst@two --template=examples/intellij-idea
# Or with PNPM
$ pnpm create sst@two --template=examples/intellij-idea
```

## Commands

### `yarn run start`

Starts the local Lambda development environment.

### `yarn run build`

Build your app and synthesize your stacks.

Generates a `.build/` directory with the compiled files and a `.build/cdk.out/` directory with the synthesized CloudFormation stacks.

### `yarn run deploy [stack]`

Deploy all your stacks to AWS. Or optionally deploy, a specific stack.

### `yarn run remove [stack]`

Remove all your stacks and all of their resources from AWS. Or optionally removes, a specific stack.

### `yarn run test`

Runs your tests using Jest. Takes all the [Jest CLI options](https://jestjs.io/docs/en/cli).

## Documentation

Learn more about SST.

- [Docs](https://docs.sst.dev)
- [sst](https://docs.sst.dev/packages/sst)

## Community

[Follow us on Twitter](https://twitter.com/sst_dev) or [post on our forums](https://discourse.sst.dev).
