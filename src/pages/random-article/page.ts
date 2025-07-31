import { stringToPath } from "../../converters/string-to-path.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const randomArticle: TPartialPage = {
  content: "Random Article",
  path: stringToPath("random-article"),
  title: "Random Article",
  createdAt: new Date("2025-07-01"),
  summary: `This is a random article that should be shown as the first element
  in the article list.`,
};
