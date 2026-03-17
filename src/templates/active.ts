import { articleTemplate } from "./article/template.js";
import { defaultTemplate } from "./default.js";
import { homePageTemplate } from "./home/template.js";
import type { THtmlTemplate } from "./html-template.js";

export const ACTIVE_TEMPLATES = {
  default: "default",
  article: "article",
  homePage: "home-page",
} as const;

export type TTemplateId =
  (typeof ACTIVE_TEMPLATES)[keyof typeof ACTIVE_TEMPLATES];

class ETemplateNotFound extends Error {}

const templateRegistry: Map<TTemplateId, THtmlTemplate> = new Map<
  TTemplateId,
  THtmlTemplate
>([
  [ACTIVE_TEMPLATES.default, defaultTemplate],
  [ACTIVE_TEMPLATES.article, articleTemplate],
  [ACTIVE_TEMPLATES.homePage, homePageTemplate],
]);

export function getTemplate(id: TTemplateId): THtmlTemplate {
  const template = templateRegistry.get(id);
  if (!template) {
    throw new ETemplateNotFound(`❌ Template "${id}" not found in registry`);
  }
  return template;
}
