import { div, unsafe } from "../../html/elements.js";
import type { THtmlEntity } from "../../html/entities.js";

export const bottomLine: THtmlEntity = div({ id: "bottom-line" }, [
  unsafe("*&nbsp;*&nbsp;*"),
]);
