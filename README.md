# The Beige Theory

React, Vite, and Motion website for a furniture and interior design studio.

## Local development

```sh
npm install
npm run dev
```

## Structure

```text
public/
  brand-logo.svg                  Vector logo
  favicon.svg                     Browser icon
  images/responsive/              Responsive WebP photography
  images/SOURCES.md               Photo sources
src/
  App.jsx                         Page composition
  main.jsx                        Entry point and document metadata
  components/
    brand/BrandLogo/               Logo component and CSS
    layout/                       Header, MobileMenu, Footer
    sections/                     Hero, About, Marquee, Spaces,
                                  Services, Process, Contact
    ui/                           Shared dialogs, photos, reveals,
                                  rich text, and WhatsApp links
  config/site.js                  Links, locale, project count, asset IDs
  data/photo-manifest.json         Image paths and dimensions
  i18n/index.js                   Locale selection and English fallback
  locales/en.js                   All editable English wording
  styles/tokens.css               Brand colours and font variables
  styles/globals.css              Shared typography, resets, utilities
  utils/contact.js                WhatsApp URL creation
```

Each layout and section component keeps its CSS in the same folder. `SpacesSlider.jsx` shares `Spaces.css`, and `ProjectCount.jsx` shares `About.css`. Shared UI components only have their own CSS when needed.

## Editing content

Edit `src/locales/en.js` for headings, paragraphs, navigation, service and project descriptions, image descriptions, accessibility labels, browser metadata, and WhatsApp messages.

- `{em}text{/em}` marks italic emphasis.
- `\n` inserts a line break.
- Placeholders such as `{category}`, `{title}`, and `{year}` are filled by `formatText()`.
- Copy is rendered as text, never injected as HTML.

Edit `src/config/site.js` for the WhatsApp number, Instagram link, project count, navigation targets, and project image IDs. Confirm the `100+` claim before publishing.

## Translations

English is the only supplied language. To add another:

1. Copy `src/locales/en.js` into a new locale file and translate its values, keeping keys, IDs, and placeholders intact.
2. Import and register the new file in `translations` inside `src/i18n/index.js`.
3. Change `locale` in `src/config/site.js` to the new language code.
4. Set `meta.direction` to `ltr` or `rtl` as appropriate.

Missing keys fall back to English; translated arrays replace the English array in full. Browser metadata, document language, and direction follow the selected locale. No language switcher or machine translation is added.

## Assets

Photos are inspiration imagery rather than client projects. Sources are listed in `public/images/SOURCES.md`.

`Photo.jsx` selects local WebP files for the frame size, cover crop, and screen density. Images reach 3840 pixels wide where the original permits; Living is capped at 3000 and Office at 2301. Replace assets in `public/images/responsive/` and update `src/data/photo-manifest.json` with their real dimensions.

The logo is a vector reconstruction of the supplied brand reference, with outlined lettering and no embedded bitmap or font dependency.

WhatsApp opens editable messages for visitors to send themselves. The site has no messaging backend. Google Fonts has system font fallbacks.
