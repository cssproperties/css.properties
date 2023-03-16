import { attr, observable } from "@microsoft/fast-element";
import { FASTDisclosure } from "@microsoft/fast-foundation";

/**
 * A navigation dropdown component built on the {@link @microsoft/fast-foundation#Disclosure} element.
 * @public
 * @remarks
 * HTML Element: `<property-selector>`
 *
 */
export class PropertySelector extends FASTDisclosure {
    /**
     * The slotted summary content.
     *
     * @internal
     */
    @observable
    public summarySlot: Node[];

    /**
     * The slotted default content.
     *
     * @internal
     */
    @observable
    public defaultSlot: Node[];

    @attr({ attribute: "open", mode: "boolean" })
    public open: boolean = false;
}
