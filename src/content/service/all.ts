import type { TPage } from "../../types/page.js";
import { indexPage } from "./_index/index.js";
import { mainPage } from "./_main/page.js";
import { page404 } from "./404/page.js";

export const servicePages: TPage[] = [mainPage, page404, indexPage];
