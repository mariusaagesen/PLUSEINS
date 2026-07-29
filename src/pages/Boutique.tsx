import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const brands = [
  {
    name: 'Danefæ',
    logo: null,
  },
  {
    name: 'Nørgaard\npå Strøget',
    logo: '/images/norgaard.png',
  },
  {
    name: 'Rabens Saloner',
    logo: '/images/logos/Rabens-Saloner-logo.png',
  },
  {
    name: 'Shangies',
    logo: '/images/logos/Shangies-logo_sort_rentegnet.webp',
  },
  {
    name: 'Tomorrow',
    logo: '/images/logos/Tomorrow_POS.webp',
    forceBlack: true,
  },
  {
    name: 'Østerlandsk\nThehus',
    logo: '/images/logos/logo.svg',
  },
  {
    name: 'Bagsværd\nLakrids',
    logo: '/images/logos/bagsvaerd_lakrids_logo.svg',
  },
  {
    name: 'Baks Bakery',
    logo: '/images/logos/LOGO.webp',
  },
  {
    name: 'Bookbinders Design',
    logo: '/images/logos/companylogo2019.png',
    blendMultiply: true,
  },
  {
    name: 'Seamless Basic',
    logo: '/images/logos/Seamlessbasic.png',
    blendMultiply: true,
  },
  {
    name: 'Stone Soap Spa',
    logo: '/images/logos/stonesoapspa-logo-large-2.webp',
    blendMultiply: true,
  },
  {
    name: 'The Artisan Copenhagen',
    logo: '/images/logos/Version-CHP-small.png',
    blendMultiply: true,
  },
  {
    name: 'HABIBA',
    logo: '/images/logos/habiba.png',
    blendMultiply: true,
  },
];

export default function Boutique() {
  const { t } = useLanguage();

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
                {t.nav.boutique}
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={60}>
            <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src="/images/IMG_5273.webp"
                alt="Plus Eins Boutique"
                className="w-full h-full object-cover object-center"
                width={1920}
                height={1080}
                loading="eager"
                decoding="async"
                fetchpriority="high"
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
            {t.boutique.intro.text}
          </p>
        </ScrollReveal>
      </section>

      {/* Brands */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-0 pb-24 md:pb-32">
        <ScrollReveal direction="up">
          <p className="section-label mb-12">{t.boutique.brands.label}</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {brands.map((brand, i) => (
            <ScrollReveal key={brand.name} delay={i * 40}>
              <div className="flex items-center justify-center min-h-[80px] transition-opacity duration-300 ease-in-out hover:opacity-60 cursor-default">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name.replace('\n', ' ')}
                    className="w-full object-contain"
                    style={{
                      maxHeight: '72px',
                      maxWidth: '160px',
                      filter: brand.forceBlack ? 'brightness(0) saturate(0)' : undefined,
                      mixBlendMode: brand.blendMultiply ? 'multiply' : undefined,
                    }}
                    loading="lazy"
                  />
                ) : (
                  <p
                    className="font-serif font-light text-stone-800 text-center leading-[1.2] tracking-[0.06em] whitespace-pre-line"
                    style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)' }}
                  >
                    {brand.name}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
}
