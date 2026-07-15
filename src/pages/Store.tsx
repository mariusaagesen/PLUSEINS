import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const categoryImages = [
  'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function Store() {
  const { t } = useLanguage();
  const s = t.store;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Lifestyle Store"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="section-label text-cream-200/60 mb-4">{s.hero.eyebrow}</p>
          <h1 className="font-serif font-light text-cream-50 leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            {s.hero.title}
          </h1>
          <p className="font-sans font-light text-cream-200/70 text-lg">{s.hero.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="section-label mb-4">{s.intro.label}</p>
              <span className="block w-12 h-px bg-stone-300 mb-6" />
              <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                {s.intro.title}
              </h2>
              <p className="font-sans font-light text-stone-600 text-lg leading-[1.75] mb-4">{s.intro.text}</p>
              <p className="font-sans font-light text-stone-500 text-base leading-[1.8]">{s.intro.text2}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="bg-cream-200 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="section-label mb-4">{s.categories.label}</p>
            <span className="block w-12 h-px bg-stone-400 mb-12" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.categories.items.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 70}>
                <div className="group cursor-default">
                  <div className="image-scale aspect-[4/3] rounded-sm overflow-hidden mb-5">
                    <img
                      src={categoryImages[i]}
                      alt={item.name}
                      className="editorial-image"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-light text-stone-900 mb-2">{item.name}</h3>
                  <p className="text-sm font-sans font-light text-stone-500 leading-[1.65]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gift banner */}
      <section className="bg-stone-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-cream-50 mb-4">{s.gift.title}</h2>
                <p className="font-sans font-light text-stone-400 text-base leading-[1.75] max-w-md">{s.gift.text}</p>
              </div>
              <div className="md:text-right">
                <a
                  href="mailto:accounting@plus-eins.dk"
                  className="btn-light inline-flex"
                >
                  {s.gift.cta}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
