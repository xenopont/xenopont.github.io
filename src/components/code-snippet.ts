import { highlight, type THighlightLanguage } from "../render/highlight.js";
import type { THtmlElementMarkup } from "../render/markup.js";
import * as m from "../render/markup.js";

export const codeSnippet = (
  language: THighlightLanguage,
  code: string,
  header?: THtmlElementMarkup | THtmlElementMarkup[],
  comment?: THtmlElementMarkup | THtmlElementMarkup[],
): THtmlElementMarkup => {
  const tags: THtmlElementMarkup[] = [];

  if (header) {
    tags.push(m.header(header));
  }

  tags.push(
    m.pre(m.code(highlight(language, code)), {
      class: "code-snippet-body",
    }),
  );

  if (comment) {
    tags.push(m.div(comment, { class: "code-snippet-comment" }));
  }

  return m.div(tags, { class: "code-snippet" });
};
