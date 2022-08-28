import { highlight as PrismHighlight, languages } from "prismjs";

export function highlight(code: string, lang: string) {
  if (lang && languages[lang]) {
    return PrismHighlight(code, languages[lang], lang);
  }

  return "";
}
