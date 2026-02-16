import { domainName } from "../config/constants.js";
import {
  body,
  doctype,
  head,
  html,
  meta,
  safe,
  title,
} from "../html/elements.js";
import type { THtmlEntity } from "../html/entities.js";
import type { IPublishable } from "../publishing/publishable.js";

export const defaultTemplate = (page: IPublishable): THtmlEntity[] => [
  doctype(),
  html({ lang: "en" }, [
    head({}, [
      meta({ charset: "utf-8" }),
      title({}, [safe(page.title)]),
      meta({ name: "description", content: page.description }),
      meta({
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, user-scalable=yes",
      }),
      // <link rel="shortcut icon" href="/favicon.ico">; pass through copy-queue
      // Open Graph
      meta({ property: "og:title", content: page.title }),
      meta({ property: "og:description", content: page.description }),
      meta({ property: "og:type", content: "article" }),
      meta({
        property: "og:url",
        content: `http${domainName.match(/localhost/) ? "" : "s"}://${domainName}${page.uri}`,
      }),
    ]),
    body({}, []),
  ]),
];
