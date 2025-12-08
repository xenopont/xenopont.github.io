import "../../html5/html-elements.js";
import { div } from "../../html5/html-elements.js";
import type { THtmlElementMarkup } from "../../html5/types.js";
import { homeButton } from "./home-button.js";

type TTopBarArgs = {
  isHomePage: boolean;
};

export const topBar = (args: Partial<TTopBarArgs> = {}): THtmlElementMarkup => {
  const defaultArgs: TTopBarArgs = {
    isHomePage: false,
  };
  const mergedArgs = { ...defaultArgs, ...args };
  const { isHomePage } = mergedArgs;

  return div([homeButton({ isHomePage })], {
    id: "top-bar",
  });
};
