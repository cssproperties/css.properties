import { codeViewerStyles } from "./code-viewer.styles.js";
import { codeViewerTemplate } from "./code-viewer.template.js";

export const definition = Object.freeze({
    name: "code-viewer",
    styles: codeViewerStyles,
    template: codeViewerTemplate(),
});
