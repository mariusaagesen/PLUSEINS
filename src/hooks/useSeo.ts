import { useEffect } from 'react';

export interface SeoMeta {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object | object[];
}

const SITE_URL = 'https://pluseins.dk';

function ensureMetaTag(selector: string, attr: string, create: () => HTMLElement) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMetaContent(name: string, content: string, isProperty = false) {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  const el = ensureMetaTag(selector, 'content', () => {
    const m = document.createElement('meta');
    if (isProperty) m.setAttribute('property', name);
    else m.setAttribute('name', name);
    return m;
  });
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

function setJsonLd(id: string, data: object | object[]) {
  const scriptId = `jsonld-${id}`;
  let script = document.head.querySelector(`script[data-jsonld="${scriptId}"]`) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-jsonld', scriptId);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  const script = document.head.querySelector(`script[data-jsonld="jsonld-${id}"]`);
  if (script) script.remove();
}

export function useSeo(meta: SeoMeta) {
  useEffect(() => {
    document.title = meta.title;
    setMetaContent('description', meta.description);
    setCanonical(meta.canonicalUrl);

    const ogTitle = meta.ogTitle ?? meta.title;
    const ogDesc = meta.ogDescription ?? meta.description;
    const ogImage = meta.ogImage ? `${SITE_URL}${meta.ogImage}` : undefined;
    const ogType = meta.ogType ?? 'website';
    const ogUrl = meta.canonicalUrl;

    setMetaContent('og:title', ogTitle, true);
    setMetaContent('og:description', ogDesc, true);
    setMetaContent('og:url', ogUrl, true);
    setMetaContent('og:type', ogType, true);
    if (ogImage) setMetaContent('og:image', ogImage, true);

    setMetaContent('twitter:card', 'summary_large_image');
    setMetaContent('twitter:title', ogTitle);
    setMetaContent('twitter:description', ogDesc);
    if (ogImage) setMetaContent('twitter:image', ogImage);

    if (meta.jsonLd) {
      setJsonLd('page', meta.jsonLd);
    } else {
      removeJsonLd('page');
    }

    return () => {
      removeJsonLd('page');
    };
  }, [meta.title, meta.description, meta.canonicalUrl, meta.ogTitle, meta.ogDescription, meta.ogImage, meta.ogType, JSON.stringify(meta.jsonLd)]);
}

export { SITE_URL };
