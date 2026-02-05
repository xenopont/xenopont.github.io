import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import java from "highlight.js/lib/languages/java";
import jsLang from "highlight.js/lib/languages/javascript";
import php from "highlight.js/lib/languages/php";
import xmlMarkup from "highlight.js/lib/languages/xml";
import type { THtmlElementMarkup } from "../html-markup/types.js";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("html", xmlMarkup);
hljs.registerLanguage("java", java);
hljs.registerLanguage("javascript", jsLang);
hljs.registerLanguage("js", jsLang);
hljs.registerLanguage("php", php);
hljs.registerLanguage("xml", xmlMarkup);

const supportedLanguages = [
  "bash",
  "html",
  "java",
  "javascript",
  "js",
  "php",
  "xml",
] as const;

export type THighlightLanguage = (typeof supportedLanguages)[number];

export const highlight = (
  language: THighlightLanguage,
  code: string,
): THtmlElementMarkup => {
  if (supportedLanguages.includes(language)) {
    return hljs.highlight(code.trim(), { language })
      .value as THtmlElementMarkup;
  }
  throw new Error(`Unsupported language: ${language}`);
};
