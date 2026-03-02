import type {
  IHtmlElement,
  THtmlElementAttributes,
  THtmlEntity,
  THtmlText,
  TSafeText,
} from "./entities.js";
import { Element, VoidElement } from "./entities.js";

// Special text functions
export const safe = (str: string): TSafeText =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;") as TSafeText;
export const unsafe = (str: string): THtmlText => str as THtmlText;

export const a = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("a", attributes, children);
};

export const address = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("address", attributes, children);
};

export const area = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("area", attributes);
};

export const article = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("article", attributes, children);
};

export const base = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("base", attributes);
};

export const body = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("body", attributes, children);
};

export const br = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("br", attributes);
};

export const col = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("col", attributes);
};

export const div = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("div", attributes, children);
};

export const doctype = (): THtmlText => {
  return "<!doctype html>" as THtmlText;
};

export const em = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("em", attributes, children);
};

export const embed = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("embed", attributes);
};

export const h1 = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("h1", attributes, children);
};

export const head = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("head", attributes, children);
};

export const header = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("header", attributes, children);
};

export const hr = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("hr", attributes);
};

export const html = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("html", attributes, children);
};

export const img = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("img", attributes);
};

export const input = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("input", attributes);
};

export const link = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("link", attributes);
};

export const meta = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("meta", attributes);
};

export const p = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[] = [],
): IHtmlElement => {
  return new Element("p", attributes, children);
};

export const section = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[] = [],
): IHtmlElement => {
  return new Element("section", attributes, children);
};

export const script = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[] = [],
): IHtmlElement => {
  return new Element("script", attributes, children);
};

export const source = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("source", attributes);
};

export const time = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("time", attributes, children);
};

export const title = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("title", attributes, children);
};

export const track = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("track", attributes);
};

export const wbr = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("wbr", attributes);
};
