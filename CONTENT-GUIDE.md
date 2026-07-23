# Updating the website — a friendly guide

You don't need to be a programmer to keep this site current. Almost everything
you'll want to change lives in a few plain files in the **`src/data`** folder.

You can edit these right on GitHub (click a file → the ✏️ pencil icon → make your
change → **Commit changes**). Within a minute or two the live site updates
automatically. If something ever looks wrong, you can always undo a change on
GitHub.

**Golden rule:** only change the words *inside the quotation marks*. Keep the
quotation marks `"`, commas `,`, and other punctuation exactly where they are.

---

## 1. The most common update: "Are we open?"

Open **`src/data/farm.ts`** and find the section titled **CURRENT FARM STATUS**.

```js
export const farmStatus = {
  status: "closed",   // ← one of: "open", "closed", "opening-soon", "closing-soon"
  headline: "We're closed for the season — see you next summer!",
  detail: "Thank you for a wonderful summer...",
  updated: "Off-season",   // ← e.g. "July 23, 2026"
};
```

- **`status`** changes the color and label of the banner. Use exactly one of:
  `"open"`, `"closed"`, `"opening-soon"`, or `"closing-soon"`.
- **`headline`** is the big line (keep it short).
- **`detail`** is the smaller explanation underneath.
- **`updated`** — put today's date so visitors know it's current.

This banner appears on the **Home** page and the **Visit** page at once.

> 💡 For day-to-day "we're open today / closed for rain" updates, **Instagram and
> Facebook are still the fastest** — the whole site points visitors there. Use
> the status banner for bigger changes (season start/end, a multi-day closure).

---

## 2. Hours, address, phone, prices, social links

Same file, **`src/data/farm.ts`**, near the top. Change the text in quotes:

- `phone`, `email`
- `hours.summary` and the day-by-day `hours.days` list
- `season.label` and `season.note`
- `payment.price` — replace the placeholder once you set this year's price
- `social.instagram.url` / `social.facebook.url`

Anything with a `⚑ PLACEHOLDER` note is waiting for you to confirm it.

---

## 3. Recipes

Each recipe is one file in **`src/content/recipes/`**.

**To add a recipe:** copy an existing file (e.g. `blueberry-muffins.md`), give it
a new name ending in `.md` (that becomes its web address), and edit the fields
between the two `---` lines:

```yaml
---
title: My New Recipe
description: A short, tasty one-line description.
category: dessert        # breakfast | dessert | drinks | preserves | savory | family-favorites
prepTime: 15 min
cookTime: 30 min
servings: 8 servings
difficulty: Easy          # Easy | Medium | Advanced
featured: false           # true = show it in the "Featured" row up top
ingredients:
  - 1 cup this
  - 2 tablespoons that
instructions:
  - First do this.
  - Then do that.
notes:
  - A helpful tip or substitution.
---
```

Keep each ingredient/instruction on its own line starting with `  - `.
To **remove** a recipe, delete its file. To feature one, set `featured: true`.

**Recipe photos:** drop an image in `public/` and add `image: "/my-photo.jpg"`
and `imageAlt: "what's in the photo"` to the recipe's fields.

---

## 4. Photos in the Gallery

Open **`src/data/gallery.ts`**.

1. Put your photo file into the **`public/gallery/`** folder (create it if
   needed). Use web-friendly, reasonably sized JPGs (roughly 1600px wide is
   plenty).
2. Add or edit an entry:
   ```js
   { src: "/gallery/sunrise.jpg", alt: "Sunrise over the blueberry rows",
     caption: "First light on the mountain.", category: "landscapes", ratio: "16 / 9" },
   ```
- **`alt`** describes the photo for people using screen readers — always fill it in.
- **`category`** must be one of the names listed at the top of that file.
- Leaving `src: ""` shows a styled placeholder tile instead of a photo.

---

## 5. "Around Us" recommendations

Open **`src/data/around.ts`** and edit the lists. Each place looks like:

```js
{ name: "Café Adam", town: "Great Barrington",
  description: "Farm-to-table American restaurant.",
  url: "https://www.cafeadam.org" },
```

Add a `note: "Confirm current hours"` to flag anything to double-check. You can
also edit the suggested **itineraries** near the bottom of the file.

---

## 6. About / farm history

Open **`src/pages/about.astro`** and find the `milestones` list near the top.
Add, edit, or reorder entries — each has a `year`, `title`, and `body`. Set
`verified: true` once a detail is confirmed (that hides the "Placeholder" tag).

---

## 7. Turning on visitor analytics (optional)

If you'd like simple, privacy-friendly visit counts (no cookies, no tracking of
individuals), sign up at [plausible.io](https://plausible.io), then in
`src/data/farm.ts` set:

```js
analytics: { plausibleDomain: "blueberryhillfarm.com" },
```

Leave it as `""` to keep analytics off.

---

## If something breaks

- On GitHub, open the **Actions** tab — a red ✗ means the last change had a typo
  (usually a missing quote or comma). Click it to see the error, or just undo
  your last commit (**History → Revert**). The previous version stays live.
- When in doubt, change one small thing at a time.
