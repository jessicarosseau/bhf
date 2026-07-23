/**
 * GALLERY images.
 *
 * To add a real photo:
 *   1. Put the image file in the `public/gallery/` folder.
 *   2. Add an entry below with its filename, a short caption, and descriptive
 *      alt text (what's in the photo, for screen-reader users).
 *   3. Leave `src` empty ("") to show a styled placeholder tile instead.
 *
 * `category` must be one of the keys in `galleryCategories` below.
 */
export const galleryCategories = {
  berries: "Berries",
  season: "Picking Season",
  landscapes: "Landscapes",
  history: "Farm History",
  family: "Family",
  community: "Community",
} as const;

export type GalleryCategory = keyof typeof galleryCategories;

export interface GalleryItem {
  src: string; // e.g. "/gallery/ripe-berries.jpg" — or "" for a placeholder
  alt: string;
  caption: string;
  category: GalleryCategory;
  ratio?: string; // "4 / 3" (default), "1 / 1", "3 / 4", "16 / 9"
}

/** Placeholder set — replace `src` values as real photos arrive. */
export const galleryItems: GalleryItem[] = [
  { src: "", alt: "Close-up of ripe blueberries on the bush", caption: "Ripe and ready — deep blue with a silvery bloom.", category: "berries", ratio: "4 / 3" },
  { src: "", alt: "A hand reaching into a blueberry bush", caption: "Roll the ripe ones gently off the stem.", category: "season", ratio: "3 / 4" },
  { src: "", alt: "View over the Berkshire hills from the farm", caption: "Three-state views from the top of the rows.", category: "landscapes", ratio: "16 / 9" },
  { src: "", alt: "Rows of blueberry bushes on the hillside", caption: "The rows climbing the mountain.", category: "landscapes", ratio: "4 / 3" },
  { src: "", alt: "A full bucket of freshly picked blueberries", caption: "A morning's pick, ready to weigh out.", category: "berries", ratio: "1 / 1" },
  { src: "", alt: "Family picking blueberries together", caption: "A summer tradition, passed down.", category: "family", ratio: "4 / 3" },
  { src: "", alt: "Historical photograph of the farm", caption: "The farm in an earlier season.", category: "history", ratio: "4 / 3" },
  { src: "", alt: "Children exploring the blueberry rows", caption: "Little pickers welcome.", category: "family", ratio: "3 / 4" },
  { src: "", alt: "Visitors chatting at the farm check-in", caption: "Neighbors and visitors at check-in.", category: "community", ratio: "4 / 3" },
  { src: "", alt: "Morning mist over the mountain field", caption: "Early mist before the gate opens.", category: "landscapes", ratio: "16 / 9" },
  { src: "", alt: "Blueberries in a wooden crate", caption: "Heirloom varieties you won't find in a store.", category: "berries", ratio: "1 / 1" },
  { src: "", alt: "Sunset behind the blueberry bushes", caption: "The last light over the rows.", category: "season", ratio: "4 / 3" },
];
