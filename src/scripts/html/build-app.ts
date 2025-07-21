import { build } from "esbuild";
import { logger } from "../../utils/logger.js";

export const buildApp = async (
  entryFile: string,
  outFile: string,
): Promise<boolean> => {
  return build({
    entryPoints: [entryFile],
    bundle: true,
    outfile: outFile,
    platform: "browser",
    format: "iife",
    sourcemap: true,
    minify: true,
  })
    .then(() => true)
    .catch((error) => {
      logger.error(`Build of ${entryFile} failed:`, error);
      return false;
    });
};
