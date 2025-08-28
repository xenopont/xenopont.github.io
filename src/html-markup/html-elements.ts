/**
 * https://html.spec.whatwg.org/multipage/syntax.html#elements-2
 */

import type { TImageUri } from "../types/image-uri.js";
import {
  containerHtmlElement,
  contentToChildren,
  type TContainerElementContent,
} from "./container-element.js";
import type { THtmlElementAttributes, THtmlElementMarkup } from "./types.js";
import { voidHtmlElement } from "./void-element.js";

type TAnchorAttributes = THtmlElementAttributes & { href: string };
export const a = (
  content: TContainerElementContent,
  attributes: TAnchorAttributes,
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "a",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

export const article = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "article",
    attributes,
    children: contentToChildren(content),
    separator: "\n",
  });
};

export const br = (
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => voidHtmlElement({ tagName: "br", attributes });

export const code = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "code",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

export const comment = (text: string): THtmlElementMarkup => {
  const escapedText = text.replace("-->", "→");
  // add a warning here

  return `<!-- ${escapedText} -->` as THtmlElementMarkup;
};

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

export const doctype = (): THtmlElementMarkup =>
  "<!DOCTYPE html>" as THtmlElementMarkup;

export const em = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "em",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

type TImageAttributes = THtmlElementAttributes & {
  src: TImageUri;
  alt: string;
};
export const img = (attributes: TImageAttributes): THtmlElementMarkup => {
  return voidHtmlElement({ tagName: "img", attributes });
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

// todo create runtime validation
// The lang attribute must follow BCP 47
type THtmlTagAttributes = THtmlElementAttributes & { lang: string };
export const html = (
  content: TContainerElementContent,
  attributes: THtmlTagAttributes,
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "html",
    attributes,
    children: contentToChildren(content),
    separator: "\n",
  });
};

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

type TLinkAttributes = THtmlElementAttributes & {
  rel: string;
  href: string;
};
export const link = (attributes: TLinkAttributes): THtmlElementMarkup => {
  return voidHtmlElement({
    tagName: "link",
    attributes,
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

type TMetaName = {
  name:
    | "application-name"
    | "description"
    | "generator"
    | "keywords"
    | "viewport"
    | "twitter:card"
    | "twitter:description"
    | "twitter:image"
    | "twitter:title"
    | "twitter:url";
  content: string;
};
type TMetaHttpEquivalent = {
  "http-equiv":
    | "content-security-policy"
    | "content-type"
    | "default-style"
    | "refresh";
  content: string;
};
type TMetaCharset = { charset: "UTF-8" };
type TMetaProperty = {
  property: "og:description" | "og:image" | "og:title" | "og:type" | "og:url";
  content: string;
};
type TMetaAttributes =
  | TMetaName
  | TMetaHttpEquivalent
  | TMetaCharset
  | TMetaProperty;
export const meta = (attributes: TMetaAttributes): THtmlElementMarkup => {
  return voidHtmlElement({
    tagName: "meta",
    attributes,
  });
};

export const p = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "p",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

export const pre = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "pre",
    attributes,
    children: contentToChildren(content),
    separator: "",
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

export const strong = (
  content: TContainerElementContent,
  attributes: THtmlElementAttributes = {},
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "strong",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

type TTimeAttributes = THtmlElementAttributes & { datetime: string };
export const time = (
  content: TContainerElementContent,
  attributes: TTimeAttributes,
): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "time",
    attributes,
    children: contentToChildren(content),
    separator: "",
  });
};

export const title = (content: string): THtmlElementMarkup => {
  return containerHtmlElement({
    tagName: "title",
    attributes: {},
    // a pure `string` is allowed here, as the <title> tag doesn't support
    // HTML entities
    children: [content as THtmlElementMarkup],
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
