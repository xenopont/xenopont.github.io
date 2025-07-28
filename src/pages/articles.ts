import { convertPartialToPage } from "../converters/partial-to-page.js";
import type { TPage } from "../types/page.js";
import { randomArticle } from "./random-article/page.js";

export const articles: TPage[] = [convertPartialToPage(randomArticle)];
