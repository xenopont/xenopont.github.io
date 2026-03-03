import { fontFileWrapper } from "../../utils/file-wrapper.js";
import type { TWebUri } from "../../utils/paths.js";

export const permianSlabSerifBoldUrl: TWebUri = fontFileWrapper.url(
  `${import.meta.dirname}/permian-slab-serif-bold.woff2`,
  "permian-slab-serif-bold",
);

export const permianSlabSerifItalicUrl: TWebUri = fontFileWrapper.url(
  `${import.meta.dirname}/permian-slab-serif-italic.woff2`,
  "permian-slab-serif-italic",
);

export const permianSlabSerifRegularUrl: TWebUri = fontFileWrapper.url(
  `${import.meta.dirname}/permian-slab-serif-regular.woff2`,
  "permian-slab-serif-regular",
);
