import { useState } from 'react';
import { Music, Wine, Leaf, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const icons = [Wine, Music, Leaf, Users];

export default function Events() {
  const { t } = useLanguage();
  const e = t.events;
  const [email, setEmail] = useState('');

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Events"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="section-label text-cream-200/60 mb-4">{e.hero.eyebrow}</p>
          <h1 className="font-serif font-light text-cream-50 leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            {e.hero.title}
          </h1>
          <p className="font-sans font-light text-cream-200/70 text-lg">{e.hero.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="section-label mb-4">{e.intro.label}</p>
              <span className="block w-12 h-px bg-stone-300 mb-6" />
              <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                {e.intro.title}
              </h2>
              <p className="font-sans font-light text-stone-500 text-lg leading-[1.75]">{e.intro.text}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className="bg-cream-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid sm:grid-cols-2 gap-8">
            {e.types.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <ScrollReveal key={item.name} delay={i * 80}>
                  <div className="bg-cream-50 rounded-sm p-8 md:p-10 hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center mb-5">
                      <Icon size={15} strokeWidth={1.5} className="text-stone-600" />
                    </div>
                    <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-terracotta-500 mb-2">{item.freq}</p>
                    <h3 className="font-serif text-2xl font-light text-stone-900 mb-3">{item.name}</h3>
                    <p className="text-sm font-sans font-light text-stone-500 leading-[1.7]">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="h-[45vh] min-h-[280px] relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1684150/pexels-photo-1684150.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Evening at Plus Eins"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-stone-950/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal direction="none">
            <blockquote className="font-serif text-2xl md:text-4xl font-light text-cream-50 italic text-center px-6 max-w-2xl leading-relaxed">
              "De bedste aftener er dem, der ikke slutter til tiden."
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-xl">
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-light text-stone-900 mb-3">{e.newsletter.title}</h2>
              <p className="font-sans font-light text-stone-500 text-base leading-[1.7] mb-8">{e.newsletter.text}</p>
              <form
                onSubmit={(ev) => { ev.preventDefault(); setEmail(''); }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  placeholder={e.newsletter.placeholder}
                  className="flex-1 px-5 py-3.5 bg-transparent border border-stone-300 text-stone-800 text-sm font-sans placeholder:text-stone-400 focus:outline-none focus:border-stone-600 transition-colors"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">{e.newsletter.cta}</button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
