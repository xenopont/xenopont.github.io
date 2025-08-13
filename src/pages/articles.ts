import { partialToPage } from "../converters/partial-to-page.js";
import type { TPage } from "../types/page.js";
import { HowToDetectClientIpPage } from "./detect-client-ip/page.js";

export const articles: TPage[] = [partialToPage(HowToDetectClientIpPage)];
