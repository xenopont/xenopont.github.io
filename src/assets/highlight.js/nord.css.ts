import { cssCachedFileWrapper } from "../../utils/file-wrapper.js";
import type { TWebUri } from "../../utils/paths.js";

export const highlightJsNordCssUrl: TWebUri = cssCachedFileWrapper.url(
  `${import.meta.dirname}/nord.css`,
  "highlight-js-nord",
);
