# Clean-Pro-Website

Marketing website for **Clean Pro** — a premium laundry and dry cleaning service
with free pickup and delivery. Built with **Astro 5** and **Tailwind CSS v4**.

## Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [React](https://react.dev) islands via `@astrojs/react` (used by the lanyard scene)
- Fonts: Sora / Exo 2 / Onest / Geist / Manrope from Google Fonts

## Commands

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview the production build locally |

## Structure

```
src/
├─ layouts/Layout.astro      # <html> shell, fonts, scroll-reveal observer
├─ pages/
│  ├─ index.astro            # assembles all sections in order
│  └─ imprint.astro          # legal / imprint page
├─ styles/global.css         # Tailwind import + @theme design tokens
└─ components/
   ├─ Logo.astro             # Clean Pro wordmark + water-drop icon
   ├─ Nav.astro              # glass floating navbar
   ├─ Hero.astro             # headline + hero imagery
   ├─ LogoCloud.astro        # trusted-by logo strip
   ├─ Features.astro         # bento feature grid
   ├─ AdminControl.astro     # numbered process list
   ├─ CustomAssistants.astro # 3-card value row
   ├─ SecureUsage.astro      # card carousel
   ├─ Sovereignty.astro      # trust cards + map
   ├─ ProductDemo.astro      # product demo section
   ├─ Faq.astro              # tabbed accordion (single-open behaviour)
   ├─ CtaBanner.astro        # dark mid-page CTA
   ├─ Contact.astro          # contact form (Web3Forms) + company details
   ├─ Footer.astro           # dotted world map + link columns
   └─ lanyard/               # 3D lanyard scene (React + three.js)
```

## Branding

The brand mark is a **water drop** on the Clean Pro accent blue (`#1f8fe0`).
It lives in two places and they should stay in sync:

- `src/components/Logo.astro` — inline SVG used in the nav and footer
- `public/favicon.svg` — browser tab icon

## Design tokens

Defined in `src/styles/global.css` under `@theme` — brand colours (`ink`,
`navy`, `accent` blue, `lav-*` lavenders), fonts, and the card radius. Adjust
these to re-skin the whole site.

## Contact form

`Contact.astro` posts to [Web3Forms](https://web3forms.com). The access key is
read from the environment — see `.env.example`.

## Notes

- Fully responsive (mobile → desktop) via Tailwind `sm` / `md` / `lg` breakpoints.
- `astro.config.mjs` still lists the old `eokit.com` hosts under `allowedHosts` —
  update these once the production domain is confirmed.
