import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function Cafe() {
  const { t } = useLanguage();
  const c = t.cafe;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Café Salamanca"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="section-label text-cream-200/60 mb-4">{c.hero.eyebrow}</p>
          <h1 className="font-serif font-light text-cream-50 leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            {c.hero.title}
          </h1>
          <p className="font-sans font-light text-cream-200/70 text-lg">{c.hero.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-center">
            <ScrollReveal direction="left">
              <p className="section-label mb-4">{c.intro.label}</p>
              <span className="block w-12 h-px bg-stone-300 mb-6" />
              <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                {c.intro.title}
              </h2>
              <p className="font-sans font-light text-stone-600 text-lg leading-[1.75] mb-4">{c.intro.text}</p>
              <p className="font-sans font-light text-stone-500 text-base leading-[1.8]">{c.intro.text2}</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <div className="grid grid-cols-2 gap-3">
                <div className="image-scale aspect-[3/4] rounded-sm overflow-hidden">
                  <img src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Coffee" className="editorial-image" loading="lazy" />
                </div>
                <div className="space-y-3 mt-8">
                  <div className="image-scale aspect-square rounded-sm overflow-hidden">
                    <img src="https://images.pexels.com/photos/3952078/pexels-photo-3952078.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Café details" className="editorial-image" loading="lazy" />
                  </div>
                  <div className="image-scale aspect-[4/3] rounded-sm overflow-hidden">
                    <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Pastries" className="editorial-image" loading="lazy" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-cream-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="section-label mb-4">{c.menu.label}</p>
            <span className="block w-12 h-px bg-stone-300 mb-6" />
            <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-14"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              {c.menu.title}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {c.menu.items.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 60}>
                <div className="flex gap-5 py-6 border-b border-stone-200">
                  <span className="font-serif text-2xl font-light text-stone-300 flex-shrink-0 w-8 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-light text-stone-900 mb-1">{item.name}</h3>
                    <p className="text-sm font-sans font-light text-stone-500">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Terrace */}
      <section className="bg-cream-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-center">
            <ScrollReveal direction="left">
              <div className="image-scale aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Terrasse"
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <p className="section-label mb-4">{c.terrace.label}</p>
              <span className="block w-12 h-px bg-stone-300 mb-6" />
              <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                {c.terrace.title}
              </h2>
              <p className="font-sans font-light text-stone-500 text-lg leading-[1.75] mb-8">{c.terrace.text}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Opening hours */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="section-label text-stone-500 mb-4">{c.hours.label}</p>
              <div className="space-y-4 mt-6">
                {c.hours.items.map((h) => (
                  <div key={h.days} className="flex justify-between border-b border-stone-800 pb-4">
                    <span className="text-sm font-sans text-stone-400">{h.days}</span>
                    <span className="text-sm font-sans text-cream-100">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs font-sans text-stone-600 mt-4">{c.hours.note}</p>
            </ScrollReveal>
            <ScrollReveal delay={100} direction="right">
              <blockquote className="font-serif text-2xl md:text-3xl font-light text-cream-100 italic leading-relaxed">
                "Kaffe er bedst, når der ikke er noget, man hellere vil."
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-100 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl font-light text-stone-900 mb-1">Plus Eins · Rørvig</p>
            <p className="text-sm font-sans text-stone-500">Nørrevej 14, 4581 Rørvig</p>
          </div>
          <Link to="/visit" className="btn-primary">{t.nav.visit}</Link>
        </div>
      </section>
    </div>
  );
}
