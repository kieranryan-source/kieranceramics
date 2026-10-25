// Shared helpers for listing pieces.
import { getCollection } from 'astro:content';
import { categories, type CategoryId } from './categories';

// Every piece that should appear on the site, in order. Pieces marked `hidden: true` are left out
// everywhere (galleries, the shop, their own page) until the flag is removed.
export async function allWork() {
  return (await getCollection('work', (p) => !p.data.hidden)).sort((a, b) => a.data.order - b.data.order);
}

export function countByCategory(work: Awaited<ReturnType<typeof allWork>>) {
  return Object.fromEntries(
    categories.map((c) => [c.id, work.filter((p) => p.data.categories.includes(c.id)).length]),
  ) as Record<CategoryId, number>;
}
