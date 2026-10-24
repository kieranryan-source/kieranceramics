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

  // Leave email empty to hide it everywhere. Add the address you want public.
  email: '',
  instagram: {
    handle: '@kieran.ceramics',
    url: 'https://www.instagram.com/kieran.ceramics/',
  },

  location: 'East Hampton, New York',

  nav: [
    { label: 'Work', href: '/work/' },
    { label: 'Shop', href: '/shop/' },
    { label: 'Workshops', href: '/workshops/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
