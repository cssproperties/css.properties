import { highlight as PrismHighlight, languages } from "prismjs";

/**
 * Highlight a code string using Prism.
 *
 * @param code - The code to highlight
 * @param lang - The language to highlight the code in
 * @returns the highlighted code
 *
 * @public
 */
export function highlight(code: string, lang: string): string {
    if (lang && languages[lang]) {
        return PrismHighlight(code, languages[lang], lang);
    }

    return "";
}
