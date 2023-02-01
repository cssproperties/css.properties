import {
    ElementViewTemplate,
    html,
    ref,
    slotted,
} from "@microsoft/fast-element";
import { endSlotTemplate, startSlotTemplate } from "@microsoft/fast-foundation";
import { PropertySelector } from "./property-selector.js";
import { PropertySelectorOptions } from "./property-selector.options.js";

/**
 * The template for the PropertySelector component.
 * @public
 */
export function propertySelectorTemplate<T extends PropertySelector>(
    options: PropertySelectorOptions = {}
): ElementViewTemplate<T> {
    return html<T>`
        <template>
            <details part="details" ${ref("details")}>
                <summary
                    class="invoker summary"
                    part="summary"
                    role="button"
                    aria-controls="disclosure-content"
                    aria-expanded="${x => x.expanded}"
                >
                    ${startSlotTemplate(options)}
                    <slot name="summary" ${slotted({ property: "summarySlot" })}
                        >${x => x.summary}</slot
                    >
                    ${endSlotTemplate(options)}
                </summary>
                <div id="disclosure-content" part="disclosure-content">
                    <slot
                        ${slotted({
                            property: "defaultSlot",
                        })}
                    >
                        ${options.defaultSlottedContent ?? ""}
                    </slot>
                </div>
            </details>
        </template>
    `;
}
