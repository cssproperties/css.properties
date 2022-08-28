import { codeViewerTemplate as template } from "./code-viewer.template.js";
import { codeViewerStyles as styles } from "./code-viewer.styles.js";
import { CodeViewer } from "./code-viewer.js";

export const propsCodeViewer = CodeViewer.compose({
  baseName: "code-viewer",
  template,
  styles,
});

export { styles as codeViewerStyles };
