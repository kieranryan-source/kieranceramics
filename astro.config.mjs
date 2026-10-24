// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.kieranceramics.com',
  trailingSlash: 'always',
  // Keep the spaces between words and links that sit on separate lines in the page files.
  // With compression on, "on <a>Instagram</a>\n first" loses the space and reads "Instagramfirst".
  compressHTML: false,
});
