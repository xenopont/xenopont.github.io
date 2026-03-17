import { cssFileWrapper } from "../../utils/file-wrapper.js";
import type { TWebUri } from "../../utils/paths.js";

export const homePageCssUrl: TWebUri = cssFileWrapper.url(
  `${import.meta.dirname}/home-page.css`,
  "home-page",
);
