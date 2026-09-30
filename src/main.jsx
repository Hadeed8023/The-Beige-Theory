import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/tokens.css";
import "./styles/globals.css";
import App from "./App";
import { copy, locale } from "./i18n";

document.title = copy.meta.title;
document.documentElement.lang = locale;
document.documentElement.dir = copy.meta.direction;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", copy.meta.description);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
