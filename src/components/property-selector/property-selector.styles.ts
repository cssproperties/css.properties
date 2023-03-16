import { css } from "@microsoft/fast-element";

export const propertySelectorStyles = css`
    :host {
        display: inline-flex;
        position: relative;
    }

    [part="disclosure-content"] {
        background: #f6f4ef;
        position: absolute;
    }
`;
