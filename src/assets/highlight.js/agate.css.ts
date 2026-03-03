import { cssCachedFileWrapper } from "../../utils/file-wrapper.js";
import type { TWebUri } from "../../utils/paths.js";

export const highlightJsAgateCssUrl: TWebUri = cssCachedFileWrapper.url(
  `${import.meta.dirname}/agate.css`,
  "highlight-js-agate",
);
