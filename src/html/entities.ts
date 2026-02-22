declare const __brandTHtmlText: unique symbol;
export type THtmlText = string & { [__brandTHtmlText]: "THtmlText" };

// required to make sure the text is escaped
declare const __brandTSafeText: unique symbol;
export type TSafeText = string & { [__brandTSafeText]: "TSafeText" };

class EInvalidTagName extends Error {}

export type THtmlElementAttributes = Record<string, string>;

export interface IHtmlElement {
  outerHtml(): string;
  toString(): string;
}

export type THtmlEntity = IHtmlElement | THtmlText | TSafeText;

abstract class HtmlElement implements IHtmlElement {
  protected readonly tagName: string;
  protected readonly attributes: THtmlElementAttributes;

  public constructor(tagName: string, attributes: THtmlElementAttributes) {
    if (!HtmlElement.isValidTagName(tagName)) {
      throw new EInvalidTagName(`Invalid tag name: ${tagName}`);
    }
    this.tagName = tagName;
    this.attributes = attributes;
  }

  public abstract outerHtml(): string;
  public toString(): string {
    return this.outerHtml();
  }

  public static isValidTagName(tagName: string): boolean {
    return /^(a-z)(a-z0-9)*$/.test(tagName);
  }

  protected startTag(): string {
    return `<${this.tagName} ${Object.keys(this.attributes)
      .map((k) => `${k}="${this.attributes[k]}"`)
      .join(" ")}>`;
  }
}

export class VoidElement extends HtmlElement {
  public override outerHtml(): string {
    return this.startTag();
  }
}

export class Element extends HtmlElement {
  private readonly children: THtmlEntity[];

  public constructor(
    tagName: string,
    attributes: THtmlElementAttributes,
    children: THtmlEntity[],
  ) {
    super(tagName, attributes);
    this.children = children;
  }

  public override outerHtml(): string {
    return `${this.startTag()}${this.children.join("\n")}${this.endTag()}`;
  }

  private endTag(): string {
    return `</${this.tagName}>`;
  }
}
