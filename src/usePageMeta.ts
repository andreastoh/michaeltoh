import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMeta, OG_IMAGE, SITE_URL, pageJsonLd } from './seo';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

/**
 * Keeps the page title and meta tags in sync when visitors move between pages
 * without a full reload. Each page's first load already has the right tags
 * from the pre-rendered HTML.
 */
export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const url = `${SITE_URL}${meta.path}`;
    document.title = meta.title;
    setMeta('meta[name="description"]', 'name', 'description', meta.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:image"]', 'property', 'og:image', meta.image ?? OG_IMAGE);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical && !meta.noindex) canonical.href = url;

    const ld = document.head.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (ld) ld.textContent = pageJsonLd(meta);
  }, [pathname]);
}
