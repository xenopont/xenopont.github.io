import { log } from "./utils/log.js";
import { xElement } from "./x-element/markup.js";

log("APP STARTED");

const buildMarkup = () => {
  document.body.appendChild(xElement("div"));
};

document.addEventListener("DOMContentLoaded", () => {
  buildMarkup();
});
