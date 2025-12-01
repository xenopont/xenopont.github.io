import { partialToPage } from "../../converters/partial-to-page.js";
import { stringToPath } from "../../converters/string-to-path.js";
import { topBar } from "../../server-components/top-bar.js";
import type { TPage } from "../../types/page.js";
import type { TPartialPage } from "../../types/partial-page.js";

const partialIndexPage: TPartialPage = {
  content: [topBar],
  path: stringToPath("test"),
  title: "Dev XL",
  excludeGlobalApp: true,
  excludeGlobalChrome: true,
  excludeGlobalStylesheet: true,
  localStylesheet: `${import.meta.dirname}/index-styles.css`,
};

export const indexPage: TPage = partialToPage(partialIndexPage);
