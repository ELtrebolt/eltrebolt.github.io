import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    last_modified_at: z.preprocess((val) => (val === null || val === "" ? undefined : val), z.coerce.date().optional()),
    categories: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    last_modified_at: z.preprocess((val) => (val === null || val === "" ? undefined : val), z.coerce.date().optional()),
    excerpt: z.string().optional(),
    toc: z.boolean().optional(),
    header: z.object({
      teaser: z.string().optional(),
      overlay_image: z.string().optional(),
      actions: z.array(z.object({
        label: z.string(),
        url: z.string(),
      })).optional(),
    }).optional(),
    sidebar: z.array(z.object({
      title: z.string(),
      text: z.string(),
    })).optional(),
    skills: z.array(z.string()).optional(),
    github: z.union([
      z.string(),
      z.array(z.string()),
      z.array(z.object({
        label: z.string(),
        url: z.string()
      }))
    ]).optional(),
    url: z.string().optional(),
    years: z.string().optional(),
    priority: z.number().optional(),
  }),
});

const music = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    excerpt: z.string().optional(),
    author: z.string().optional(),
    toc: z.boolean().optional(),
    related: z.boolean().optional(),
    show_date: z.boolean().optional(),
    header: z.object({
      teaser: z.string().optional(),
      overlay_color: z.string().optional(),
      actions: z.array(z.object({
        label: z.string(),
        url: z.string(),
      })).optional(),
    }).optional(),
  }),
});

export const collections = { blog, projects, music };
