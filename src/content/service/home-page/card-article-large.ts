import {
  a,
  article,
  div,
  h1,
  header,
  safe,
  section,
  time,
} from "../../../html/elements.js";
import type { THtmlEntity } from "../../../html/entities.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { accentColor } from "../../../utils/colors.js";
import { toIso8601, toLongDate } from "../../../utils/time.js";
import { imgIfExists } from "./img-if-exists.js";

export const cardArticleLarge = (
  page: IPublishable | undefined,
): THtmlEntity[] => {
  if (!page) {
    return [];
  }

  return [
    article({ class: "card-article-large" }, [
      div({ class: "card-article-large-wrapper" }, [
        header({}, [
          section(
            {
              class: "illustration",
              style: `background-color: ${accentColor(page.colors)};`,
            },
            [a({ href: page.uri }, [imgIfExists(page.socialCardImageUri)])],
          ),
          section({ class: "article-title" }, [
            a({ href: page.uri }, [h1({}, [page.title])]),
          ]),
        ]),
        section({ class: "description" }, [
          a({ href: page.uri }, [
            time(
              {
                pubdate: "pubdate",
                datetime: toIso8601(page.publishedAt),
                title: toLongDate(page.publishedAt),
              },
              [safe(toIso8601(page.publishedAt))],
            ),
          ]),

          div({ class: "article-summary" }, [
            a({ href: page.uri }, [page.description]),
          ]),
        ]),
      ]),
    ]),
  ];
};
