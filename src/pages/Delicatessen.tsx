import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function Delicatessen() {
  const { t } = useLanguage();
  const d = t.deli;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4113834/pexels-photo-4113834.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Italian Salumeria"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/25 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="section-label text-cream-200/60 mb-4">{d.hero.eyebrow}</p>
          <h1 className="font-serif font-light text-cream-50 leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)' }}
          >
            {d.hero.title}
          </h1>
          <p className="font-sans font-light text-cream-200/70 text-lg">{d.hero.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-center">
            <ScrollReveal direction="left">
              <p className="section-label mb-4">{d.intro.label}</p>
              <span className="block w-12 h-px bg-stone-300 mb-6" />
              <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                {d.intro.title}
              </h2>
              <p className="font-sans font-light text-stone-600 text-lg leading-[1.75] mb-4">{d.intro.text}</p>
              <p className="font-sans font-light text-stone-500 text-base leading-[1.8]">{d.intro.text2}</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <div className="grid grid-cols-2 gap-3">
                <div className="image-scale aspect-[3/4] rounded-sm overflow-hidden">
                  <img src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cheese" className="editorial-image" loading="lazy" />
                </div>
                <div className="space-y-3 mt-6">
                  <div className="image-scale aspect-square rounded-sm overflow-hidden">
                    <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Olive oil" className="editorial-image" loading="lazy" />
                  </div>
                  <div className="image-scale aspect-[4/3] rounded-sm overflow-hidden">
                    <img src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Italian table" className="editorial-image" loading="lazy" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-stone-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="section-label text-stone-500 mb-4">{d.categories.label}</p>
            <span className="block w-12 h-px bg-stone-700 mb-12" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.categories.items.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 70}>
                <div className="border border-stone-800 p-6 hover:border-stone-600 transition-colors duration-300 rounded-sm">
                  <p className="text-xs font-sans tracking-[0.18em] uppercase text-terracotta-400 mb-3">0{i + 1}</p>
                  <h3 className="font-serif text-xl font-light text-cream-100 mb-3">{item.name}</h3>
                  <p className="text-sm font-sans font-light text-stone-400 leading-[1.7]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Board composition */}
      <section className="bg-cream-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-center">
            <ScrollReveal direction="left">
              <div className="image-scale aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Charcuterie board"
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <p className="section-label mb-4">{d.board.label}</p>
              <span className="block w-12 h-px bg-stone-300 mb-6" />
              <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                {d.board.title}
              </h2>
              <p className="font-sans font-light text-stone-500 text-lg leading-[1.75] mb-8">{d.board.text}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-cream-50 py-20 border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal direction="none">
            <blockquote className="font-serif text-2xl md:text-4xl font-light text-stone-800 italic leading-relaxed">
              "{d.quote}"
            </blockquote>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
