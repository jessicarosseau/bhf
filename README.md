# Blueberry Hill Farm — Website

The website for **Blueberry Hill Farm**, a family pick-your-own blueberry farm
on Mt. Washington in the southern Berkshires of Massachusetts.

Built with [Astro](https://astro.build): fast, static, accessible, and simple
to maintain. No database, no server to run — it publishes as plain HTML to
GitHub Pages (free hosting).

> **Editing content?** You probably want **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)** —
> a plain-English guide to updating hours, status, recipes, photos, and more.
> You do not need to be a programmer.

---

## Quick start (local preview)

You'll need [Node.js](https://nodejs.org) 18.20+, 20.3+, or 22+ installed.

```bash
npm install       # install dependencies (first time only)
npm run dev       # start a local preview at http://localhost:4321
```

Open the printed URL in your browser. Edits you make to files show up live.

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Local preview with live reload                        |
| `npm run build`   | Build the finished site into `dist/`                  |
| `npm run preview` | Preview the built site exactly as it will deploy      |

---

## Project structure

```
src/
  data/            ← The files the farm edits most (start here)
    farm.ts        ← Address, phone, hours, season, payment, social links, status
    nav.ts         ← The menu items
    gallery.ts     ← Gallery photos + captions
    around.ts      ← "Around Us" local recommendations
    recipeCategories.ts
  content/
    recipes/       ← One Markdown file per recipe
  components/      ← Reusable building blocks (header, footer, status, cards…)
  layouts/         ← The page shell (<head>, header, footer)
  pages/           ← One file per page → one URL
    index.astro    → /            (Home)
    info.astro     → /info        (Plan Your Visit)
    about.astro    → /about
    cookbook/      → /cookbook and /cookbook/<recipe>
    gallery.astro  → /gallery
    around.astro   → /around
    404.astro      → friendly "page not found"
  styles/
    global.css     ← Colors, fonts, and shared styles (the design system)
scripts/
  make-og-image.mjs ← Regenerates the social-share image
public/            ← Files served as-is (favicon, robots.txt, og-image, /gallery photos)
.github/workflows/
  deploy.yml       ← Auto-deploys to GitHub Pages on every push to main
```

---

## Deployment (GitHub Pages)

This repo deploys itself automatically.

1. Push the code to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to the `main` branch (or use **Actions → Deploy to GitHub Pages → Run
   workflow**). The site builds and goes live in a couple of minutes.

The workflow (`.github/workflows/deploy.yml`) automatically figures out the
correct URL and base path — it works whether the site lives at
`your-name.github.io/repo-name` **or** at a custom domain.

### Using a custom domain (e.g. `blueberryhillfarm.com`)

1. In **Settings → Pages → Custom domain**, enter your domain and save.
2. Add a `public/CNAME` file containing just your domain, e.g.:
   ```
   blueberryhillfarm.com
   ```
3. Update `SITE_URL` in `astro.config.mjs` (or rely on the workflow) and the
   `Sitemap:` line in `public/robots.txt` to match.
4. Point your domain's DNS at GitHub Pages per
   [GitHub's guide](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Notable choices

- **Astro** — ships zero JavaScript by default, so pages load fast; the little
  interactivity we use (menu, recipe filter, lightbox) is tiny vanilla JS.
- **Central data file** (`src/data/farm.ts`) — the address, hours, status, and
  social links live in one place and flow into every page.
- **Self-hosted font** (Fraunces) — no third-party font requests, better
  privacy and speed.
- **Accessibility** — semantic HTML, skip link, keyboard-friendly menu and
  lightbox, visible focus states, strong color contrast, descriptive alt text.
- **SEO** — per-page titles/descriptions, Open Graph + Twitter cards, JSON-LD
  `Farm` data, an auto-generated sitemap, and `robots.txt`.
- **Privacy-friendly analytics (optional, off by default)** — set
  `analytics.plausibleDomain` in `src/data/farm.ts` to enable
  [Plausible](https://plausible.io) (cookieless). Leave it empty for none.

## Content still needed from the farm

See **[CONTENT-TODO.md](./CONTENT-TODO.md)** for the checklist of photos and
details to supply before launch. In the code, anything marked `⚑ PLACEHOLDER`
is a stand-in awaiting real information.
