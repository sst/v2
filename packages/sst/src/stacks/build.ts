import esbuild from "esbuild";
import fs from "fs/promises";
import path from "path";
import { dynamicImport } from "../util/module.js";
import { findAbove } from "../util/fs.js";
import { VisibleError } from "../error.js";
import babel from "@babel/core";
const _ = await import("@babel/generator");
const generate = _.default?.default ?? _.default;
// @ts-expect-error
import ts from "@babel/plugin-syntax-typescript";

declare module "../bus.js" {
  export interface Events {
    "stack.built": {
      metafile: esbuild.Metafile;
    };
  }
}

/**
 * This function is used to remove workspace dependencies from the dependencies
 * object. This is because esbuild must not mark them as external, otherwise
 * the bundling will fail.
 */
function exceptWorkspaceDependencies(
  deps: Record<string, string>
): Record<string, string> {
  let result: Record<string, string> = {};
  for (const key of Object.keys(deps)) {
    let version = deps[key];
    if (!version.startsWith("workspace:")) {
      result[key] = version;
    }
  }
  return result;
}

export async function load(input: string, shallow?: boolean) {
  const parsed = path.parse(input);
  const root = await findAbove(input, "package.json");
  if (!root) throw new VisibleError("Could not find a package.json file");
  // Create the output file in the current working directory. This is because
  // the sst cli command might not always run from where `sst.config.ts` is. When
  // running from another workspace (ie. running `sst bind` in frontend workspace),
  // the "sst" package imported from within the output file might resolve to a
  // different "sst" package than the one resolved by the sst cli command. This
  // will cause issues like "Project not initialized".
  const outfile = path.join(process.cwd(), `.${parsed.name}.${Date.now()}.mjs`);
  const pkg = JSON.parse(
    await fs.readFile(path.join(root, "package.json")).then((x) => x.toString())
  );
  try {
    // Logger.debug("running esbuild on", input);
    const result = await esbuild.build({
      keepNames: true,
      bundle: true,
      platform: "node",
      target: "esnext",
      metafile: true,
      format: "esm",
      logLevel: "silent",
      define: {
        "process.env.IS_SHALLOW": shallow ? "true" : "false",
      },
      external: [
        "aws-cdk-lib",
        "sst",
        // workspace dependencies must be internal
        // because they haven't been built yet
        ...Object.keys(exceptWorkspaceDependencies({
          ...pkg.devDependencies,
          ...pkg.dependencies,
          ...pkg.peerDependencies,
        })),
      ],
      plugins: [
        {
          name: "shallow",
          setup(build) {
            if (!shallow) return;
            build.onLoad({ filter: /.*/ }, async (args) => {
              if (args.path !== input) return;
              let contents = await fs
                .readFile(args.path)
                .then((x) => x.toString());
              const ast = babel.parse(contents, {
                sourceType: "module",
                babelrc: false,
                configFile: false,
                filename: "sst.config.ts",
                plugins: [ts],
              });
              babel.traverse(ast!, {
                ObjectMethod(path) {
                  const { key } = path.node;
                  if ("name" in key && key.name === "stacks") {
                    path.remove();
                  }
                },
              });
              return {
                contents: generate(ast!).code,
                loader: "ts",
              };
            });
          },
        },
      ],
      absWorkingDir: root,
      outfile,
      banner: {
        js: [
          `import { createRequire as topLevelCreateRequire } from 'module';`,
          `const require = topLevelCreateRequire(import.meta.url);`,
        ].join(""),
      },
      // The entry can have any file name (ie. "stacks/anything.ts"). We want the
      // build output to be always named "lib/index.js". This allow us to always
      // import from "buildDir" without needing to pass "anything" around.

      //  stdin: {
      //    contents,
      //    loader: "ts",
      //    resolveDir: path.dirname(input),
      //  },
      entryPoints: [input],
    });
    // Logger.debug("built", input);
    const mod = await dynamicImport(outfile);
    // Logger.debug("imported", input);
    await fs.rm(outfile, {
      force: true,
    });
    if (!mod.default?.config)
      throw new VisibleError(
        `The config file is improperly formatted.`,
        `Example:`,
        `export default {`,
        `  config() {`,
        `    return {`,
        `      name: "my-app",`,
        `      region: "us-east-1"`,
        `    }`,
        `  },`,
        `  stacks(app) {`,
        `  }`,
        `}`
      );
    return [result.metafile, mod.default] as const;
  } catch (e) {
    await fs.rm(outfile, {
      force: true,
    });
    throw e;
  }
}
