import "../html5/html-elements.js";
import { button, div } from "../html5/html-elements.js";
import type { THtmlElementMarkup } from "../html5/types.js";

export const topBar: THtmlElementMarkup = div(
  [button([], { class: "home-button" })],
  {
    class: "top-bar",
  },
);
