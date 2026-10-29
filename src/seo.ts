import { volumes, calligraphyWorks, type Volume } from './data/portfolio';
import { events } from './data/events';
import { products } from './data/shop';
import mikeImg from './img/mike.webp';

export const SITE_URL = 'https://michaeltoh.sg';
export const SITE_NAME = 'Michael Toh';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type JsonLd = Record<string, unknown>;

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  /** Preview image for social shares. Defaults to the site-wide image. */
  image?: string;
  /** Every image on the page, listed in the sitemap so Google Images finds them. */
  images?: string[];
  /** Structured data that tells Google what the page is about. */
  jsonLd?: JsonLd[];
  noindex?: boolean;
}

/** Turns a built asset path like "/assets/x.webp" into a full URL. */
const abs = (url: string) => (url.startsWith('http') ? url : `${SITE_URL}${url}`);

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const PERSON: JsonLd = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Michael Toh',
  url: `${SITE_URL}/`,
  image: abs(mikeImg),
  jobTitle: 'Photographer & Chinese Calligraphy Artist',
  description:
    'Singapore-based photographer and Chinese calligraphy artist working in landscape, wildlife, portrait, event and sports photography.',
  address: { '@type': 'PostalAddress', addressLocality: 'Singapore', addressCountry: 'SG' },
  knowsAbout: [
    'Photography',
    'Landscape photography',
    'Wildlife photography',
    'Portrait photography',
    'Event photography',
    'Sports photography',
    'Chinese calligraphy',
    'Chinese ink painting',
  ],
  sameAs: [
    'https://www.facebook.com/MichaelTohPhotography/',
    'https://www.instagram.com/michael_jc_toh/',
    'https://www.flickr.com/photos/mikejctoh/',
    'https://www.linkedin.com/in/michaeltoh/',
    'https://www.shutterstock.com/g/michaeltohphotography',
  ],
};

const WEBSITE: JsonLd = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  alternateName: ['michaeltoh.sg', 'Michael Toh Photography'],
  url: `${SITE_URL}/`,
  inLanguage: 'en-SG',
  publisher: { '@id': PERSON_ID },
};

function breadcrumbs(items: { name: string; path: string }[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

const HOME: PageMeta = {
  path: '/',
  title: 'Michael Toh | Photographer & Chinese Calligraphy Artist, Singapore',
  description:
    'Michael Toh is a Singapore-based photographer and Chinese calligraphy artist. Explore landscape, wildlife, portrait and event photography, calligraphy series, exhibitions and prints.',
  images: [...volumes, ...calligraphyWorks].map((v) => abs(v.coverImage)),
  jsonLd: [
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: 'Michael Toh | Photographer & Chinese Calligraphy Artist, Singapore',
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': PERSON_ID },
    },
  ],
};

/** "S$5,000" → "5000" */
const priceNumber = (price: string) => price.replace(/[^0-9.]/g, '');

const EVENTS: PageMeta = {
  path: '/events',
  title: 'Exhibitions & Events | Michael Toh',
  description:
    'Upcoming and past exhibitions, calligraphy showcases and art events featuring Singapore photographer and calligrapher Michael Toh.',
  images: events.flatMap((e) => (e.image ? [abs(e.image)] : [])),
  jsonLd: [
    ...events.map((e) => {
      const [venue] = e.location.split(',');
      return {
        '@type': 'ExhibitionEvent',
        name: e.title,
        description: e.description,
        startDate: e.startDate,
        endDate: e.endDate,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: venue.trim(),
          address: {
            '@type': 'PostalAddress',
            name: e.location,
            addressLocality: 'Singapore',
            addressCountry: 'SG',
          },
        },
        image: e.image ? [abs(e.image)] : [OG_IMAGE],
        performer: { '@id': PERSON_ID },
        url: `${SITE_URL}/events`,
      };
    }),
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Exhibitions & Events', path: '/events' },
    ]),
  ],
};

