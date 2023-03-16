import { attr, FASTElement, observable } from "@microsoft/fast-element";
import { highlight, prettify } from "../../app/index.js";

/**
 * A code viewer component.
 *
 *  @extends FASTElement
 *
 * @public
 */
export class CodeViewer extends FASTElement {
    /**
     * Reference to the internal code element.
     *
     * @public
     */
    code: HTMLElement;

    /**
     * The language of the code.
     *
     * @remarks HTML attrubute: `language`
     *
     * @public
     */
    @attr
    language: string;

    /**
     * The default slot.
     *
     * @public
     */
    @observable
    defaultSlot: Element[];

    /**
     * Updates the code element with the prettified and highlighted code.
     * @param prev - the previous slotted content
     * @param next - the current slotted content
     *
     * @public
     */
    defaultSlotChanged(prev: Element[], next: Element[]): void {
        if (this.$fastController.isConnected) {
            this.code.innerHTML = highlight(
                prettify(this.innerHTML),
                this.language
            );
        }
    }
}
