import { a } from "../../render/a.js";
import { h1 } from "../../render/h1.js";
import { li } from "../../render/li.js";
import { ul } from "../../render/ul.js";
import { articles } from "../articles.js";

const articleList: string[] = articles
  .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
  .map((article) => {
    return li({ content: a({ href: article.path, content: article.title }) });
  });

export const generateMainPageContent = (): string => {
  return h1({ content: "Dev XL" }) + ul({ items: articleList });
};
