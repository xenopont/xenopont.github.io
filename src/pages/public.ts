import type { TPage } from "../types/page.js";

import { partialToPage } from "../converters/partial-to-page.js";
import { page404 } from "./404/page.js";
import { MainPage } from "./main/page.js";
import { randomArticle } from "./random-article/page.js";

export const publicPages: TPage[] = [
  // must have
  partialToPage(MainPage),
  partialToPage(page404),
  // others
  partialToPage(randomArticle),
];
