// Site-wide settings. Edit these instead of hunting through pages.

export const site = {
  name: 'Kieran Ryan',
  tagline: 'Crystalline Ceramics',   // the small line under the name in the header
  title: 'Kieran Ryan Ceramics',
  // The homepage's title in search results and browser tabs. Around 60 characters shows in full.
  homeTitle: 'Kieran Ryan Ceramics | Crystalline Porcelain, East Hampton NY',
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

  // Your portrait, shown on the homepage and the Bio page.
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

  // Visitor statistics and search tools. See "Analytics and search" in the README.
  //  - cloudflareAnalytics: the token from Cloudflare Web Analytics (the long code after "token" in its snippet)
  //  - googleVerification: the code from Google Search Console's "HTML tag" option (the content="..." part)
  // Leave either empty to turn it off.
  cloudflareAnalytics: '',
  googleVerification: '',

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
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Shop', href: '/shop/' },
    { label: 'Commissions', href: '/commissions/' },
    { label: 'Workshops', href: '/workshops/' },
    { label: 'Exhibitions', href: '/exhibitions/' },
    { label: 'Bio', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Shipping, care and returns', href: '/shop-information/', footerOnly: true },
  ],
};
