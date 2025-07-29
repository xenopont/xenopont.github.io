import { stringToPath } from "../../converters/string-to-path.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const randomArticle: TPartialPage = {
  content: "Random Article",
  path: stringToPath("random-article"),
  title: "Random Article",
  createdAt: new Date("2025-07-01"),
};
