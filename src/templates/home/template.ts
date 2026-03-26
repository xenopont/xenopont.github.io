import "../../assets/fonts/permian-slab-serif.js";
import "../../assets/fonts/linux-libertine/linux-libertine.js";
import { globalCssUrl } from "../../assets/styles/global.css.js";
import { homePageCssUrl } from "../../assets/styles/home-page.css.js";
import { topBar } from "../../components/top-bar.js";
import { domainDisplayName } from "../../config/constants.js";
import {
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
import { pageHeader } from "./page-header.js";

class THomePageTemplate extends THtmlTemplate {
  protected override buildBody(page: IPublishable): THtmlEntity {
    return body({}, [
      topBar(true),
      pageHeader,
      main({}, page.content),
      footer({}, [
        section({ id: "copyright" }, [
          unsafe("&copy;&nbsp;"),
          safe(`${domainDisplayName}, ${toYear(new Date())}`),
        ]),
      ]),
    ]);
  }
}

export const homePageTemplate: THomePageTemplate = new THomePageTemplate(
  "home-page",
  {
    scripts: [],
    styles: [globalCssUrl, homePageCssUrl],
  },
);
