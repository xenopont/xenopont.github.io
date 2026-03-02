import { body, div } from "../html/elements.js";
import type { THtmlEntity } from "../html/entities.js";
import { THtmlTemplate } from "./html-template.js";

// A new class allows overriding the `buildBody()` method
// for injecting custom content into the page.
class TDefaultHtmlTemplate extends THtmlTemplate {
  protected override buildBody(content: THtmlEntity[]): THtmlEntity {
    return body({}, [div({ id: "content" }, content)]);
  }
}

export const defaultTemplate: TDefaultHtmlTemplate = new TDefaultHtmlTemplate(
  "default",
  {
    scripts: [],
    styles: [],
  },
);
