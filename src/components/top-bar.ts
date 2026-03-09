import { a, div, safe, span } from "../html/elements.js";
import type { THtmlEntity } from "../html/entities.js";
import { baseUrl } from "../utils/base-url.js";

export const topBar = (): THtmlEntity => {
  return div({ id: "top-bar" }, [
    a({ href: `${baseUrl}/`, id: "home-link" }, [
      span({ id: "home-link-chevron" }, [safe("")]),
    ]),
  ]);
};
