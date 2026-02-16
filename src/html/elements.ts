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

export const area = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("area", attributes);
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

export const doctype = (): THtmlText => {
  return "<!doctype html>" as THtmlText;
};

export const embed = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("embed", attributes);
};

export const head = (
  attributes: THtmlElementAttributes,
  children: THtmlEntity[],
): IHtmlElement => {
  return new Element("head", attributes, children);
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

export const source = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("source", attributes);
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
