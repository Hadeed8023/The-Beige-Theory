import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copy, locale } from "./src/i18n/index.js";

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === "true" ? "/The-Beige-Theory/" : "/",
  plugins: [
    react(),
    {
      name: "site-metadata",
      transformIndexHtml(html) {
        return html
          .replaceAll("__SITE_TITLE__", escapeHtml(copy.meta.title))
          .replaceAll("__SITE_DESCRIPTION__", escapeHtml(copy.meta.description))
          .replaceAll("__SITE_LANGUAGE__", escapeHtml(locale))
          .replaceAll("__SITE_DIRECTION__", escapeHtml(copy.meta.direction));
      },
    },
  ],
});
