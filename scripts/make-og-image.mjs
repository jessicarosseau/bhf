/**
 * Generates public/og-image.png (1200×630) — the social-share card.
 * Run with: node scripts/make-og-image.mjs
 * Requires `sharp` (already a project dependency).
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og-image.png");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1e1d45"/>
      <stop offset="0.55" stop-color="#34356f"/>
      <stop offset="1" stop-color="#4b4e9e"/>
    </linearGradient>
    <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fbedd2"/>
      <stop offset="0.6" stop-color="#f2c983" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#e8a13a" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#sky)"/>
  <circle cx="960" cy="230" r="240" fill="url(#sun)" opacity="0.7"/>

  <!-- ridges -->
  <path d="M0 470 L150 445 L340 470 L520 435 L720 470 L920 440 L1100 470 L1200 455 L1200 630 L0 630 Z" fill="#3b3d84" opacity="0.9"/>
  <path d="M0 520 L200 500 L440 525 L640 495 L860 525 L1080 500 L1200 520 L1200 630 L0 630 Z" fill="#33553b"/>
  <path d="M0 575 L1200 555 L1200 630 L0 630 Z" fill="#24402c"/>

  <!-- berry mark -->
  <g transform="translate(96,150)">
    <path d="M52 0c14-3 26 2 26 2s-1 13-11 22c-8 7-20 7-25 6-1-5 1-17 10-30z" fill="#7ea684"/>
    <circle cx="34" cy="60" r="42" fill="#8b93c9"/>
    <path d="M34 34l5.7 11.5 12.7 1.8-9.2 9 2.2 12.6L34 74l-11.4 6 2.2-12.6-9.2-9 12.7-1.8z" fill="#1e1d45"/>
  </g>

  <!-- wordmark -->
  <text x="96" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="86" font-weight="700" fill="#ffffff">Blueberry Hill Farm</text>
  <text x="98" y="392" font-family="Arial, sans-serif" font-size="30" letter-spacing="3" fill="#a9b6d9">PICK-YOUR-OWN · THE BERKSHIRES</text>
  <text x="96" y="452" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#e7e4f4">Heirloom blueberries, high on Mt. Washington.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
