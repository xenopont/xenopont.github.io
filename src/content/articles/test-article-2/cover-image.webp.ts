import { imageFileWrapper } from "../../../utils/file-wrapper.js";
import type { TWebUri } from "../../../utils/paths.js";

export const coverImageUrl: TWebUri = imageFileWrapper.url(
  `${import.meta.dirname}/cover-image.webp`,
  "test-article-cover-image",
);
