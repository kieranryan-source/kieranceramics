// Shared helpers for listing pieces.
import { getCollection } from 'astro:content';
import { categories, type CategoryId } from './categories';

export async function allWork() {
  return (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
}

export function countByCategory(work: Awaited<ReturnType<typeof allWork>>) {
  return Object.fromEntries(
    categories.map((c) => [c.id, work.filter((p) => p.data.categories.includes(c.id)).length]),
  ) as Record<CategoryId, number>;
}