const SHOP: PageMeta = {
  path: '/shop',
  title: 'Fine Art Prints & Chinese Calligraphy for Sale | Michael Toh',
  description:
    'Buy fine art photography prints and original Chinese calligraphy hanging scrolls by Singapore artist Michael Toh.',
  image: products[0] ? abs(products[0].image) : undefined,
  images: products.map((p) => abs(p.image)),
  jsonLd: [
    ...products.map((p) => ({
      '@type': 'Product',
      name: p.title,
      description: p.description,
      image: [abs(p.image)],
      category: p.type,
      brand: { '@type': 'Brand', name: SITE_NAME },
      offers: {
        '@type': 'Offer',
        price: priceNumber(p.price),
        priceCurrency: 'SGD',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/shop`,
        seller: { '@id': PERSON_ID },
      },
    })),
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Shop', path: '/shop' },
    ]),
  ],
};

const STATIC_PAGES: PageMeta[] = [
  HOME,
  EVENTS,
  SHOP,
  {
    path: '/thank-you',
    title: 'Thank You | Michael Toh',
    description: 'Thank you for getting in touch with Michael Toh.',
    noindex: true,
  },
];

function galleryPage(v: Volume, section: 'volume' | 'calligraphy'): PageMeta {
  const path = `/${section}/${v.id}`;
  const title = `${v.title}: ${v.genre} by Michael Toh`;
  const description = `${v.genre} by Singapore artist Michael Toh. ${v.description}`;
  const images = [v.coverImage, ...v.images.map((i) => i.url)].map(abs);
  return {
    path,
    title,
    description,
    image: abs(v.coverImage),
    images,
    jsonLd: [
      {
        '@type': 'ImageGallery',
        '@id': `${SITE_URL}${path}#gallery`,
        url: `${SITE_URL}${path}`,
        name: `${v.title} (${v.volumeNumber})`,
        description: v.description,
        genre: v.genre,
        dateCreated: v.year,
        isPartOf: { '@id': WEBSITE_ID },
        author: { '@id': PERSON_ID },
        primaryImageOfPage: abs(v.coverImage),
        image: [{ url: v.coverImage, alt: v.coverAlt }, ...v.images.map((i) => ({ url: i.url, alt: i.alt }))].map(
          (img) => ({
            '@type': 'ImageObject',
            contentUrl: abs(img.url),
            name: img.alt,
            description: img.alt,
            creator: { '@type': 'Person', name: 'Michael Toh', '@id': PERSON_ID },
            creditText: 'Michael Toh',
            copyrightNotice: `© Michael Toh`,
          })
        ),
      },
      breadcrumbs([
        { name: 'Home', path: '/' },
        {
          name: section === 'volume' ? 'Photography' : 'Calligraphy',
          path: section === 'volume' ? '/#photography' : '/#calligraphy',
        },
        { name: v.title, path },
      ]),
    ],
  };
}

/** Every page on the site, used for pre-rendering and the sitemap. */
export function getAllPages(): PageMeta[] {
  return [
    ...STATIC_PAGES,
    ...volumes.map((v) => galleryPage(v, 'volume')),
    ...calligraphyWorks.map((c) => galleryPage(c, 'calligraphy')),
  ];
}

export const NOT_FOUND: PageMeta = {
  path: '/404',
  title: 'Page Not Found | Michael Toh',
  description: 'The page you are looking for could not be found.',
  noindex: true,
};

export function getPageMeta(pathname: string): PageMeta {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return getAllPages().find((p) => p.path === clean) ?? NOT_FOUND;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** The structured data for a page, as one JSON-LD graph. */
export function pageJsonLd(meta: PageMeta): string {
  const graph = meta.noindex ? [] : [PERSON, WEBSITE, ...(meta.jsonLd ?? [])];
  // Escape "<" so text inside the data can never close the <script> tag.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

/** The <head> tags for a page, written into the pre-rendered HTML at build time. */
export function renderHeadTags(meta: PageMeta): string {
  const url = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;
  const image = meta.image ?? OG_IMAGE;
  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);
  const tags = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    meta.noindex
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${url}" />\n    <meta name="robots" content="max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_SG" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
  ];
  if (!meta.noindex) {
    tags.push(`<script type="application/ld+json">${pageJsonLd(meta)}</script>`);
  }
  return tags.join('\n    ');
}
