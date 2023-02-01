import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import CommonJS from "@rollup/plugin-commonjs";
import { string } from "rollup-plugin-string";
import json from "@rollup/plugin-json";

export default {
    input: "src/index.ts",
    output: [
        {
            dir: "dist",
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        nodeResolve({ mainFields: ["browser", "module", "main", "exports"] }),
        CommonJS(),
        json(),
        typescript(),
        string({ include: "**/*.css" }),
    ],
};
