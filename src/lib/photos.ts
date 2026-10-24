// Looks up a photo in src/assets/photos/ by file name, so settings can name a photo
// as plain text (see `hero.image` in site.config.ts).
import type { ImageMetadata } from 'astro';

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export function photo(fileName: string): ImageMetadata;
export function photo(fileName: string, optional: true): ImageMetadata | undefined;
export function photo(fileName: string, optional = false): ImageMetadata | undefined {
  if (!fileName && optional) return undefined;
  const found = photos[`../assets/photos/${fileName}`];
  if (!found) throw new Error(`No photo called "${fileName}" in src/assets/photos/`);
  return found.default;
}
