import { fontFileWrapper } from "../../../utils/file-wrapper.js";
import type { TWebUri } from "../../../utils/paths.js";

export const linuxLibertineBold: TWebUri = fontFileWrapper.url(
  `${import.meta.dirname}/linux-libertine-bold.woff2`,
  "linux-libertine-bold",
);

export const linuxLibertineBoldItalic: TWebUri = fontFileWrapper.url(
  `${import.meta.dirname}/linux-libertine-bold-italic.woff2`,
  "linux-libertine-bold-italic",
);

export const linuxLibertineItalic: TWebUri = fontFileWrapper.url(
  `${import.meta.dirname}/linux-libertine-italic.woff2`,
  "linux-libertine-italic",
);

export const linuxLibertineMono: TWebUri = fontFileWrapper.url(
  `${import.meta.dirname}/linux-libertine-mono.woff2`,
  "linux-libertine-mono",
);

export const linuxLibertineRegular: TWebUri = fontFileWrapper.url(
  `${import.meta.dirname}/linux-libertine-regular.woff2`,
  "linux-libertine-regular",
);
