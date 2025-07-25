import { build } from "esbuild";
import { logger } from "../../utils/logger.js";

export const buildApp = async (
  entryFile: string,
  outFile: string,
): Promise<void> => {
  return build({
    entryPoints: [entryFile],
    bundle: true,
    outfile: outFile,
    platform: "browser",
    format: "iife",
    sourcemap: true,
    minify: true,
  })
    .then(() => {
      logger.log(`✅ Build of application ${entryFile} succeeded.`);
    })
    .catch((error) => {
      logger.error(`❌ Build of application ${entryFile} failed:`, error);
    });
};
