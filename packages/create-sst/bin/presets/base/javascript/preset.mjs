import { extract, patch, install } from "create-sst";

export default [
  extract(),
  install({
    packages: ["sst@^2", "aws-cdk-lib@2.179.0", "constructs@10.3.0"],
    dev: true,
  }),
];
