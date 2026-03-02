import { body, div } from "../html/elements.js";
import type { THtmlEntity } from "../html/entities.js";
import { THtmlTemplate } from "./html-template.js";

class TArticleTemplate extends THtmlTemplate {
  protected override buildBody(content: THtmlEntity[]): THtmlEntity {
    return body({}, [div({ id: "content" }, content)]);
  }
}

export const articleTemplate: TArticleTemplate = new TArticleTemplate(
  "article",
  {
    scripts: [],
    styles: [],
  },
);
