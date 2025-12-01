import { partialToPage } from "../converters/partial-to-page.js";
import type { TPage } from "../types/page.js";
import { page404 } from "./_404/page.js";
import { indexPage } from "./_index/index.js";
import { MainPage } from "./_main/page.js";

export const servicePages: TPage[] = [
  partialToPage(MainPage),
  partialToPage(page404),
  indexPage,
];
