import { cssCachedFileWrapper } from "../../utils/file-wrapper.js";
import type { TWebUri } from "../../utils/paths.js";

export const highlightJsGradientDarkCssUrl: TWebUri = cssCachedFileWrapper.url(
  `${import.meta.dirname}/gradient-dark.css`,
  "highlight-js-gradient-dark",
);
