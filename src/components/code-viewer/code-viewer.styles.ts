import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";
import prism from "prismjs/themes/prism-tomorrow.css";

export const codeViewerStyles = css`
  ${display("block")}

  ${prism}

  slot,
  ::slotted(*) {
    display: none;
  }
`;
