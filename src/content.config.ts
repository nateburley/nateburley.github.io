import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The blog ("field notes"). Each post is a Markdown file in src/content/blog/.
// The frontmatter at the top of every post must match this schema.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
