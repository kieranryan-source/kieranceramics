// The staggered work grid repeats four slots: wide, narrow, narrow, wide.
// Wide slots crop photos to a landscape shape and narrow slots to a portrait shape,
// so the grid stays even whatever shape the original photos are.
// Put wide objects (bowls, sets) in wide slots by setting `order` in each piece's file.

const isWide = (i: number) => i % 4 === 0 || i % 4 === 3;

export const slotAspect = (i: number) => (isWide(i) ? '5 / 4' : '4 / 5');

export const slotSizes = (i: number) =>
  isWide(i) ? '(max-width: 760px) 100vw, 58vw' : '(max-width: 760px) 100vw, 42vw';
