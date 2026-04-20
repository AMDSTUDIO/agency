import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    img: z.string(),
    author: z.string().default('Admin'),
    excerpt: z.string().optional(),
  }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    img: z.string(),
    client: z.string().optional(),
    completionDate: z.date().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'portfolio': portfolioCollection,
};
