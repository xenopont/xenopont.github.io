import { a, address, h1, head, safe, section, time } from "../html/elements.js";
import type { THtmlEntity } from "../html/entities.js";
import type { IPublishable } from "../publishing/publishable.js";
import { toIso8601, toLongDate } from "../utils/time.js";

export const articleHeader = (page: IPublishable): THtmlEntity => {
  return head({}, [
    h1({ id: "article-title" }, [page.title]),
    section({ id: "byline" }, [
      address({ id: "author" }, [
        a({ id: "author-link", href: page.author.url, rel: "author" }, [
          page.author.name,
        ]),
      ]),
      time(
        {
          pubdate: "pubdate",
          datetime: toIso8601(page.publishedAt),
          title: toLongDate(page.publishedAt),
        },
        [safe(toIso8601(page.publishedAt))],
      ),
    ]),
  ]);
};
