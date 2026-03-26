import {
  alreadyPublished,
  type IPublishable,
} from "../../publishing/publishable.js";
import { testArticle } from "./test-article/article.js";
import { testArticle2 } from "./test-article-2/article.js";

export const articles: IPublishable[] = [testArticle, testArticle2].filter(
  alreadyPublished(),
);
