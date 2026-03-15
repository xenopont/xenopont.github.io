import {
  alreadyPublished,
  type IPublishable,
} from "../../publishing/publishable.js";
import { testArticle } from "./test-article/article.js";

export const articles: IPublishable[] = [testArticle].filter(
  alreadyPublished(),
);
