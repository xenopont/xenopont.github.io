import { mkdirSync, rmSync } from "node:fs";
import { logger } from "./logger.js";
import { PUBLIC_ROOT } from "./paths.js";

export function cleanDist(): boolean {
  try {
    rmSync(PUBLIC_ROOT, { recursive: true, force: true });
    mkdirSync(PUBLIC_ROOT, { recursive: true });
    logger.info("✅ Successfully cleaned dist directory");
    return true;
  } catch (error) {
    logger.error("❌ Failed to clean dist directory:", error);
    return false;
  }
}
