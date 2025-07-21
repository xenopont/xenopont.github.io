import type { TPage } from "../../types/page.js";

export const generateHead = (page: TPage, buildId: string): string => {
  const title = `<title>${page.title}</title>`;
  const globalApp = page.excludeGlobalApp
    ? ""
    : `<script src="/assets-${buildId}/js/global.js"></script>`;
  const globalStylesheet = page.excludeGlobalStylesheet
    ? ""
    : `<link rel="stylesheet" href="/assets-${buildId}/css/global.css">`;

  const content = [title, globalApp, globalStylesheet];

  return `<head>\n${content.filter((tag) => tag !== "").join("\n  ")}\n</head>`;
};
