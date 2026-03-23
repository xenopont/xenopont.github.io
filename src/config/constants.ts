import { buildId } from "../utils/id.js";

export const domainName: string =
  // biome-ignore lint/complexity/useLiteralKeys: the source is indexed
  process.env["DOMAIN_NAME"] ?? "localhost:8080";

export const sourceRoot: string = "./src";
export const publicRoot: string = "./dist";
export const assetsFolder: string = `assets-${buildId}`;

export const domainDisplayName: string = domainName.startsWith("xenopont")
  ? "Xenopont"
  : domainName.startsWith("localhost")
    ? "localhost"
    : "Dev XL";
