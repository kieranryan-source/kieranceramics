# kieranceramics.com

Kieran Ryan's ceramics site. Built with [Astro](https://astro.build), hosted free on Cloudflare Workers (static assets), checkout through Stripe Payment Links.

Every push to `main` rebuilds and publishes the site.

## Add a piece

1. Put the photo in `src/assets/photos/`, for example `blue-vase.jpg`. Around 1800px on the long side is plenty.
2. Create `src/content/work/blue-vase.md`:

```md
---
title: Blue vase
year: 2026
process: Crystalline glaze on porcelain
dimensions: 21 x 12 cm
image: ../../assets/photos/blue-vase.jpg
imageAlt: Tall porcelain vase with pale blue crystals on a cobalt ground
morePhotos:         # optional: more photos for the piece's own page, laid out across the page under it
  - image: ../../assets/photos/blue-vase-detail.jpg
    alt: Close-up of the crystals near the rim
  - image: ../../assets/photos/blue-vase-back.jpg
featured: true      # show on the homepage (the first four featured pieces appear)
order: 1            # lower numbers come first
shop:               # leave this whole block out unless it's for sale or already sold
  status: available # or: sold
  price: 340
  paymentLink: https://buy.stripe.com/...
---

A few sentences about the piece, the firing, and care.
```

The file name becomes the address: `blue-vase.md` is `/work/blue-vase/`.

Extra photos under `morePhotos` go across the page below the main photo and text: the first one large, then the rest in pairs (cropped to 3:2 so each pair lines up). An odd one out at the end goes large too. Landscape shots work best.

On the piece's own page the main photo keeps its shape (add `aspect: 4 / 5` or similar to crop it). In the galleries every photo is cropped square, three to a row, so keep the piece centered in the shot.

The homepage shows six pieces: the `featured` ones first, then the rest in `order`.

The full-width photo at the top of the homepage, and its title, line and button, are set by `hero` in `src/site.config.ts`.

## Sell a piece

1. In Stripe, create a Payment Link for the piece. Turn on **Limit the number of payments** and set it to 1, so a one-of-a-kind piece can't sell twice. Turn on shipping address collection and add your shipping rates.
2. Paste the link into the piece's `paymentLink`.
3. When it sells, change `status: available` to `status: sold`.

How the button behaves:

| Piece setup | Button |
| --- | --- |
| `status: available` with a `paymentLink` | **Buy**, opens Stripe checkout |
| `status: available`, no link yet | **Ask about this piece**, goes to the contact page |
| `status: sold` | **Sold** |

## Change the look

All colors, fonts, sizes and spacing live in `src/styles/theme.css`. Change the values there and the whole site follows. Layout and components are in `src/styles/global.css` and only use those values.

The font is Work Sans, used light throughout. It's free and served from the site itself, installed as an npm package and imported at the top of `src/layouts/Base.astro`.

## Change site details

`src/site.config.ts` holds the name, the line under it in the header, the homepage photo, your portrait, Instagram, public email (empty means hidden) and the menu. Workshops are in `src/data/workshops.json` and exhibitions in `src/data/exhibitions.json`.

## Add your portrait

Put the photo in `src/assets/photos/`, for example `kieran.jpg`, and set `portrait.image` in `src/site.config.ts` to `'kieran.jpg'`. It shows on the homepage and the About page, cropped to 4:5 (portrait shape). Until then a grey placeholder holds its place.

## Drafts to finish

Some pages have grey italic "Draft:" notes where only you know the answer: timing and price on Commissions, the show details and press on Exhibitions, and the Mudita class description in `src/data/workshops.json`. Search the code for `Draft:` to find them all.

When shipping opens again, update the Shipping section in `src/pages/shop-information.astro`.

## Work on it locally

Needs Node 24 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Cloudflare settings

The Cloudflare Worker `kieranceramics` is connected to this repo.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (reads `wrangler.jsonc`, which serves `dist/`)
- Pull requests get a preview build, deployed with `npx wrangler preview`. That needs the `previews` block in `wrangler.jsonc`, so keep it there.
- Node version comes from `.node-version`
