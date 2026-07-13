import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function Yoga() {
  const { t } = useLanguage();
  const y = t.yoga;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] flex items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Morning yoga"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-stone-950/45" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-2xl">
            <p className="section-label text-cream-200/60 mb-4">{y.hero.eyebrow}</p>
            <h1 className="font-serif font-light text-cream-50 leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
            >
              {y.hero.title}
            </h1>
            <p className="font-sans font-light text-cream-100/75 text-xl leading-[1.65]">{y.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-cream-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-start">
            <ScrollReveal direction="left">
              <p className="section-label mb-4">{y.details.label}</p>
              <span className="block w-12 h-px bg-stone-300 mb-6" />
              <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
              >
                {y.details.title}
              </h2>
              <p className="font-sans font-light text-stone-600 text-lg leading-[1.75] mb-4">{y.details.text}</p>
              <p className="font-sans font-light text-stone-500 text-base leading-[1.8] mb-10">{y.details.text2}</p>

              {/* Practical info grid */}
              <div className="grid grid-cols-2 gap-4">
                {y.details.items.map((item) => (
                  <div key={item.label} className="bg-cream-100 rounded-sm p-4">
                    <p className="text-[10px] font-sans tracking-[0.18em] uppercase text-stone-400 mb-1">{item.label}</p>
                    <p className="font-serif text-lg font-light text-stone-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal direction="right" delay={80}>
                <div className="image-scale aspect-[3/4] rounded-sm overflow-hidden mb-8 relative">
                  <img
                    src="https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Yoga on terrace"
                    className="editorial-image"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-sage-400/10" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <div className="bg-sage-100 rounded-sm p-6">
                  <h3 className="font-serif text-lg font-light text-stone-900 mb-4">{y.details.bringTitle}</h3>
                  <ul className="space-y-2">
                    {y.details.bringItems.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-sans font-light text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-cream-50 mb-4">{y.cta.title}</h2>
                <p className="font-sans font-light text-stone-400 text-base leading-[1.75] mb-6">{y.cta.text}</p>
              </div>
              <div className="md:text-right">
                <a href={`mailto:${y.cta.email}`} className="btn-light inline-flex">
                  {y.cta.cta}
                </a>
                <p className="text-xs font-sans text-stone-600 mt-3">{y.cta.email}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
