# thecaptaincompany.com

Marketing site for **THE CAPTAIN COMPANY** — a Caring Hope Foundation initiative building open,
spec-driven software against extractive platforms, starting with [Captain.Food](https://join.captain.food).

Static site served by **GitHub Pages** at the custom domain **`thecaptaincompany.com`**.

## Stack
- Plain HTML / CSS / vanilla JS — no build step.
- `styles.css` — black + gold design system, light **and** dark themes (`[data-theme]`).
- `partials.js` — shared footer, theme toggle, **FR/EN** language toggle (`[data-lang]`), reveal-on-scroll, WhatsApp.
- Bilingual content lives inline as `.t-en` / `.t-fr` spans (both in the DOM for SEO; CSS shows the active one).

## Pages
- `index.html` — the landing page.
- `mentions-legales.html`, `confidentialite.html` — legal (FR).

## Brand
- Palette: Black `#000` · Warm Gold `#D4AF37` · White · Soft Off-White `#F8F8F8`.
- Type: Space Grotesk (display) + Montserrat (body). *(Space Grotesk substitutes for Apparat — no Apparat licence.)*
- Logo assets in `assets/brand/` were cropped from the brand guide; swap in vector/transparent versions later with no markup change.
- Brand guide + decisions: see [`.github` repo → `docs/thecaptaincompany-landing.brief.md`](https://github.com/TheCaptainCompany/.github/blob/main/docs/thecaptaincompany-landing.brief.md).

## TODO
- **WhatsApp link** — set `WA` in `partials.js` once the number is known. Until then, WhatsApp CTAs fall back to email and the floating bubble is hidden (nothing ships broken).
- DNS: point `thecaptaincompany.com` (+ `www` → bare) at GitHub Pages, then enable **Enforce HTTPS** in Settings → Pages.
