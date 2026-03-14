import {
  a,
  address,
  div,
  h1,
  header,
  safe,
  section,
  time,
} from "../html/elements.js";
import type { THtmlEntity } from "../html/entities.js";
import type { IPublishable } from "../publishing/publishable.js";
import { toIso8601, toLongDate } from "../utils/time.js";

export const pageHeader = (page: IPublishable): THtmlEntity => {
  return header({ id: "page-header" }, [
    section({ id: "title-section" }, [
      div({ id: "title-wrapper" }, [h1({ id: "title" }, [page.title])]),
    ]),
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
