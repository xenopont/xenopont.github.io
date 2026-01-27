import { partialToPage } from "../../../converters/partial-to-page.js";
import { stringToPath } from "../../../converters/string-to-path.js";
import { section } from "../../../html5/html-elements.js";
import type { THtmlElementMarkup } from "../../../html5/types.js";
import { pageCard } from "../../../server-components/page-card/page-card.js";
import { topBar } from "../../../server-components/top-bar/top-bar.js";
import type { TPage } from "../../../types/page.js";
import type { TPartialPage } from "../../../types/partial-page.js";
import { articles } from "../../articles/all.js";

interface ICreated {
  createdAt: Date;
}

const getMostRecent = <T extends ICreated>(items: T[]): T | null => {
  if (items.length === 0) {
    return null;
  }
  items.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

  return items[0] ?? null;
};

const collectContent = (): THtmlElementMarkup[] => {
  const content: THtmlElementMarkup[] = [];
  const mostRecentArticle = getMostRecent(articles);
  if (mostRecentArticle) {
    content.push(pageCard(mostRecentArticle));
  }

  return content;
};

const partialIndexPage: TPartialPage = {
  content: [
    topBar({ isHomePage: true }),
    section(collectContent(), { id: "page-content" }),
  ],
  path: stringToPath("test"),
  title: "Dev XL",
  excludeGlobalApp: true,
  excludeGlobalChrome: true,
  excludeGlobalStylesheet: true,
  localStylesheet: `${import.meta.dirname}/index-styles.css`,
};

export const indexPage: TPage = partialToPage(partialIndexPage);
