import type { THtmlElementMarkup } from "../../render/markup.js";
import * as m from "../../render/markup.js";
import { articles } from "../articles.js";

const articleList: THtmlElementMarkup[] = articles
  .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
  .map((article) => {
    return m.li(m.a(`/${article.path}/`, m.text(article.title)));
  });

export const generateMainPageContent = (): string => {
  return [
    m.div(m.text("Dev XL"), { class: "main-page-title shadow" }),
    m.div(m.text("Dev XL"), { class: "main-page-title text" }),
    m.ul(articleList),
  ].join("\n");
};
