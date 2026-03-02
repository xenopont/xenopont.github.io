import {
  body,
  doctype,
  head,
  html,
  link,
  meta,
  safe,
  script,
  title,
} from "../html/elements.js";
import type { THtmlEntity } from "../html/entities.js";
import type { IPublishable } from "../publishing/publishable.js";
import { faviconFileWrapper } from "../utils/file-wrapper.js";
import type { TWebUri } from "../utils/paths.js";

interface IHtmlTemplateOptions {
  /**
   * These are global styles that are applied to all pages using this template.
   * Any page-specific style should come via IPublishable properties.
   */
  styles: TWebUri[];

  /**
   * These are global scripts that are applied to all pages using this template.
   * Any page-specific script should come via IPublishable properties.
   */
  scripts: TWebUri[];

  // add custom tags here when necessary
}

export class THtmlTemplate {
  constructor(
    public readonly id: string,
    private readonly options: IHtmlTemplateOptions,
  ) {}

  public render(page: IPublishable): string {
    const structure = this.buildHtml(page);

    return structure.map((entity) => entity.toString()).join("\n");
  }

  protected buildBody(content: THtmlEntity[]): THtmlEntity {
    return body({}, content);
  }

  private buildHtml(page: IPublishable): THtmlEntity[] {
    return [
      doctype(),
      html({ lang: page.language }, [
        this.buildHead(page),
        this.buildBody(page.content),
      ]),
    ];
  }

  private buildHead(page: IPublishable): THtmlEntity {
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
        href: faviconFileWrapper.url(
          `${import.meta.dirname}/../assets/favicon.ico`,
          "favicon",
        ),
      }),
      ...this.buildOpenGraphTags(page),
      ...this.buildTwitterCardTags(page),
      ...this.buildStyleTags([...this.options.styles, ...page.styles]),
      ...this.buildScriptTags([...this.options.scripts, ...page.scripts]),
      // add custom template/page tags if necessary
    ];

    return head({}, headTags);
  }

  private buildOpenGraphTags(page: IPublishable): THtmlEntity[] {
    const openGraphTags: THtmlEntity[] = [
      meta({ property: "og:title", content: page.title }),
      meta({ property: "og:description", content: page.description }),
      meta({ property: "og:type", content: "article" }),
      meta({
        property: "og:url",
        content: page.uri,
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

  private buildStyleTags(styleUris: TWebUri[]): THtmlEntity[] {
    const uniqueStyles = [...new Set(styleUris)];
    return uniqueStyles.map((styleUri) =>
      link({ rel: "stylesheet", href: styleUri }),
    );
  }

  private buildScriptTags(scriptUris: TWebUri[]): THtmlEntity[] {
    const uniqueScripts = [...new Set(scriptUris)];
    return uniqueScripts.map((scriptUri) =>
      script({ src: scriptUri, type: "module" }),
    );
  }
}
