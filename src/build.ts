import { content } from "./content/all.js";
import { logger } from "./utils/logger.js";

logger.info("Building...");

logger.debug(`Content found: ${content.length} items`);

logger.info("Done!");
logger.info("");
