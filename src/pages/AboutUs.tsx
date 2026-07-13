import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutUs() {
  const { t } = useLanguage();
  const a = t.aboutUs;

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Page header */}
      <header className="pt-40 pb-20 md:pt-52 md:pb-28 max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal direction="up">
          <p className="section-label mb-4">{a.eyebrow}</p>
          <span className="block w-12 h-px bg-stone-300 mb-8" />
          <h1
            className="font-serif font-light text-stone-900 leading-[1.06]"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            {a.title}
          </h1>
        </ScrollReveal>
      </header>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-32 md:pb-40">
        <div className="max-w-2xl">
          {a.paragraphs.map((para, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 80}>
              <p className="font-sans font-light text-stone-500 text-lg leading-[1.8] mb-8">
                {para}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
