import { log } from "./utils/log.js";
import { xElement } from "./x-element/x-element.js";

log("APP STARTED");

const buildMarkup = () => {
  document.body.appendChild(
    xElement("div", { style: { border: "1px solid #c00" }, id: "test" }, [
      xElement("h1", {}, ["Hello World!"]),
    ]),
  );
};

document.addEventListener("DOMContentLoaded", () => {
  buildMarkup();
});
