import type { Options } from "prettier";
import parserCSS from "prettier/parser-postcss.js";
import { format } from "prettier/standalone.js";

/**
 * Prettifies the provided code.
 *
 * @param source - The source code to prettify.
 * @param options - The prettier options.
 * @returns  The prettified source code.
 */
export function prettify(source: string, options: Options = {}): string {
    return format(source, {
        parser: "css",
        plugins: [parserCSS],
        ...options,
    });
}
