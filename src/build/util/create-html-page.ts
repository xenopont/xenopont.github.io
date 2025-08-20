import fs from "node:fs";
import { writeFile } from "node:fs/promises";
import { dateToIso8601 } from "../../converters/date-to-iso-8601.js";
import * as m from "../../render/markup.js";
import type { TPage } from "../../types/page.js";
import { generateId } from "../../utils/generate-id.js";
import { logger } from "../../utils/logger.js";
import { buildApp } from "./build-app.js";
import {
  assetsFolder,
  cssFolder,
  distFolder,
  globalAppFile,
  globalCssFile,
  jsFolder,
} from "./constants.js";

const prepareBody = (page: TPage): string => {
  if (page.excludeGlobalChrome) {
    return Array.isArray(page.content) ? page.content.join("\n") : page.content;
  }

  return m.div(
    [
      m.header(
        m.menu(
          m.li(
            m.a("/", m.span(m.none, { id: "home-link-chevron" }), {
              id: "home-link",
            }),
          ),
        ),
        {
          id: "global-chrome-header",
        },
      ),
      m.article(
        [
          m.header([
            m.h1(m.safe(page.title)),
            m.section(
              [
                m.time(m.safe(dateToIso8601(page.createdAt)), {
                  datetime: dateToIso8601(page.createdAt),
                }),
                m.span(m.safe(`by ${page.author}`), { id: "author" }),
              ],
              { id: "article-properties" },
            ),
          ]),
          m.div(page.content, { id: "article-content" }),
        ],
        { id: "article" },
      ),
    ],
    {
      id: "global-chrome",
    },
  );
};

export const createHtmlPage = (page: TPage): Promise<void>[] => {
  const headTags: string[] = [];
  let missingResources = false;
  const promises: Promise<void>[] = [];

  // title
  headTags.push(m.title(page.title));

  // description
  if (page.summary !== "") {
    headTags.push(m.meta({ name: "description", content: page.summary }));
  }

  // meta
  headTags.push(
    m.meta({
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    }),
  );

  // icon
  headTags.push(m.link("shortcut icon", `/${assetsFolder}/favicon.ico`));

  // global app
  if (!page.excludeGlobalApp) {
    headTags.push(`<script src="/${globalAppFile}"></script>`);
  }

  // global styles
  if (!page.excludeGlobalStylesheet) {
    headTags.push(m.link("stylesheet", `/${globalCssFile}`));
  }
  headTags.push(m.link("stylesheet", `/${cssFolder}/highlight.js/agate.css`));

  // local app
  if (page.localApp !== "") {
    if (!fs.existsSync(page.localApp)) {
      missingResources = true;
      logger.error(`❌ Local app "${page.localApp}" not found`);
    } else {
      const localAppUri = `${jsFolder}/${generateId()}.js`;
      headTags.push(`<script src="/${localAppUri}"></script>`);
      promises.push(buildApp(page.localApp, `${distFolder}/${localAppUri}`));
    }
  }

  // local styles

  if (missingResources) {
    throw new Error("Missing resources");
  }

  const html = `<!doctype html>
<html lang="${page.language}">
<head>\n${headTags.join("\n  ")}</head>
<body>
${prepareBody(page)}
</body>
</html>`;

  if (page.path !== "") {
    fs.mkdirSync(`${distFolder}/${page.path}`, { recursive: true });
  }
  const subPath = page.path === "" ? "" : `${page.path}/`;
  const fullPath = `${distFolder}/${subPath}${page.filename}`;
  promises.push(
    writeFile(fullPath, html).then(() => {
      logger.log(`✅ Page "${page.title}" written to ${fullPath}`);
    }),
  );

  return promises;
};
