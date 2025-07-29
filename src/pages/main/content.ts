import type { THtmlElementMarkup } from "../../render/markup.js";
import * as m from "../../render/markup.js";
import { articles } from "../articles.js";

const articleList: THtmlElementMarkup[] = articles
  .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
  .map((article) => {
    return m.li(m.a(`/${article.path}/`, m.text(article.title)));
  });

export const generateMainPageContent = (): string => {
  return [m.h1(m.text("Dev XL")), m.ul(articleList)].join("\n");
};
