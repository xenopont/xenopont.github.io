import { domainDisplayName } from "../../config/constants.js";
import { div, h1, header, safe, section } from "../../html/elements.js";
import type { THtmlEntity } from "../../html/entities.js";

export const pageHeader: THtmlEntity = header({ id: "home-page-header" }, [
  section({ id: "title-section" }, [
    div({ id: "title-wrapper" }, [h1({}, [safe(domainDisplayName)])]),
  ]),
  section({ id: "header-space" }, []),
]);
