// Used only at build time to turn each page into static HTML (see scripts/prerender.mjs).
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';

export { getAllPages, getPageMeta, renderHeadTags, NOT_FOUND, SITE_URL } from './seo';

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>
  );
}
