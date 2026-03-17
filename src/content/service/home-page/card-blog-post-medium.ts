import {
  a,
  article,
  h1,
  header,
  safe,
  section,
  time,
} from "../../../html/elements.js";
import type { THtmlEntity } from "../../../html/entities.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { toIso8601, toLongDate } from "../../../utils/time.js";

export const cardBlogPostMedium = (page: IPublishable): THtmlEntity[] => {
  return [
    article({ class: "card-blog-post-medium" }, [
      header({}, [
        time(
          {
            pubdate: "pubdate",
            datetime: toIso8601(page.publishedAt),
            title: toLongDate(page.publishedAt),
          },
          [safe(toIso8601(page.publishedAt))],
        ),
        a({ href: page.uri }, [h1({}, [page.title])]),
      ]),
      section({ class: "description" }, [page.description]),
    ]),
  ];
};
