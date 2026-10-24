// The kinds of work, used to sort the Work page. Each piece lists one or more of these ids
// under `categories` in its file in src/content/work/. Each category gets its own page,
// e.g. /work/category/crystalline/. Change a label here and it changes everywhere.

export const categories = [
  { id: 'crystalline', label: 'Crystalline', description: 'Porcelain and stoneware finished in crystalline glaze, with zinc silicate crystals grown in the kiln.' },
  { id: 'standard-glazes', label: 'Standard glazes', description: 'Pierced bowls and platters, black porcelain, and pieces in glazes other than crystalline.' },
  { id: '3d-printed', label: '3D printed', description: 'Pieces printed in clay, layer by layer, on a ceramic 3D printer.' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];
export const categoryIds = categories.map((c) => c.id) as [CategoryId, ...CategoryId[]];
export const categoryHref = (id: CategoryId) => `/work/category/${id}/`;
