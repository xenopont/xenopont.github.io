import {
  article,
  div,
  h1,
  header,
  img,
  safe,
  section,
  time,
} from "../../../html/elements.js";
import type { THtmlEntity } from "../../../html/entities.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { toIso8601, toLongDate } from "../../../utils/time.js";

export const cardArticleLarge = (page: IPublishable): THtmlEntity[] => {
  return [
    article({ class: "card-article-large" }, [
      header({}, [
        img({ alt: "", src: page.socialCardImageUri }),
        h1({}, [page.title]),
      ]),
      section({ class: "description" }, [
        time(
          {
            pubdate: "pubdate",
            datetime: toIso8601(page.publishedAt),
            title: toLongDate(page.publishedAt),
          },
          [safe(toIso8601(page.publishedAt))],
        ),
        div({}, [page.description]),
      ]),
    ]),
  ];
};
