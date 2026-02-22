import { domainName } from "../config/constants.js";

export const baseUrl: string = `http${domainName.match(/localhost/) ? "" : "s"}://${domainName}`;
