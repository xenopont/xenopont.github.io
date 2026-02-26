import { domainName } from "../config/constants.js";

export const baseUrl: string = `http${domainName.startsWith("localhost") ? "" : "s"}://${domainName}`;
