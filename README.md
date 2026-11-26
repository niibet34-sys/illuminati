# ILLUMINATI — illuminati.cv

An atmospheric one-page presentation website hosted through Cloudflare Pages and maintained in [niibet34-sys/illuminati](https://github.com/niibet34-sys/illuminati).

## Visual assets

The two background symbols are prepared **directly from images supplied by the site owner**. Their white backgrounds were removed and their ink marks turned into pale, transparent PNG illustrations to stay visible on a dark background; the geometry and lettering are not regenerated.

- `assets/owl-transparent.png` — owl of Minerva with open book, laurel wreath and S.M.E.T. inscription
- `assets/eye-transparent.png` — radiant eye inside a triangle

Both motifs are separate background elements, not cards or framed images. They float subtly and respond to mouse movement on supported desktop browsers. Motion is disabled for users preferring reduced motion. The images are decorative; content and contact remain fully accessible without them.

The motto `Lux intus, lux mundi` represents the contemporary website and is not claimed to be a verified historical slogan.

## Deployment

- GitHub repository: `niibet34-sys/illuminati`
- Production branch: `main`
- Cloudflare Pages project: `illuminati-aetherni`
- Build command: none; output directory: `.`
- Preview site: https://illuminati-aetherni.pages.dev/
- Active custom domain: https://illuminati.cv/ (also www.illuminati.cv)

## Localisation

`i18n.js` selects the site language from the visitor's browser or device preferences (`navigator.languages` and `navigator.language`). It covers 18 locales: English, Russian, French, German, Spanish, Italian, Portuguese, Ukrainian, Polish, Dutch, Turkish, Arabic, Simplified Chinese, Traditional Chinese, Japanese, Korean, Czech and Romanian. Unsupported languages fall back to English.

For quality assurance and optional links, an explicit `?lang=ru` or `?lang=fr` query parameter overrides automatic detection. The main brand name, Latin motto and email address are intentionally not translated. No translation API, cookies, or tracking are used.

## Mobile layout

The background symbols are positioned higher and the main content follows them with substantially reduced top whitespace. Check the 320px and 390px mobile widths when changing typography or copy. Reduced-motion preferences are respected.

## Contact

The only contact action is a `mailto:` link to `contact@illuminati.cv`. Incoming mail is routed via Cloudflare Email Routing to the configured verified destination. Mail forwarding and DNS management are outside the static website itself.
