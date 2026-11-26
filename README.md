# ILLUMINATI — illuminati.cv

Minimal independent philosophical circle site, published by the existing Cloudflare Pages project `illuminati-aetherni`, with GitHub as source.

## Visual identity

This version intentionally **does not redraw the original symbols as gold vectors**.

- `assets/minerval-1788.png`: unretouched black-ink engraving **cropped from the original scan** of *Das verbesserte System der Illuminaten* (1788), showing Minerva's owl on an open book. Cropped on a white background without recoloring. Source: [Wikimedia Commons, Minerval insignia](https://commons.wikimedia.org/wiki/File:Minerval_insignia.png). Public domain.
- `assets/eye-dollar-engraving.jpg`: **cropped reproduction of the Eye of Providence from the reverse of the U.S. $1 bill**, kept in its period banknote print color. Source: [Wikimedia Commons, All seeing eye.jpg](https://commons.wikimedia.org/wiki/File:All_seeing_eye.jpg). Public domain in the United States; U.S. government currency engraving.
- The two historic motifs are visually and physically **separate**. The dollar Eye of Providence is not claimed to be the documented insignia of the eighteenth-century Bavarian Illuminati.
- The motto **Lux intus, lux mundi** is the present-day site's motto, not represented as a historically verified Bavarian Illuminati motto.

## Technology

Single HTML file with responsive CSS, zero frontend dependencies, light cursor parallax on desktop, graceful reduced-motion handling, and click-to-email contact only. Includes a typographic SVG favicon. The fonts use an optional Google Fonts request and serif/sans fallback.

## Deployment

Existing GitHub repo: https://github.com/niibet34-sys/illuminati

Existing Cloudflare Pages project: `illuminati-aetherni`
Production branch: `main`
Build command: none
Output directory: `.`
Preview URL: https://illuminati-aetherni.pages.dev/

Custom domain: `illuminati.cv`, when the Cloudflare zone has been activated at Namecheap and SSL/hostname verification is complete. Ensure all current DNS/MX/TXT records are preserved when changing authoritative nameservers.

**Email:** The page displays `contact@illuminati.cv`. Clicking opens a mail client; delivery depends on a separate configured mailbox or forwarding service. This site does not provision mail.
