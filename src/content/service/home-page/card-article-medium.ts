import {
  article,
  div,
  header,
  safe,
  section,
  time,
} from "../../../html/elements.js";
import type { THtmlEntity } from "../../../html/entities.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { toIso8601, toLongDate } from "../../../utils/time.js";
import { imgIfExists } from "./img-if-exists.js";

export const cardArticleMedium = (page: IPublishable): THtmlEntity[] => {
  return [
    article({ class: "card-article-medium" }, [
      section({ class: "illustration" }, [
        imgIfExists(page.socialCardImageUri),
      ]),
      header({}, [page.title]),
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
