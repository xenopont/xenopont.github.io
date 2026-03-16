import { a } from "../../../html/elements.js";
import type { IHtmlElement, THtmlEntity } from "../../../html/entities.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { past } from "../../../utils/time.js";
import { articles } from "../../articles/all.js";
import { blogPosts } from "../../blog/all.js";
import { cardArticleLarge } from "./card-article-large.js";

const buildFeed = (
  allArticles: IPublishable[],
  allBlogPosts: IPublishable[],
): IHtmlElement[] => {
  return [];
};

export const content: THtmlEntity[] = buildFeed(articles, blogPosts);
