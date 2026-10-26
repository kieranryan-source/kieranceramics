// The list of pages search engines should know about, at /sitemap.xml.
// Plain pages are found automatically; pieces and categories come from the content.
import type { APIRoute } from 'astro';
import { allWork } from '../lib/work';
import { categories, categoryHref } from '../lib/categories';
import { site } from '../site.config';

const pageFiles = Object.keys(import.meta.glob('./**/*.astro'));

export const GET: APIRoute = async () => {
  const work = await allWork();
  const pages = pageFiles
    .filter((f) => !f.includes('[') && !f.endsWith('/404.astro'))
    .map((f) => f.replace(/^\.\//, '/').replace(/index\.astro$/, '').replace(/\.astro$/, '/'));
  const paths = [
    ...pages,
    ...categories.filter((c) => work.some((p) => p.data.categories.includes(c.id))).map((c) => categoryHref(c.id)),
    ...work.map((p) => `/work/${p.id}/`),
  ];
  const urls = [...new Set(paths)].sort().map((path) => `  <url><loc>${new URL(path, site.url).href}</loc></url>`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
