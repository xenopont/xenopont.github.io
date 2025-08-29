import type { THtmlElementMarkup } from "./types.js";

/**
 * Can be used to generate content for empty container elements.
 *
 * @example `m.span(none, { class: "deco-shape" })` will result in
 *   `<span class="deco-shape"></span>`
 */
export const none = "" as THtmlElementMarkup;

export const safe = (str: string): THtmlElementMarkup =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;") as THtmlElementMarkup;

export const unsafe = (str: string): THtmlElementMarkup =>
  str as THtmlElementMarkup;
