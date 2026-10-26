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
categories: [crystalline]   # one or more of: crystalline, standard-glazes, 3d-printed
dimensions: 21 x 12 cm
image: ../../assets/photos/blue-vase.jpg
imageAlt: Tall porcelain vase with pale blue crystals on a cobalt ground
thumbnail: ../../assets/photos/blue-vase-square.jpg   # optional: a square version for the galleries
morePhotos:         # optional: more photos for the piece's own page, laid out across the page under it
  - image: ../../assets/photos/blue-vase-detail.jpg
    alt: Close-up of the crystals near the rim
  - image: ../../assets/photos/blue-vase-back.jpg
video:              # optional: a short silent clip, shown under the photos
  src: /video/blue-vase.mp4
  webm: /video/blue-vase.webm
  poster: /video/blue-vase.jpg
  caption: The vase just out of the kiln
featured: true      # show on the homepage (the first four featured pieces appear)
order: 1            # lower numbers come first
hidden: true        # optional: keep it off the site entirely until you remove this line
shop:               # leave this whole block out unless it's for sale or already sold
  status: available # or: sold
  price: 340
  paymentLink: https://buy.stripe.com/...
---

A few sentences about the piece, the firing, and care.
```

The file name becomes the address: `blue-vase.md` is `/work/blue-vase/`.

`categories` sorts the piece on the Work page, where visitors can filter by kind of work. Each category has its own page, like `/work/category/crystalline/`, and a category only shows once it has a piece in it. To rename a category or add a new one, edit `src/lib/categories.ts`.

Extra photos under `morePhotos` go across the page below the main photo and text: the first one large, then the rest in pairs (cropped to 3:2 so each pair lines up). An odd one out at the end goes large too. Landscape shots work best.

A `video` plays on its own, silently and on a loop, below the photos (people who ask their device for less motion get a play button instead). Keep clips short and put the files in `public/video/`. To shrink a phone clip to about 1.5 MB:

```sh
ffmpeg -i clip.MOV -an -vf scale=720:-2 -c:v libx264 -crf 28 -preset slow -movflags +faststart public/video/blue-vase.mp4
ffmpeg -i public/video/blue-vase.mp4 -c:v libvpx-vp9 -b:v 0 -crf 38 public/video/blue-vase.webm
ffmpeg -ss 0.3 -i public/video/blue-vase.mp4 -frames:v 1 public/video/blue-vase.jpg
```

On the piece's own page the main photo keeps its shape (add `aspect: 4 / 5` or similar to crop it). In the galleries every photo is cropped square, three to a row, so keep the piece centered in the shot. If a tall piece gets cut off, add a square `thumbnail` with room around the whole piece; the piece's own page still uses the main photo.

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

## Get ready for a drop

1. Add the new pieces as usual, each with `hidden: true`. They build but appear nowhere: not in the galleries, the shop, or at their own address.
2. On the day, delete the `hidden: true` lines (and add the Stripe links).
3. If you want a line at the top of the homepage and the Shop, set `announcement` in `src/site.config.ts`, and clear it again afterwards.

## Mailing list

The sign-up form shows on the homepage, the Shop and in the footer once `newsletter` in `src/site.config.ts` has a `provider` and `id`. With either empty, no form appears.

- Kit (kit.com): `provider: 'kit'`, and `id` is the form's number from its embed code.
- Buttondown: `provider: 'buttondown'`, and `id` is your Buttondown username.

The heading and the line of text above the form are set there too.

## Change the look

All colors, fonts, sizes and spacing live in `src/styles/theme.css`. Change the values there and the whole site follows. Layout and components are in `src/styles/global.css` and only use those values.

The font is Work Sans, used light throughout. It's free and served from the site itself, installed as an npm package and imported at the top of `src/layouts/Base.astro`.

## Change site details

`src/site.config.ts` holds the name, the line under it in the header, the homepage photo, your portrait, Instagram, public email (empty means hidden) and the menu. Workshops are in `src/data/workshops.json` and exhibitions in `src/data/exhibitions.json`.

## Add your portrait

Put the photo in `src/assets/photos/`, for example `kieran.jpg`, and set `portrait.image` in `src/site.config.ts` to `'kieran.jpg'`. It shows on the homepage and the Bio page, cropped to 4:5 (portrait shape). Until then a grey placeholder holds its place.

## Gallery

The Gallery page shows process shots, details and studio moments, from `src/data/gallery.json`, in the order listed. Each entry names a photo in `src/assets/photos/` and a description for screen readers. The photos show without captions; add `"caption": "..."` to an entry if one ever needs a line of text under it.

```json
{ "image": "studio-carving.jpg", "alt": "Hands carving rings into a plate on the wheel" }
```

Photos keep their own shape, so tall and wide shots can be mixed.

## Exhibitions and press

Shows and markets are in `src/data/exhibitions.json`, newest first by `order`. Press goes in `src/data/press.json`; the Press section on the Exhibitions page appears once there's at least one entry:

```json
[
  {
    "title": "Growing crystals in East Hampton",
    "publication": "The East Hampton Star",
    "when": "March 2027",
    "url": "https://...",
    "order": 1
  }
]
```

## Drafts to finish

One "Draft:" note is left, where only you know the answer: the Mudita class description in `src/data/workshops.json`. Search the code for `Draft:` to find them all.

When shipping opens again, update the Shipping section in `src/pages/shop-information.astro`.

## Analytics and search

**Visitor numbers (Cloudflare Web Analytics, free, no cookie banner needed):**

1. In the Cloudflare dashboard, open **Analytics & Logs > Web Analytics** and choose **Add a site**. Enter `www.kieranceramics.com`.
2. If Cloudflare offers to set it up automatically, accept and you're done: nothing on the site needs to change.
3. Otherwise it shows a short snippet with `"token": "..."`. Put that token in `cloudflareAnalytics` in `src/site.config.ts`.

Visits, top pages, where visitors came from and their countries then show under Web Analytics.

**Google search (Search Console, free):**

1. At search.google.com/search-console, add `www.kieranceramics.com` as a URL-prefix property.
2. Choose the **HTML tag** check and copy the code inside `content="..."` into `googleVerification` in `src/site.config.ts`. Once that's live, press **Verify**.
3. Under **Sitemaps**, submit `sitemap.xml`.

Search Console shows which searches bring people to the site and flags any page Google can't read.

**What the site already does for search engines:** each page has its own title and description (a piece uses the first paragraph of its text, so write that paragraph with care), `/sitemap.xml` lists every page and updates itself, and piece pages describe the piece in structured data (with its price when it's for sale). Photo descriptions (`imageAlt` and `alt`) also help pieces show up in image search.

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
