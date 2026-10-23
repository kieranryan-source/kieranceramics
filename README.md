# kieranceramics.com

Kieran Ryan's ceramics site. Built with [Astro](https://astro.build), hosted free on Cloudflare Workers (static assets), checkout through Stripe Payment Links.

Every push to `main` rebuilds and publishes the site.

## Add a piece

1. Put the photo in `src/content/work/`, for example `blue-vase.jpg`.
2. Create `src/content/work/blue-vase.md` next to it:

```md
---
title: Blue vase
year: 2026
process: Crystalline glaze on porcelain
dimensions: 21 x 12 cm
image: ./blue-vase.jpg
imageAlt: Tall porcelain vase with pale blue crystals on a cobalt ground
featured: true      # show on the homepage (the first four featured pieces appear)
order: 1            # lower numbers come first
shop:               # leave this whole block out if the piece isn't for sale
  status: available # or: sold
  price: 340
  paymentLink: https://buy.stripe.com/...
---

A few sentences about the piece, the firing, and care.
```

The file name becomes the address: `blue-vase.md` is `/work/blue-vase/`.

Photos keep their own shape unless you add `aspect: 4 / 5` (or similar) to crop them.

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

## Change site details

`src/site.config.ts` holds the name, Instagram, public email (empty means hidden) and the nav. Workshops are in `src/data/workshops.json`.

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
- Node version comes from `.node-version`
