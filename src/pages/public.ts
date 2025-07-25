import type { TPage } from "../types/page.js";

import { convertPartialToPage } from "../converters/partial-to-page.js";
import { page404 } from "./404/page.js";
import { MainPage } from "./main/page.js";
import { randomArticle } from "./random-article/page.js";

export const publicPages: TPage[] = [
  // must have
  convertPartialToPage(MainPage),
  convertPartialToPage(page404),
  // others
  convertPartialToPage(randomArticle),
];
