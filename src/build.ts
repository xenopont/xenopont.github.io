import { content } from "./content/all.js";
import { getTemplate } from "./templates/active.js";
import { cleanDist } from "./utils/clean-dist.js";
import { copyQueue } from "./utils/copy-queue.js";
import { logger } from "./utils/logger.js";

const main = async (): Promise<void> => {
  logger.info("Start building.");
  if (!cleanDist()) {
    return;
  }
  // Render all pages first,
  logger.debug(`Content found: ${content.length} items`);
  for (const page of content) {
    logger.debug(`Rendering ${page.title}`);
    const template = getTemplate(page.template);
    const renderedHtml = template.render(page);
    logger.debug(renderedHtml);
  }

  // Start the copy queue only after all pages are rendered.
  // That gives the templates a chance to add all their assets to the queue.
  await copyQueue.start();
};

main()
  .then(() => {
    logger.info("Done!");
  })
  .catch((error) => {
    logger.error("Error:", error);
  });

logger.info("");
