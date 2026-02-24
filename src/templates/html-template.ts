import {
  body,
  doctype,
  head,
  html,
  link,
  meta,
  safe,
  title,
} from "../html/elements.js";
import type { THtmlEntity } from "../html/entities.js";
import type { IPublishable } from "../publishing/publishable.js";
import { baseUrl } from "../utils/base-url.js";
import { faviconFileWrapper } from "../utils/file-wrapper.js";

interface IHtmlTemplateOptions {
  charset: string;
}

export class THtmlTemplate {
  constructor(
    public readonly id: string,
    private readonly options: IHtmlTemplateOptions,
  ) {}

  public render(page: IPublishable): string {
    const structure = this.build(page);

    return structure.toString();
  }

  private build(page: IPublishable): THtmlEntity[] {
    const headTags: THtmlEntity[] = [
      meta({ charset: "utf-8" }),
      title({}, [safe(page.title)]),
      meta({ name: "description", content: page.description }),
      meta({
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, user-scalable=yes",
      }),
      link({
        rel: "shortcut icon",
        href: faviconFileWrapper.url("../assets/favicon.ico", "favicon"),
      }),
      ...this.buildOpenGraphTags(page),
      ...this.buildTwitterCardTags(page),
      // global styles should be attached as a file
      // local styles should be attached as a file from a parameter
      // global app
      // local app
    ];

    return [
      doctype(),
      html({ lang: page.language }, [
        head({}, headTags),
        body({}, page.content),
      ]),
    ];
  }

  private buildOpenGraphTags(page: IPublishable): THtmlEntity[] {
    const openGraphTags: THtmlEntity[] = [
      meta({ property: "og:title", content: page.title }),
      meta({ property: "og:description", content: page.description }),
      meta({ property: "og:type", content: "article" }),
      meta({
        property: "og:url",
        content: `${baseUrl}${page.uri}`,
      }),
    ];
    if (page.socialCardImageUri !== null) {
      openGraphTags.push(
        meta({ property: "og:image", content: page.socialCardImageUri }),
      );
    }

    return openGraphTags;
  }

  private buildTwitterCardTags(page: IPublishable): THtmlEntity[] {
    const twitterCardTags: THtmlEntity[] = [
      meta({ name: "twitter:card", content: "summary_large_card" }),
      meta({ name: "twitter:title", content: page.title }),
      meta({ name: "twitter:description", content: page.description }),
    ];
    if (page.socialCardImageUri !== null) {
      twitterCardTags.push(
        meta({ name: "twitter:image", content: page.socialCardImageUri }),
      );
    }

    return twitterCardTags;
  }
}
