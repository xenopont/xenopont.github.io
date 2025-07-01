import * as m from "./x-element/markup.js";

const buildMarkup = () => {
  document.body.appendChild(m.div({}, [m.h1({}, ["DevXL"])]));
};

document.addEventListener("DOMContentLoaded", () => {
  buildMarkup();
});
