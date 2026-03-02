import { articleHeader } from "../components/article-header.js";
import { topBar } from "../components/top-bar.js";
import { article, body, div } from "../html/elements.js";
import type { THtmlEntity } from "../html/entities.js";
import type { IPublishable } from "../publishing/publishable.js";
import { THtmlTemplate } from "./html-template.js";

class TArticleTemplate extends THtmlTemplate {
  protected override buildBody(page: IPublishable): THtmlEntity {
    return body({}, [
      topBar(),
      article({}, [
        articleHeader(page),
        div({ id: "article-content" }, page.content),
      ]),
    ]);
  }
}

export const articleTemplate: TArticleTemplate = new TArticleTemplate(
  "article",
  {
    scripts: [],
    styles: [],
  },
);
