import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * RECIPES content collection.
 *
 * Each recipe is one Markdown file in src/content/recipes/. To add a recipe,
 * copy an existing file, rename it, and edit the fields between the "---" lines.
 * See CONTENT-GUIDE.md for a friendly walkthrough.
 */
const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "breakfast",
      "dessert",
      "drinks",
      "preserves",
      "savory",
      "family-favorites",
    ]),
    prepTime: z.string(), // e.g. "15 min"
    cookTime: z.string().optional(), // e.g. "25 min"
    totalTime: z.string().optional(),
    servings: z.string(), // e.g. "12 muffins"
    difficulty: z.enum(["Easy", "Medium", "Advanced"]).default("Easy"),
    featured: z.boolean().default(false),
    ingredients: z.array(z.string()),
    instructions: z.array(z.string()),
    notes: z.array(z.string()).default([]),
    // Optional real photo (drop a file in src/content/recipes/ or public/).
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { recipes };
