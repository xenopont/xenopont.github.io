import { convertStringToPath } from "../converters/string-to-path.js";
import type { TPartialPage } from "../types/partial-page.js";

export const MainPage: TPartialPage = {
  path: convertStringToPath(""),
  title: "Dev XL",
};
