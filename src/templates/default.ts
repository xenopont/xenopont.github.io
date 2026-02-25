import { THtmlTemplate } from "./html-template.js";

class TDefaultHtmlTemplate extends THtmlTemplate {}

export const defaultTemplate: THtmlTemplate = new TDefaultHtmlTemplate(
  "default",
  {
  scripts: [],
  styles: [],
  },
);
