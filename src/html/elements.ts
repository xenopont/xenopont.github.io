import {
  type IHtmlElement,
  type THtmlElementAttributes,
  VoidElement,
} from "./entities.js";

export const area = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("area", attributes);
};

export const base = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("base", attributes);
};

export const br = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("br", attributes);
};

export const col = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("col", attributes);
};

export const embed = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("embed", attributes);
};

export const hr = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("hr", attributes);
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

export const track = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("track", attributes);
};

export const wbr = (attributes: THtmlElementAttributes): IHtmlElement => {
  return new VoidElement("wbr", attributes);
};
