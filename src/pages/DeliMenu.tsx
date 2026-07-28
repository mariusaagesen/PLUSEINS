import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';
import { useSeo, SITE_URL } from '../hooks/useSeo';

export default function DeliMenu() {
  const { t } = useLanguage();
  const d = t.deliMenu;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/deli#webpage`,
      url: `${SITE_URL}/deli`,
      name: d.meta.title,
      description: d.meta.description,
      isPartOf: { '@id': `${SITE_URL}/deli#business` },
      breadcrumb: { '@id': `${SITE_URL}/deli#breadcrumbs` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FoodEstablishment',
      '@id': `${SITE_URL}/deli#business`,
      name: 'Plus Eins Deli',
      alternateName: ['+1 Deli', 'Plus One Deli'],
      url: `${SITE_URL}/deli`,
      website: SITE_URL,
      telephone: '+45 40 20 28 26',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Toldbodvej 8',
        addressLocality: 'Rørvig',
        postalCode: '4581',
        addressCountry: 'DK',
      },
      image: [
        `${SITE_URL}/images/Prosciutto-di-Parma-Focaccia-Sandwich.png`,
        `${SITE_URL}/images/Logo.png`,
      ],
      logo: `${SITE_URL}/images/Logo.png`,
      hasMenu: { '@id': `${SITE_URL}/deli#menu` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Menu',
      '@id': `${SITE_URL}/deli#menu`,
      name: 'Plus Eins Deli Menu',
      url: `${SITE_URL}/deli`,
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: d.sections.focaccia,
          description: d.intro.text,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/deli#breadcrumbs`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: d.breadcrumbs.home,
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: d.breadcrumbs.current,
          item: `${SITE_URL}/deli`,
        },
      ],
    },
  ];

  useSeo({
    title: d.meta.title,
    description: d.meta.description,
    canonicalUrl: `${SITE_URL}/deli`,
    ogTitle: d.meta.ogTitle,
    ogDescription: d.meta.ogDescription,
    ogImage: '/images/Prosciutto-di-Parma-Focaccia-Sandwich.png',
    ogType: 'website',
    jsonLd,
  });

  return (
    <div className="bg-cream-50 min-h-screen">

      {/* Hero: heading left, photo right */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-0">
        <div className="grid md:grid-cols-[5fr_12fr] gap-8 md:gap-16 items-center">

          <ScrollReveal direction="up">
            <div className="flex items-center justify-center">
              <h1
                className="font-serif font-light text-stone-900 leading-[1.02] text-center"
                style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}
              >
                {t.nav.deliMenu}
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={60}>
            <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src="/images/Prosciutto-di-Parma-Focaccia-Sandwich.png"
                alt="Plus Eins Deli i Rørvig"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16 md:mt-20">
        <div className="w-full h-px bg-stone-200" />
      </div>

      {/* Intro */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-12 pb-16 md:pb-20">
        <ScrollReveal direction="up">
          <p className="font-sans font-light text-stone-500 text-lg leading-[1.8] max-w-2xl">
            {d.intro.text}
          </p>
        </ScrollReveal>
      </section>

      {/* Menu image + crawlable text */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-32 md:pb-40 flex justify-center">
        <ScrollReveal direction="up">
          <div className="w-full" style={{ maxWidth: '1000px' }}>
            <h2 className="font-serif font-bold text-stone-900 text-xl mb-8">
              {d.sections.menu}
            </h2>
            <div className="flex justify-center">
              <img
                src="/images/plus-eins-deli-menu-transparent.png"
                alt="Menu hos Plus Eins Deli"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
