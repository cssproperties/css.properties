import { css } from "@microsoft/fast-element";
import prismTomorrowStyles from "prismjs/themes/prism-tomorrow.css";

export const codeViewerStyles = css`
    :host([hidden]) {
        display: none;
    }

    :host {
        display: block;
    }

    slot,
    ::slotted(*) {
        display: none;
    }

    ${prismTomorrowStyles}
`;
