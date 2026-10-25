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

  // Mailing list. The sign-up form appears on the homepage, the Shop and in the footer once
  // provider and id are filled in, and stays hidden while they're empty.
  //  - Kit (kit.com):        provider 'kit', id = the form's number from its embed code
  //  - Buttondown:           provider 'buttondown', id = your Buttondown username
  newsletter: {
    provider: '' as '' | 'kit' | 'buttondown',
    id: '',
    title: 'Mailing list',
    text: 'An occasional email when new work is ready, before it goes up anywhere else.',
  },

  // An optional one-line note at the top of the homepage and the Shop, e.g. for a drop.
  // Leave it empty to show nothing.
  announcement: '',

  // The menu, in order. Items marked footerOnly appear in the footer but not the top menu.
  nav: [
    { label: 'Work', href: '/work/' },
    { label: 'Shop', href: '/shop/' },
    { label: 'Commissions', href: '/commissions/' },
    { label: 'Workshops', href: '/workshops/' },
    { label: 'Exhibitions', href: '/exhibitions/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Shipping, care and returns', href: '/shop-information/', footerOnly: true },
  ],
};
