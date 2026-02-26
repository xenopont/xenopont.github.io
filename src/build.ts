import { content } from "./content/all.js";
import { cleanDist } from "./utils/clean-dist.js";
import { logger } from "./utils/logger.js";

const main = async (): Promise<void> => {
  //
  logger.info("Start building.");
  if (!cleanDist()) {
    return;
  }

  logger.debug(`Content found: ${content.length} items`);
};

main()
  .then(() => {
    logger.info("Done!");
  })
  .catch((error) => {
    logger.error("Error:", error);
  });

logger.info("");
