/** Recipe category labels & styling, shared by the cookbook index and cards. */
export const recipeCategories = {
  breakfast: { label: "Breakfast", tone: "sun" },
  dessert: { label: "Desserts", tone: "berry" },
  drinks: { label: "Drinks", tone: "sky" },
  preserves: { label: "Preserves", tone: "berry" },
  savory: { label: "Savory", tone: "leaf" },
  "family-favorites": { label: "Family Favorites", tone: "sun" },
} as const;

export type RecipeCategory = keyof typeof recipeCategories;

export const categoryOrder: RecipeCategory[] = [
  "breakfast",
  "dessert",
  "family-favorites",
  "drinks",
  "preserves",
  "savory",
];
