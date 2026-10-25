import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryIds } from './lib/categories';

// One Markdown file per piece in src/content/work/.
// The file name becomes the URL: crystalline-vase.md -> /work/crystalline-vase/
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number().int(),
      process: z.string(),                       // e.g. "Crystalline glaze on porcelain"
      categories: z.array(z.enum(categoryIds)).min(1), // see src/lib/categories.ts, e.g. [crystalline]
      dimensions: z.string().optional(),         // e.g. "21 x 12 cm"
      image: image().optional(),                 // put the photo next to the .md file
      imageAlt: z.string().optional(),
      thumbnail: image().optional(),             // a square version for the gallery tiles, when the main photo crops badly
      aspect: z.string().optional(),            // e.g. '4 / 5'. Crops the photo; leave out to use the photo's own shape
      // More photos for the piece's own page, shown under the main one (other angles, details, the inside)
      morePhotos: z
        .array(
          z.object({
            image: image(),
            alt: z.string().optional(),
          }),
        )
        .default([]),
      // A short silent clip for the piece's page. Put the .mp4 and a poster frame in public/video/
      video: z
        .object({
          src: z.string(),                       // e.g. /video/cobalt-bottle-kiln.mp4
          webm: z.string().optional(),           // same clip as .webm, for browsers that can't play the .mp4
          poster: z.string().optional(),         // e.g. /video/cobalt-bottle-kiln.jpg
          caption: z.string(),                   // also read out by screen readers
        })
        .optional(),
      featured: z.boolean().default(false),      // show on the homepage
      hidden: z.boolean().default(false),        // keep off the site entirely, e.g. pieces waiting for a drop
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
    hostUrl: z.url().optional(),               // the host's website
    hostInstagram: z
      .object({ handle: z.string(), url: z.url() })
      .optional(),
    summary: z.string(),
    schedule: z.string(),
    order: z.number().default(100),
  }),
});

// One entry per show in src/data/exhibitions.json, newest first by `order`.
const exhibitions = defineCollection({
  loader: file('./src/data/exhibitions.json'),
  schema: z.object({
    title: z.string(),                         // the show, or the venue if the show had no name
    place: z.string(),                         // venue and town
    when: z.string(),                          // e.g. "2025" or "June to August 2025"
    url: z.url().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { work, workshops, exhibitions };
