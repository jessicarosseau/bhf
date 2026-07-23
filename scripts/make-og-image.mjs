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
  <rect width="1200" height="630" fill="#fcfaf3"/>
  <!-- inset frame, echoing the site hero -->
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#d3c9b1" stroke-width="1.5"/>

  <!-- botanical sprig -->
  <g transform="translate(576,120)" fill="none" stroke="#857c67" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 4c0 22-1 38-1 54"/>
    <path d="M22 22C13 20 6 14 3 5c9-1 16 4 19 11"/>
    <path d="M24 34c9-3 15-9 18-18-9 0-15 5-18 12"/>
    <circle cx="16" cy="62" r="6"/><circle cx="31" cy="58" r="6"/><circle cx="24" cy="73" r="6"/>
  </g>

  <!-- eyebrow -->
  <text x="600" y="245" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" letter-spacing="7" fill="#857c67">PICK-YOUR-OWN · EST. 1941</text>

  <!-- wordmark -->
  <text x="600" y="335" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="92" fill="#22201b">Blueberry Hill Farm</text>

  <!-- rule -->
  <line x1="560" y1="380" x2="640" y2="380" stroke="#d3c9b1" stroke-width="1.5"/>

  <!-- tagline -->
  <text x="600" y="440" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#56503f">Heirloom blueberries, high in the Berkshire hills.</text>

  <!-- meta -->
  <text x="600" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" letter-spacing="4" fill="#857c67">MT. WASHINGTON · THE BERKSHIRES · MASSACHUSETTS</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
