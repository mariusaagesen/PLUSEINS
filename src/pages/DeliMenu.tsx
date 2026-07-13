import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function DeliMenu() {
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
                {t.nav.deliMenu}
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={60}>
            <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src="/images/Prosciutto-di-Parma-Focaccia-Sandwich.png"
                alt="Deli — Plus Eins"
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
            {t.deliMenu.intro.text}
          </p>
        </ScrollReveal>
      </section>

      {/* Menu image */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-32 md:pb-40 flex justify-center">
        <img
          src="/images/Screenshot_2026-07-10_at_14.59.31.png"
          alt="Deli menu"
          style={{ width: '100%', height: 'auto', objectFit: 'contain', maxWidth: '1000px' }}
          loading="lazy"
        />
      </section>

    </div>
  );
}
