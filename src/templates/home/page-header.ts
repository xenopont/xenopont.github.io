import { domainDisplayName } from "../../config/constants.js";
import { h1, header, safe, section } from "../../html/elements.js";
import type { THtmlEntity } from "../../html/entities.js";

export const pageHeader: THtmlEntity = header({ id: "home-page-header" }, [
  section({ id: "title-section" }, [h1({}, [safe(domainDisplayName)])]),
  section({ id: "header-space" }, []),
]);
