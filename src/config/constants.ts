export const domainName: string =
  // biome-ignore lint/complexity/useLiteralKeys: the source is indexed
  process.env["DOMAIN_NAME"] ?? "localhost:8080";
