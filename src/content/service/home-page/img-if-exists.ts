import { img, span } from "../../../html/elements.js";
import type { IHtmlElement } from "../../../html/entities.js";
import type { TWebUri } from "../../../utils/paths.js";

const defaultColor: string = "#4488ff";

const getHexValue = (color: string): string =>
  color === "default" ? defaultColor : color;

export const imgIfExists = (
  src: TWebUri | null,
  color: string,
): IHtmlElement =>
  src
    ? img({ src, alt: "" })
    : span({ style: `background-color: ${getHexValue(color)}` }, [""]);
