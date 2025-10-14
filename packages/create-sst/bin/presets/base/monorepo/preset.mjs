import { patch, extend, extract, install } from "create-sst";
export default [
  extend("presets/base/typescript"),
  patch({
    file: "package.json",
    operations: [{ op: "add", path: "/workspaces/-", value: "packages/*" }],
  }),
  extract(),
  install({
    packages: ["vitest", "@types/node", "sst@^2"],
    path: "packages/core",
    dev: true,
  }),
  install({
    packages: ["@types/node", "@types/aws-lambda", "vitest", "sst@^2"],
    path: "packages/functions",
    dev: true,
  }),
];
