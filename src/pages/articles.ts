import { partialToPage } from "../converters/partial-to-page.js";
import type { TPage } from "../types/page.js";
import { newerArticle } from "./new-article/page.js";
import { randomArticle } from "./random-article/page.js";

export const articles: TPage[] = [
  partialToPage(randomArticle),
  partialToPage(newerArticle),
];
