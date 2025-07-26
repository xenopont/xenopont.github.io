import type { TPage } from "../types/page.js";
import { convertPartialToPage } from "../converters/partial-to-page.js";
import { MainPage } from "./main/page.js";
import { page404 } from "./404/page.js";

export const servicePages: TPage[] = [
  convertPartialToPage(MainPage),
  convertPartialToPage(page404),
];
