import { a, li, menu, safe, span } from "../html/elements.js";
import type { THtmlEntity } from "../html/entities.js";
import { baseUrl } from "../utils/base-url.js";

export const topBar = (homePage: boolean = false): THtmlEntity => {
  return menu({ id: "top-bar" }, [
    li({ id: "home-link-container" }, [
      a(
        {
          href: `${baseUrl}/`,
          id: "home-link",
          class: homePage ? "home" : "",
        },
        [span({ id: "home-link-chevron" }, [safe("")])],
      ),
    ]),
  ]);
};
