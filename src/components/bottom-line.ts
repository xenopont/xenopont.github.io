import { div } from "../html/elements.js";
import type { IHtmlElement, THtmlEntity } from "../html/entities.js";

export const bottomLine = (content: IHtmlElement[]): THtmlEntity =>
  div({ id: "bottom-line" }, content);
