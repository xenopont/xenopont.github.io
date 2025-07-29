/**
 * https://html.spec.whatwg.org/multipage/syntax.html#elements-2
 */

declare const __brandTHtmlElementMarkup: unique symbol;
type THtmlElementMarkup = string & {
  [__brandTHtmlElementMarkup]: "THtmlElementMarkup";
};

type TVoidElementTagName =
  | "area"
  | "base"
  | "br"
  | "col"
  | "embed"
  | "hr"
  | "img"
  | "input"
  | "link"
  | "meta"
  | "source"
  | "track"
  | "wbr";

// @todo split the type to global, aria-* and data-* attributes
// @todo limit the type by the allowed for exact element ones
type THtmlElementAttributes = Record<string, string>;

type TVoidHtmlElementCreateParams = {
  tagName: TVoidElementTagName;
  attributes: THtmlElementAttributes;
};
const voidHtmlElement = ({
  tagName,
  attributes,
}: TVoidHtmlElementCreateParams): THtmlElementMarkup => {
  const parts: string[] = [];
  parts.push(`<${tagName}`);
  if (Object.keys(attributes).length > 0) {
    parts.push(
      ` ${Object.keys(attributes)
        .map((k) => `${k}="${attributes[k]}"`)
        .join(" ")} `,
    );
  }
  parts.push(">");

  return parts.join() as THtmlElementMarkup;
};

type TContainerHtmlElementCreateParams = {
  tagName: string;
  attributes: THtmlElementAttributes;
  children: string[];
};
const containerHtmlElement = ({
  tagName,
  attributes,
  children,
}: TContainerHtmlElementCreateParams): string => {
  return `<${tagName} ${Object.keys(attributes)
    .map((k) => `${k}="${attributes[k]}"`)
    .join(" ")}>${children.join()}</${tagName}>`;
};
