# michaeltoh.sg

Portfolio site for Michael Toh, a photographer and Chinese calligraphy artist based in Singapore. Built with React, Vite and Tailwind, and hosted on GitHub Pages at https://michaeltoh.sg.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev        # http://localhost:5173
```

## Build and deploy

```sh
npm run build      # builds into dist/ and pre-renders every page
npm run preview    # check the built site locally
npm run deploy     # builds, then publishes dist/ to the gh-pages branch
```

`npm run build` does three things:

1. Builds the site with Vite.
2. Renders every page into its own HTML file (`dist/shop.html`, `dist/volume/landscapes.html`, …) so search engines see full content. GitHub Pages serves `shop.html` at `/shop`.
3. Writes `dist/sitemap.xml` (including every gallery photo, for Google Images) and `dist/404.html`.

After deploying, Google Search Console picks up new pages from https://michaeltoh.sg/sitemap.xml.

## Common edits

| What | Where |
| --- | --- |
| Photography volumes and calligraphy series | `src/data/portfolio.ts` |
| Events (move to "Past" automatically after `endDate`) | `src/data/events.ts` |
| Shop items | `src/data/shop.ts` |
| Page titles, Google descriptions and structured data | `src/seo.ts` |

New volumes, series, events and shop items are added to the sitemap and Google's structured data automatically. Give every photo a descriptive `alt` (what's in it and where), since that is what Google Images reads.

### Adding images

Shrink new photos before adding them. Large originals slow the site down a lot:

```sh
npm run optimize-images -- src/img/vol1/new-photo.jpg
```

This converts the file to `.webp` (max 2400px on the long edge) and deletes the original, so keep your master copy elsewhere. Then import the `.webp` file in the code.
