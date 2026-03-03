import { cssCachedFileWrapper } from "../../utils/file-wrapper.js";
import type { TWebUri } from "../../utils/paths.js";

export const highlightJsQtCreatorDarkCssUrl: TWebUri = cssCachedFileWrapper.url(
  `${import.meta.dirname}/qtcreator-dark.css`,
  "highlight-js-qtcreator-dark",
);
