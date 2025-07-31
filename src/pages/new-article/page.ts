import { stringToPath } from "../../converters/string-to-path.js";
import type { TPartialPage } from "../../types/partial-page.js";

export const newerArticle: TPartialPage = {
  content: "Hello New World!",
  path: stringToPath("newer-article"),
  title: "The Newer Article",
  createdAt: new Date("2025-06-10"),
  summary: "", //"This is a new article (but actually, it's old)",
};
