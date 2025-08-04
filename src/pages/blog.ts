import type { TPage } from "../types/page.js";
import { partialToPage } from "../converters/partial-to-page.js";
import { randomArticle } from "./random-article/page.js";
import { newerArticle } from "./new-article/page.js";

export const blog: TPage[] = [
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
  partialToPage(randomArticle),
  partialToPage(newerArticle),
];
