import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function Showroom() {
  const { t } = useLanguage();

  return (
    <div className="bg-cream-50 min-h-screen">

      {/* Title left, image right — identical structure to DeliMenu */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-0">
        <div className="grid md:grid-cols-[5fr_12fr] gap-8 md:gap-16 items-center">

          <ScrollReveal direction="up">
            <div className="flex items-center justify-center">
              <h1
                className="font-serif font-light text-stone-900 leading-[1.02] text-center"
                style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}
              >
                {t.nav.showroom}
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={60}>
            <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src="/images/timeless-beauty-z0q1tc464b5t1s6.jpg"
                alt="Weisselberg Showroom — Plus Eins"
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

      {/* Body text */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-12 pb-24 md:pb-32">
        <ScrollReveal direction="up">
          <p className="font-sans font-light text-stone-500 text-lg leading-[1.8] max-w-2xl">
            {t.showroom.text}
          </p>
        </ScrollReveal>
      </section>

    </div>
  );
}
