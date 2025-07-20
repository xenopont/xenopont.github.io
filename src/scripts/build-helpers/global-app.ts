import { build } from "esbuild";
import { logger } from "../../utils/logger.js";

export const buildGlobalApp = async (
  entryFile: string,
  outFile: string,
): Promise<void> => {
  try {
    await build({
      entryPoints: [entryFile],
      bundle: true,
      outfile: outFile,
      platform: "browser",
      format: "iife",
      sourcemap: true,
      minify: true,
    });
    logger.log("Global app build complete");
  } catch (error) {
    logger.error("Global app build failed:", error);
  }
};
