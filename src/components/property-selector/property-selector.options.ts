import { SyntheticViewTemplate } from "@microsoft/fast-element";
import { StartEndOptions } from "@microsoft/fast-foundation";

export interface PropertySelectorOptions extends StartEndOptions {
    defaultSlottedContent?: SyntheticViewTemplate;
}
