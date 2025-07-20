import { convertStringToPath } from "../../converters/string-to-path.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const randomArticle: TPartialPage = {
  content: "Random Article",
  path: convertStringToPath("random-article"),
  title: "Random Article",
};
