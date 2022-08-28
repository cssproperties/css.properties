import { CodeViewer } from "./code-viewer.js";
import { codeViewerStyles } from "./code-viewer.styles.js";
import { codeViewerTemplate } from "./code-viewer.template.js";

CodeViewer.define({
  name: "code-viewer",
  template: codeViewerTemplate(),
  styles: codeViewerStyles,
});
