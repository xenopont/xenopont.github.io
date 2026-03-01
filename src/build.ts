import { content } from "./content/all.js";
import { getTemplate } from "./templates/active.js";
import { cleanDist } from "./utils/clean-dist.js";
import { copyQueue } from "./utils/copy-queue.js";
import { logger } from "./utils/logger.js";
import { saveHTML } from "./utils/save-html.js";

const main = async (): Promise<void> => {
  logger.info("Start building.");
  if (!cleanDist()) {
    return;
  }
  const promises: Promise<void>[] = [];
  // Render all pages first,
  logger.debug(`Content found: ${content.length} items`);
  for (const page of content) {
    logger.info(`Rendering ${page.title}`);
    logger.info(page.uri);
    const template = getTemplate(page.template);
    const renderedHtml = template.render(page);
    promises.push(
      saveHTML(renderedHtml, page.publicDirectory, page.publicFileName).then(
        () =>
          logger.info(`✅ Page ${page.title} saved to ${page.publicFileName}`),
      ),
    );
  }

  // Start the copy queue only after all pages are rendered.
  // That gives the templates a chance to add all their assets to the queue.
  promises.push(...copyQueue.start());

  await Promise.all(promises);
};

main()
  .then(() => {
    logger.info("Done!");
  })
  .catch((error) => {
    logger.error("Error:", error);
  });

logger.info("");
