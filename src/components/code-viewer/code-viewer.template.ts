import type { ElementViewTemplate, FASTElement } from "@microsoft/fast-element";
import { html, ref, slotted } from "@microsoft/fast-element";
import { type CodeViewer } from "./code-viewer.js";

/**
 * The template for the {@link CodeViewer} component.
 *
 * @returns - The template for the {@link CodeViewer} component.
 *
 * @public
 */
export function codeViewerTemplate<
    T extends CodeViewer
>(): ElementViewTemplate<T> {
    return html<T>`
        <slot ${slotted({ property: "defaultSlot" })}></slot>
        <pre
            class="${x => `language-${x.language}`}"
            part="pre"
        ><code part="code" ${ref("code")}></code></pre>
    `;
}
