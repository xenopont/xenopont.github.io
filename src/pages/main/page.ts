import { convertStringToPath } from "../../converters/string-to-path.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const MainPage: TPartialPage = {
  content: "<h1>Dev XL</h1>",
  localApp: `${import.meta.dirname}/app.ts`,
  path: convertStringToPath(""),
  title: "Dev XL",
};
