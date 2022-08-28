import { html, ref, slotted, type ViewTemplate } from "@microsoft/fast-element";
import { type CodeViewer } from "./code-viewer.js";

/**
 * The template for the {@link CodeViewer} component.
 *
 * @returns - The template for the {@link CodeViewer} component.
 *
 * @public
 */
export function codeViewerTemplate(): ViewTemplate<CodeViewer> {
  return html`
    <slot ${slotted({ property: "defaultSlot" })}></slot>
    <pre class="${x => `language-${x.language}`}"><code ${ref(
      "code"
    )}></code></pre>
  `;
}
