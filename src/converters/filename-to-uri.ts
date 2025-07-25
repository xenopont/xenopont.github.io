import * as fs from "node:fs";
import { distFolder } from "../build/util/constants.js";
import { counter } from "../utils/counter.js";
import { copyQueue } from "./copy-queue.js";

export const filenameToUri = <T>(
  sourceFilename: string,
  allowedExtensions: Set<string>,
  destinationUri: string,
  fileTypeName: string,
  baseFilename: string,
): T => {
  const extension = sourceFilename.split(".").pop();
  if (!extension || !allowedExtensions.has(extension)) {
    throw new Error(
      `❌ Cannot safely convert ${sourceFilename} to a file of type ${fileTypeName}.
      Allowed extensions are: ${[...allowedExtensions].join(", ")}`,
    );
  }

  if (!fs.existsSync(sourceFilename)) {
    throw new Error(`❌ Required resource ${sourceFilename} not found`);
  }

  const fileUri = `${destinationUri}/${baseFilename}-${counter()}.${extension}`;
  const destinationFilename = `./${distFolder}/${fileUri}`;
  // At this moment the copy operation is impossible, because the page contents
  // are prepared first, and the assets directory is not created yet.
  // Therefore, we put the files in the copy queue.
  copyQueue.add({ source: sourceFilename, destination: destinationFilename });

  return `/${fileUri}` as T;
};
