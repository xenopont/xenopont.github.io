import { a, span } from "../../html5/html-elements.js";
import { none } from "../../html5/non-html-elements.js";
import type { THtmlElementMarkup } from "../../html5/types.js";

type THomeButtonArguments = {
  isHomePage: boolean;
};

export const homeButton = (
  args: Partial<THomeButtonArguments> = {},
): THtmlElementMarkup => {
  const defaultArgs = {
    isHomePage: false,
  };
  const mergedArgs = { ...defaultArgs, ...args };

  return span(
    [
      a(
        [
          span(none, {
            id: "home-chevron",
          }),
        ],
        {
          id: "home-button",
          href: mergedArgs.isHomePage ? "#" : "/",
        },
      ),
    ],
    {
      id: "home-button-hover-zone",
      ...(mergedArgs.isHomePage && { class: "home" }),
    },
  );
};
