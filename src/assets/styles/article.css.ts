import { cssFileWrapper } from "../../utils/file-wrapper.js";
import type { TWebUri } from "../../utils/paths.js";

export const articleCssUrl: TWebUri = cssFileWrapper.url(
  `${import.meta.dirname}/article.css`,
  "article",
);
