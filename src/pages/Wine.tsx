import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function Wine() {
  const { t } = useLanguage();
  const w = t.wine;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Wine Store"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="section-label text-cream-200/60 mb-4">{w.hero.eyebrow}</p>
          <h1 className="font-serif font-light text-cream-50 leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            {w.hero.title}
          </h1>
          <p className="font-sans font-light text-cream-200/70 text-lg">{w.hero.subtitle}</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-center">
            <ScrollReveal direction="left">
              <p className="section-label mb-4">{w.intro.label}</p>
              <span className="block w-12 h-px bg-stone-300 mb-6" />
              <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                {w.intro.title}
              </h2>
              <p className="font-sans font-light text-stone-600 text-lg leading-[1.75] mb-4">{w.intro.text}</p>
              <p className="font-sans font-light text-stone-500 text-base leading-[1.8]">{w.intro.text2}</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <div className="image-scale aspect-[3/4] rounded-sm overflow-hidden max-w-sm ml-auto">
                <img
                  src="https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Wine bottles"
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-stone-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="section-label text-stone-500 mb-4">{w.regions.label}</p>
            <span className="block w-12 h-px bg-stone-700 mb-6" />
            <h2 className="font-serif font-light text-cream-50 leading-[1.12] mb-14"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              {w.regions.title}
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
            {w.regions.items.map((region, i) => (
              <ScrollReveal key={region.name} delay={i * 80}>
                <div className="border-t border-stone-800 py-8">
                  <p className="text-xs font-sans tracking-[0.18em] uppercase text-terracotta-400 mb-3">0{i + 1}</p>
                  <h3 className="font-serif text-2xl font-light text-cream-100 mb-3">{region.name}</h3>
                  <p className="text-sm font-sans font-light text-stone-400 leading-[1.7]">{region.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* By glass + Take home */}
      <section className="bg-cream-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div className="image-scale aspect-[4/3] rounded-sm overflow-hidden mb-8">
                <img
                  src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Wine by the glass"
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
              <p className="section-label mb-3">{w.byGlass.label}</p>
              <h3 className="font-serif text-2xl font-light text-stone-900 mb-4">{w.byGlass.title}</h3>
              <p className="font-sans font-light text-stone-500 text-base leading-[1.75]">{w.byGlass.text}</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <div className="image-scale aspect-[4/3] rounded-sm overflow-hidden mb-8">
                <img
                  src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Wine to take home"
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
              <p className="section-label mb-3">{w.takeHome.label}</p>
              <h3 className="font-serif text-2xl font-light text-stone-900 mb-4">{w.takeHome.title}</h3>
              <p className="font-sans font-light text-stone-500 text-base leading-[1.75]">{w.takeHome.text}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA to events */}
      <section className="bg-cream-50 py-16 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-light text-stone-900 mb-1">{t.nav.events}</p>
            <p className="text-sm font-sans text-stone-500">Vinaftener & smagninger</p>
          </div>
          <Link to="/events" className="btn-outline">{t.nav.events}</Link>
        </div>
      </section>
    </div>
  );
}
