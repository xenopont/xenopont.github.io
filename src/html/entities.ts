declare const __brandTHtmlText: unique symbol;
export type THtmlText = string & { [__brandTHtmlText]: "THtmlText" };

// required to make sure the text is escaped
declare const __brandTSafeText: unique symbol;
export type TSafeText = string & { [__brandTSafeText]: "TSafeText" };

class EInvalidTagName extends Error {}

export type THtmlElementAttributes = Record<string, string>;

export interface IHtmlElement {
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

  public toString(): string {
    return this.serializeHtml();
  }

  public static isValidTagName(tagName: string): boolean {
    const len = tagName.length;
    if (len < 1 || len > 61) {
      return false;
    }

    const firstChar = tagName.charAt(0);
    if (firstChar < "a" || firstChar > "z") {
      return false;
    }

    for (let i = 1; i < len; i++) {
      const char = tagName.charAt(i);
      const isLowercaseLetter = char >= "a" && char <= "z";
      const isDigit = char >= "0" && char <= "9";
      const isDash = char === "-";

      if (!isLowercaseLetter && !isDigit && !isDash) {
        return false;
      }
    }

    return true;
  }

  protected startTag(): string {
    const tagPieces: string[] = [
      this.tagName,
      ...Object.keys(this.attributes).map(
        (attributeName) =>
          `${attributeName}="${this.attributes[attributeName]}"`,
      ),
    ];
    return `<${tagPieces.join(" ")}>`;
  }

  protected abstract serializeHtml(): string;
}

export class VoidElement extends HtmlElement {
  protected override serializeHtml(): string {
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

  protected override serializeHtml(): string {
    return `${this.startTag()}${this.children.join("\n")}${this.endTag()}`;
  }

  private endTag(): string {
    return `</${this.tagName}>`;
  }
}
