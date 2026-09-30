import { site } from "../config/site.js";
import { copy } from "../i18n/index.js";

export function whatsappUrl(message = copy.contact.defaultMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
