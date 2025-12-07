import "../../html5/html-elements.js";
import { div } from "../../html5/html-elements.js";
import type { THtmlElementMarkup } from "../../html5/types.js";
import { homeButton } from "./home-button.js";

export const topBar: THtmlElementMarkup = div(
  [homeButton({ isHomePage: true })],
  {
    id: "top-bar",
  },
);
