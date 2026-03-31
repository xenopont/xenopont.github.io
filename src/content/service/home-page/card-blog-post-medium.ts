import {
  a,
  article,
  div,
  h1,
  header,
  safe,
  section,
  time,
  unsafe,
} from "../../../html/elements.js";
import type { THtmlEntity } from "../../../html/entities.js";
import type { IPublishable } from "../../../publishing/publishable.js";
import { toIso8601, toLongDate } from "../../../utils/time.js";

export const cardBlogPostMedium = (page: IPublishable): THtmlEntity[] => {
  return [
    article({ class: "card-blog-post-medium" }, [
      div({ class: "card-blog-post-medium-wrapper" }, [
        section({ class: "blog-post-color" }, [
          a({ href: page.uri }, [safe("")]),
        ]),
        section({ class: "blog-post-title" }, [
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
          header({}, [a({ href: page.uri }, [h1({}, [unsafe(page.title)])])]),
        ]),
      ]),
    ]),
  ];
};
