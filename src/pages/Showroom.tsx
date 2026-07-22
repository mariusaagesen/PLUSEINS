import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function Showroom() {
  const { t } = useLanguage();
  const s = t.showroom;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="/images/timeless-beauty-z0q1tc464b5t1s6.jpg"
          alt="Showroom"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/25 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <h1
            className="font-serif font-light text-cream-50 leading-[1.08]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)' }}
          >
            {t.nav.showroom}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-start">

            <ScrollReveal direction="left">
              <div className="image-scale aspect-[3/4] overflow-hidden">
                <img
                  src="/images/image.png"
                  alt={s.title}
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <span className="block w-12 h-px bg-stone-300 mb-6" />
              <h2
                className="font-serif font-light text-stone-900 leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                {s.title}
              </h2>
              <p className="font-sans font-light text-stone-600 text-lg leading-[1.75]">
                {s.text}
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
