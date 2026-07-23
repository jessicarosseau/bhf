// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * Site + base URL configuration.
 *
 * These control canonical URLs, the sitemap, and how internal links are
 * prefixed. They can be overridden with environment variables so the same
 * codebase works for a custom domain, a project page, or a user/org page.
 *
 *  - SITE_URL  Full origin (+ optional base path) of the deployed site.
 *  - BASE_PATH Sub-path the site is served from ("/" for a custom domain or
 *              user/org page, "/repo-name/" for a GitHub Pages project page).
 *
 * See README.md → "Deployment" for how GitHub Pages sets these automatically.
 */
const SITE_URL = process.env.SITE_URL || "https://blueberryhillfarm.example.com";
const BASE_PATH = process.env.BASE_PATH || "/";

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: "ignore",
  build: {
    // Emit /info/index.html style pages for clean, extension-less URLs.
    format: "directory",
  },
  integrations: [sitemap()],
  image: {
    // Sharp is the default; allow remote optimization of source-site images
    // if any are referenced during content migration.
    responsiveStyles: true,
  },
});
