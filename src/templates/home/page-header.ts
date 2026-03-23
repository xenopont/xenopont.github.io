import { domainDisplayName } from "../../config/constants.js";
import { h1, header, safe } from "../../html/elements.js";
import type { THtmlEntity } from "../../html/entities.js";

export const pageHeader: THtmlEntity = header({ id: "home-page-header" }, [
  h1({}, [safe(domainDisplayName)]),
]);
