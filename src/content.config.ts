import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const professional = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/professional' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.string(),
    lastUpdated: z.string().optional(),
    categories: z.array(z.string()),
    changelog: z.array(z.object({
      date: z.string(),
      note: z.string(),
    })).optional(),
    draft: z.boolean().default(false),
  }),
});

const personal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/personal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.string(),
    lastUpdated: z.string().optional(),
    categories: z.array(z.string()),
    changelog: z.array(z.object({
      date: z.string(),
      note: z.string(),
    })).optional(),
    draft: z.boolean().default(false),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { professional, personal, portfolio };
