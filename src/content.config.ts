import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per piece in src/content/work/.
// The file name becomes the URL: crystalline-vase.md -> /work/crystalline-vase/
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number().int(),
      process: z.string(),                       // e.g. "Crystalline glaze on porcelain"
      dimensions: z.string().optional(),         // e.g. "21 x 12 cm"
      image: image().optional(),                 // put the photo next to the .md file
      imageAlt: z.string().optional(),
      aspect: z.string().optional(),            // e.g. '4 / 5'. Crops the photo; leave out to use the photo's own shape
      featured: z.boolean().default(false),      // show on the homepage
      order: z.number().default(100),            // lower numbers come first
      shop: z
        .object({
          status: z.enum(['available', 'sold']),
          price: z.number().optional(),          // in US dollars; leave out for "price on request"
          paymentLink: z.url().optional(),       // Stripe Payment Link for this piece
        })
        .optional(),
    }),
});

const workshops = defineCollection({
  loader: file('./src/data/workshops.json'),
  schema: z.object({
    title: z.string(),
    host: z.string(),
    hostUrl: z.url().optional(),
    summary: z.string(),
    schedule: z.string(),
    order: z.number().default(100),
  }),
});

export const collections = { work, workshops };
