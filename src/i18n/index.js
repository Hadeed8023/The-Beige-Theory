import en from "../locales/en.js";
import { site } from "../config/site.js";

// Register future translations here: { en, ur, ... }.
export const translations = { en };
export const locale = Object.hasOwn(translations, site.locale)
  ? site.locale
  : "en";

function withFallback(base, translated) {
  return Object.fromEntries(
    Object.entries(base).map(([key, value]) => [
      key,
      value && typeof value === "object" && !Array.isArray(value)
        ? withFallback(value, translated?.[key])
        : (translated?.[key] ?? value),
    ]),
  );
}

export const copy = withFallback(en, translations[locale]);
export function formatText(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}
