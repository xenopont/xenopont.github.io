import "../../assets/fonts/permian-slab-serif.js";
import "../../assets/fonts/linux-libertine/linux-libertine.js";
import { highlightJsAgateCssUrl } from "../../assets/highlight.js/agate.css.js";
import { articleCssUrl } from "../../assets/styles/article.css.js";
import { globalCssUrl } from "../../assets/styles/global.css.js";
import { bottomLine } from "../../components/bottom-line.js";
import { pageHeader } from "../../components/page-header.js";
import { topBar } from "../../components/top-bar.js";
import { domainDisplayName } from "../../config/constants.js";
import {
  article,
  body,
  footer,
  main,
  safe,
  section,
  unsafe,
} from "../../html/elements.js";
import type { THtmlEntity } from "../../html/entities.js";
import type { IPublishable } from "../../publishing/publishable.js";
import { toYear } from "../../utils/time.js";
import { THtmlTemplate } from "../html-template.js";
import "../../assets/images/top-bar-texture/texture.webp.js";

class TArticleTemplate extends THtmlTemplate {
  protected override buildBody(page: IPublishable): THtmlEntity {
    return body({}, [
      topBar(),
      article({ id: "article" }, [
        pageHeader(page),
        main({ id: "article-content" }, page.content),
      ]),
      bottomLine([unsafe("*&nbsp;*&nbsp;*")]),
      footer({}, [
        section({ id: "copyright" }, [
          unsafe("&copy;&nbsp;"),
          safe(`${domainDisplayName}, ${toYear(new Date())}`),
        ]),
      ]),
    ]);
  }
}

export const articleTemplate: TArticleTemplate = new TArticleTemplate(
  "article",
  {
    scripts: [],
    styles: [globalCssUrl, articleCssUrl, highlightJsAgateCssUrl],
  },
);
