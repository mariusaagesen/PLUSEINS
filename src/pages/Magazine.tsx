import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';
import { magazineContent } from '../i18n/magazineContent';

export default function Magazine() {
  const { t, lang } = useLanguage();
  const m = magazineContent[lang];

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Masthead */}
      <header className="pt-40 pb-16 md:pt-52 md:pb-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal direction="up">
            <p className="section-label mb-4 text-center">Plus Eins</p>
            <h1
              className="font-serif font-light text-stone-900 text-center leading-[1.0]"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
            >
              Le Journal
            </h1>
            <p className="text-center font-sans font-light text-stone-400 text-sm tracking-[0.15em] uppercase mt-5">
              {t.magazine.seasonLabel}
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Lead images */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <ScrollReveal direction="up">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Focaccia"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3671147/pexels-photo-3671147.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mozzarella"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="aspect-[16/7] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt={m.articles[1].label}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Table of contents */}
      <section className="border-t border-b border-stone-200 py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-serif font-light text-stone-900 text-2xl mb-2">
                  {m.articles[0].title}
                </h2>
                <p className="font-sans font-light text-stone-500 text-sm leading-[1.8]">
                  {m.articles[0].body}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="flex flex-col gap-4 font-sans text-sm text-stone-500 font-light">
                {m.articles.map((a) => (
                  <p key={a.id} className="leading-[1.7]">{a.label}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature articles */}
      {m.features.map((feature, i) => {
        const isEven = i % 2 === 0;
        return (
          <section key={feature.title} className={`py-20 md:py-28 ${i % 2 !== 0 ? 'bg-stone-50' : 'bg-cream-50'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                <ScrollReveal direction={isEven ? 'left' : 'right'}>
                  <div className="flex flex-col gap-5">
                    {feature.subtitle && (
                      <p className="section-label">{feature.subtitle}</p>
                    )}
                    <span className="block w-10 h-px bg-stone-300" />
                    <h2 className="font-serif font-light text-stone-900 leading-[1.1]"
                      style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
                    >
                      {feature.title}
                    </h2>
                    {feature.body.map((para, j) => (
                      <p key={j} className="font-sans font-light text-stone-500 text-base leading-[1.85]">
                        {para}
                      </p>
                    ))}
                    {feature.quote && (
                      <blockquote className="border-l-2 border-stone-300 pl-5 mt-2">
                        <p className="font-serif font-light text-stone-600 text-lg leading-[1.6] italic">
                          {feature.quote}
                        </p>
                      </blockquote>
                    )}
                    {feature.pullquote && (
                      <p className="font-serif font-light text-stone-700 text-xl leading-[1.5] italic mt-2">
                        {feature.pullquote}
                      </p>
                    )}
                    {feature.callout && (
                      <div className="bg-stone-100 px-6 py-5 mt-2">
                        <p className="font-sans font-medium text-stone-800 text-sm tracking-wide mb-2">
                          {feature.callout.title}
                        </p>
                        <p className="font-sans font-light text-stone-500 text-sm leading-[1.75]">
                          {feature.callout.text}
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
                <ScrollReveal direction={isEven ? 'right' : 'left'} delay={80} className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Brands mentioned */}
      <section className="bg-cream-50 py-20 md:py-28 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal direction="up">
            <p className="section-label mb-8">{t.magazine.brandsLabel}</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {m.brands.map((brand, i) => (
              <ScrollReveal key={brand} delay={i * 40}>
                <div className="bg-cream-50 px-6 py-6">
                  <p className="font-serif font-light text-stone-800 text-lg">{brand}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-28 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal direction="none">
            <div className="max-w-xl mx-auto text-center">
              <p className="font-serif font-light text-stone-700 text-2xl md:text-3xl leading-[1.5] italic mb-8">
                {t.magazine.closingQuote}
              </p>
              <span className="block w-10 h-px bg-stone-300 mx-auto mb-6" />
              <p className="font-sans font-light text-stone-400 text-sm tracking-[0.14em] uppercase">
                Toldbodvej 45, 4582 Rørvig
              </p>
              <p className="font-sans font-light text-stone-400 text-sm mt-1">pluseins.dk</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
