import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const cards = [
  {
    key: 'boutique' as const,
    path: '/boutique',
    image: '/images/IMG_5273.jpg',
    logoOnly: false,
  },
  {
    key: 'salumeria' as const,
    path: '/salumeria',
    image: '/images/logos/IMG_5106.jpg',
    logoOnly: false,
  },
  {
    key: 'deliMenu' as const,
    path: '/deli',
    image: '/images/Prosciutto-di-Parma-Focaccia-Sandwich.png',
    logoOnly: false,
  },
];

export default function Home() {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(id);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Screenshot_2026-07-10_at_11.56.11.png"
            alt="Plus Eins"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <div
            className="max-w-xl"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s, transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
            }}
          >
          </div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="bg-cream-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card, i) => {
              const label = t.home.cards[card.key];
              return (
                <ScrollReveal key={card.key} delay={i * 70}>
                  <Link to={card.path} className="group block">
                    <div className="relative image-scale aspect-[4/3] overflow-hidden rounded-sm mb-4">
                      {card.logoOnly ? (
                        <div className="w-full h-full bg-[#FAF8F4] flex items-center justify-center">
                          <img
                            src={card.image}
                            alt={label.title}
                            className="w-[50%] h-[50%] object-contain"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <>
                          <img
                            src={card.image}
                            alt={label.title}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/20 transition-colors duration-400" />
                          <div className="absolute bottom-5 left-5">
                            <h3 className="font-serif text-xl font-light text-cream-50 leading-tight">
                              {label.title}
                            </h3>
                          </div>
                        </>
                      )}
                    </div>
                    <p className="text-sm font-sans font-light text-stone-500 leading-[1.65] group-hover:text-stone-700 transition-colors">
                      {label.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-3 text-[11px] font-sans tracking-[0.14em] uppercase text-stone-400 group-hover:text-stone-700 transition-colors">
                      <span className="w-5 h-px bg-current transition-all duration-300 group-hover:w-8" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visit teaser */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/IMG_8158.JPG"
            alt="Plus Eins Rørvig"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-950/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal direction="none">
            <div className="max-w-xl">
              <p className="section-label text-cream-200/60 mb-4">{t.home.visitTeaser.label}</p>
              <h2 className="font-serif font-light text-cream-50 leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
              >
                {t.home.visitTeaser.title}
              </h2>
              <p className="font-sans font-light text-cream-100/70 text-lg leading-[1.7] mb-8">
                {t.home.visitTeaser.text}
              </p>
              <Link to="/visit" className="btn-light">
                {t.home.visitTeaser.cta}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
