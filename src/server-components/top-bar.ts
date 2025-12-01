import "../html5/html-elements.js";
import { div } from "../html5/html-elements.js";
import type { THtmlElementMarkup } from "../html5/types.js";

export const topBar: THtmlElementMarkup = div([], {
  class: "top-bar",
  style: "height: 40px; background-color: #222222;",
});
