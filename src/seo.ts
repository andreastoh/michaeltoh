import { volumes, calligraphyWorks } from './data/portfolio';

export const SITE_URL = 'https://michaeltoh.sg';
export const SITE_NAME = 'Michael Toh';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

const HOME: PageMeta = {
  path: '/',
  title: 'Michael Toh | Photographer & Chinese Calligraphy Artist, Singapore',
  description:
    'Michael Toh is a Singapore-based photographer and Chinese calligraphy artist. Explore landscape, wildlife, portrait and event photography, calligraphy series, exhibitions and prints.',
};

const STATIC_PAGES: PageMeta[] = [
  HOME,
  {
    path: '/events',
    title: 'Exhibitions & Events | Michael Toh',
    description:
      'Upcoming and past exhibitions, calligraphy showcases and art events featuring Singapore photographer and calligrapher Michael Toh.',
  },
  {
    path: '/shop',
    title: 'Prints & Calligraphy for Sale | Michael Toh',
    description:
      'Acquire fine art photography prints and original Chinese calligraphy hanging scrolls by Michael Toh, Singapore.',
  },
  {
    path: '/thank-you',
    title: 'Thank You | Michael Toh',
    description: 'Thank you for getting in touch with Michael Toh.',
    noindex: true,
  },
];

/** Every page on the site, used for pre-rendering and the sitemap. */
export function getAllPages(): PageMeta[] {
  const volumePages = volumes.map((v) => ({
    path: `/volume/${v.id}`,
    title: `${v.title}: ${v.volumeNumber} Photography | Michael Toh`,
    description: v.description,
  }));
  const calligraphyPages = calligraphyWorks.map((c) => ({
    path: `/calligraphy/${c.id}`,
    title: `${c.title}: Calligraphy ${c.volumeNumber} | Michael Toh`,
    description: c.description,
  }));
  return [...STATIC_PAGES, ...volumePages, ...calligraphyPages];
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
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
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
  return tags.join('\n    ');
}
