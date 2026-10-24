// Site-wide settings. Edit these instead of hunting through pages.

export const site = {
  name: 'Kieran Ryan',
  tagline: 'Crystalline Ceramics',   // the small line under the name in the header
  title: 'Kieran Ryan Ceramics',
  url: 'https://www.kieranceramics.com',
  description:
    'Crystalline-glazed porcelain and stoneware by Kieran Ryan, made in East Hampton, New York.',

  // The full-width photo at the top of the homepage.
  // `image` is a file name in src/assets/photos/. Close-ups of glaze crop best.
  hero: {
    image: 'crystals-closeup.jpg',
    alt: 'Close-up of pale gold zinc silicate crystals spreading across a glazed surface',
    title: 'Crystalline Ceramics',
    subtitle: 'Porcelain and stoneware, hand made in East Hampton, New York',
    button: { label: 'View the work', href: '/work/' },
  },

  // Your portrait, shown on the homepage and the About page.
  // Put the photo in src/assets/photos/ and write its file name here, e.g. 'kieran.jpg'.
  // While this is empty, a grey "Portrait" placeholder shows in its place.
  portrait: {
    image: 'kieran-portrait.jpg',
    alt: 'Kieran Ryan smiling, standing on a sandy bluff above the ocean',
  },

  // Leave email empty to hide it everywhere. Add the address you want public.
  email: '',
  instagram: {
    handle: '@kieran.ceramics',
    url: 'https://www.instagram.com/kieran.ceramics/',
  },

  location: 'East Hampton, New York',

  // The menu, in order. Shown in lowercase.
  nav: [
    { label: 'Work', href: '/work/' },
    { label: 'Shop', href: '/shop/' },
    { label: 'Shop information', href: '/shop-information/' },
    { label: 'Commissions', href: '/commissions/' },
    { label: 'Workshops', href: '/workshops/' },
    { label: 'Exhibitions', href: '/exhibitions/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
