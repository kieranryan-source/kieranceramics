// Helpers for search engines: short plain-text descriptions and structured data (schema.org).
import { site } from '../site.config';

// Clip text to about the length search results show, ending on a whole word.
export function clip(text: string, max = 158) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, clean.lastIndexOf(' ', max - 1)).replace(/[,;:.]$/, '') + '...';
}

// The first paragraph of a Markdown body as plain text.
export function firstParagraph(markdown = '') {
  const para = markdown.trim().split(/\n\s*\n/)[0] ?? '';
  return para
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`#>]/g, '')
    .trim();
}

export const absolute = (path: string) => new URL(path, site.url).href;

// Kieran, as a person and artist, shared by the homepage and the pieces.
export const person = {
  '@type': 'Person',
  '@id': `${site.url}/#kieran`,
  name: site.name,
  url: `${site.url}/`,
  jobTitle: 'Ceramic artist',
  knowsAbout: ['Crystalline glazes', 'Porcelain', 'Stoneware', 'Ceramics'],
  address: { '@type': 'PostalAddress', addressLocality: 'East Hampton', addressRegion: 'NY', addressCountry: 'US' },
  sameAs: [site.instagram.url],
};
