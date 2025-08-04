/**
 * https://html.spec.whatwg.org/multipage/syntax.html#elements-2
 */

declare const __brandStartTag: unique symbol;
export type TStartTag = string & {
  [__brandStartTag]: "TStartTag";
};
declare const __brandEndTag: unique symbol;
export type TEndTag = string & {
  [__brandEndTag]: "TEndTag";
};

declare const __brandTHtmlElementMarkup: unique symbol;
export type THtmlElementMarkup = string & {
  [__brandTHtmlElementMarkup]: "THtmlElementMarkup";
};

type THtmlElementTagName = string;

// TODO: split the type to global, aria-* and data-* attributes
// TODO: limit the type by the allowed for exact element ones
type THtmlElementAttributes = Record<string, string>;

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
type TVoidHtmlElementCreateParams = {
  tagName: TVoidElementTagName;
  attributes: THtmlElementAttributes;
};

const startTag = (
  tagName: THtmlElementTagName,
  attributes: THtmlElementAttributes,
): TStartTag => {
  const parts: string[] = [];
  parts.push(`<${tagName}`);
  if (Object.keys(attributes).length > 0) {
    parts.push(
      ` ${Object.keys(attributes)
        .map((k) => `${k}="${attributes[k]}"`)
        .join(" ")}`, // note the space before the value
    );
  }
  parts.push(">");

  return parts.join("") as TStartTag;
};

const endTag = (tagName: THtmlElementTagName): TEndTag => {
  return `</${tagName}>` as TEndTag;
};

const voidHtmlElement = ({
  tagName,
  attributes,
}: TVoidHtmlElementCreateParams): THtmlElementMarkup => {
  return `${startTag(tagName, attributes)}` as THtmlElementMarkup;
};

type TChildrenSeparator = "" | "\n";
type TContainerHtmlElementCreateParams = {
  tagName: string;
  attributes: THtmlElementAttributes;
  children: string[];
  separator: TChildrenSeparator;
};
const containerHtmlElement = ({
  tagName,
  attributes,
  children,
  separator,
}: TContainerHtmlElementCreateParams): THtmlElementMarkup => {
  const parts: string[] = [];
  parts.push(startTag(tagName, attributes));
  if (children.length > 0) {
    parts.push(children.join(separator));
  }
  parts.push(endTag(tagName));

  return parts.join(separator) as THtmlElementMarkup;
};

type TContainerElementContent =
  | undefined
  | THtmlElementMarkup
  | THtmlElementMarkup[];
const contentToChildren = (content: TContainerElementContent): string[] => {
  if (content === undefined) {
    return [];
  }
  if (Array.isArray(content)) {
    return content;
  }
  return [content];
};

// TODO: add text manipulations and options to cancel them
export const text = (str: string): THtmlElementMarkup =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;") as THtmlElementMarkup;

export const a = (
  href: string,
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "a",
    attributes: { href, ...attributes },
    children: contentToChildren(content),
    separator: "",
  });
};

export const br = (
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => voidHtmlElement({ tagName: "br", attributes });

export const div = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "div",
    attributes,
    children: contentToChildren(content),
    separator: "\n",
  });
};

export const h1 = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "h1",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

export const h2 = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "h2",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

export const h3 = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "h3",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

export const header = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "header",
    attributes,
    children: contentToChildren(content),
    separator: "\n",
  });
};

export const hr = (
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => voidHtmlElement({ tagName: "hr", attributes });

export const li = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "li",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

export const menu = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "menu",
    attributes,
    children: contentToChildren(content),
    separator: "\n",
  });
};

export const section = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "section",
    attributes,
    children: contentToChildren(content),
    separator: "\n",
  });
};

export const span = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "span",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

export const ul = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "ul",
    attributes,
    children: contentToChildren(content),
    separator: "\n",
  });
};
