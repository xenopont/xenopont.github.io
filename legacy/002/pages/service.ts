import type { TPage } from "../types/page.js";
import { partialToPage } from "../converters/partial-to-page.js";
import { MainPage } from "./_main/page.js";
import { page404 } from "./_404/page.js";

export const servicePages: TPage[] = [
  partialToPage(MainPage),
  partialToPage(page404),
];
