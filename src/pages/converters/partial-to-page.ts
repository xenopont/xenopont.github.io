import type { TPage } from "../types/page.js";
import type { TPartialPage } from "../types/partial-page.js";

export const convertPartialToPage = (partial: TPartialPage): TPage => {
  return {
    ...partial,
    excludeGlobalApp: partial.excludeGlobalApp ?? false,
    excludeGlobalStylesheet: partial.excludeGlobalStylesheet ?? false,
    isPublic: partial.isPublic ?? true,
  };
};
