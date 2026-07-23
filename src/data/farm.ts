/**
 * ─────────────────────────────────────────────────────────────────────────
 *  BLUEBERRY HILL FARM — CENTRAL SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  This is the ONE file the farm owners edit most often. Everything here flows
 *  automatically into every page: the header, footer, status banner, Info page,
 *  maps, contact links, and social spotlights.
 *
 *  You do NOT need to know how to code to update it. Change the text inside the
 *  quotation marks, keep the quotation marks and commas in place, then save.
 *  See CONTENT-GUIDE.md for a friendly, step-by-step walkthrough.
 *
 *  A ⚑ PLACEHOLDER comment marks anything that still needs to be verified or
 *  supplied by the farm before launch.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type SeasonStatus = "open" | "closed" | "opening-soon" | "closing-soon";

export const farm = {
  /* ── Identity ──────────────────────────────────────────────────────── */
  name: "Blueberry Hill Farm",
  tagline: "Pick-your-own blueberries in the Berkshire hills.",
  shortDescription:
    "A family-run pick-your-own blueberry farm high on Mt. Washington in the southern Berkshires of Massachusetts — heirloom highbush blueberries, big views, and a quiet summer tradition since 1941.",
  legalEntity: "Blueberry Hill Trust, LLC",
  foundedYear: 1941,

  /* ── Location ──────────────────────────────────────────────────────── */
  address: {
    street: "358 East Street",
    town: "Mt. Washington",
    county: "Berkshire County",
    state: "MA",
    stateLong: "Massachusetts",
    zip: "01258", // ⚑ PLACEHOLDER — confirm ZIP code with the farm.
    region: "the Southern Berkshires",
  },
  // Used for the "Get Directions" button and the embedded map.
  // This searches the address on Google Maps; replace with a precise share
  // link or plus-code if you prefer.
  mapQuery: "358 East Street, Mount Washington, MA",
  directionsNote:
    "About 10 miles southwest of Great Barrington — roughly a 20-minute drive up the mountain.",

  /* ── Contact ───────────────────────────────────────────────────────── */
  phone: "(413) 528-1479",
  phoneHref: "+14135281479",
  email: "information@austinfarm.com",

  /* ── Social media — the BEST source for day-to-day updates ─────────── */
  social: {
    instagram: {
      handle: "@bhfberkshires",
      url: "https://www.instagram.com/bhfberkshires/",
    },
    facebook: {
      handle: "Blueberry Hill Farm – Berkshires",
      url: "https://www.facebook.com/Blueberry-Hill-Farm-Berkshires-600272607022167/",
    },
  },

  /* ── Season & hours ────────────────────────────────────────────────── */
  season: {
    // Rough window shown on the site. Exact opening/closing dates change every
    // year with the weather — always point visitors to social media.
    label: "Mid-July through late August",
    note: "Our season is short and depends on the weather. Because we're up high, our berries usually ripen 7–10 days later than farms down in the valley.",
  },
  // Typical operating hours. These are the FarmStatus banner's fallback text.
  // Real, current hours are announced on Instagram & Facebook.
  hours: {
    summary: "Friday – Monday, 10 a.m. – 5 p.m.",
    days: [
      { day: "Friday", hours: "10 a.m. – 5 p.m." },
      { day: "Saturday", hours: "10 a.m. – 5 p.m." },
      { day: "Sunday", hours: "10 a.m. – 5 p.m." },
      { day: "Monday", hours: "10 a.m. – 5 p.m." },
      { day: "Tuesday", hours: "Closed" },
      { day: "Wednesday", hours: "Closed" },
      { day: "Thursday", hours: "Closed" },
    ],
    // Shown prominently everywhere hours appear.
    importantNote:
      "Please do not come outside of posted hours. Always check our Instagram or Facebook the morning of your visit — we may close for weather, low berries, or a full field.",
  },

  /* ── Payment & picking ─────────────────────────────────────────────── */
  payment: {
    methods: ["Cash", "Check", "Debit / Credit card"],
    pricingNote:
      "You pre-pay for your berries — a flat fee based on the size of the container you fill.",
    price:
      "Pricing is posted at check-in. ⚑ Ask the farm to confirm this season's price so it can be listed here.",
  },
  varieties:
    "Heirloom highbush blueberries — Rancocas, Jersey, and Rubel — with a handful of Bluecrop and Berkeley bushes replanted in the early 1990s.",

  /* ── Analytics (optional, privacy-friendly) ───────────────────────── */
  // Leave the domain empty to disable. To turn on Plausible analytics, enter
  // the site's domain (e.g. "blueberryhillfarm.com"). See CONTENT-GUIDE.md.
  analytics: {
    plausibleDomain: "",
  },
} as const;

/* ─────────────────────────────────────────────────────────────────────────
 *  CURRENT FARM STATUS  (change this often during the season!)
 *  ─────────────────────────────────────────────────────────────────────────
 *  `status` must be one of: "open" | "closed" | "opening-soon" | "closing-soon"
 *  Keep the headline short. Put details (like "picking is excellent right now")
 *  in `detail`. `updated` is the plain-English date you last edited this.
 * ─────────────────────────────────────────────────────────────────────────
 */
export const farmStatus: {
  status: SeasonStatus;
  headline: string;
  detail: string;
  updated: string;
} = {
  status: "closed", // ⚑ Update at the start & end of each season.
  headline: "We're closed for the season — see you next summer!",
  detail:
    "Thank you for a wonderful summer. Follow along on Instagram and Facebook and we'll post the moment the berries are ready and the gate is open.",
  updated: "Off-season", // ⚑ e.g. "July 23, 2026"
};

/* Convenience: full one-line postal address. */
export const fullAddress = `${farm.address.street}, ${farm.address.town}, ${farm.address.state} ${farm.address.zip}`;

/* Convenience: Google Maps directions + embed URLs derived from mapQuery. */
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  farm.mapQuery
)}`;
export const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  farm.mapQuery
)}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  farm.mapQuery
)}&z=13&output=embed`;
