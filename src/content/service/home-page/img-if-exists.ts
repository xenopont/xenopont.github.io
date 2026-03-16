import { img, span } from "../../../html/elements.js";
import type { IHtmlElement } from "../../../html/entities.js";
import type { TWebUri } from "../../../utils/paths.js";

export const imgIfExists = (src: TWebUri | null): IHtmlElement =>
  src ? img({ src, alt: "" }) : span({}, [""]);
