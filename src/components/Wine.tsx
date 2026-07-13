import { useEffect, useRef } from 'react';

export default function Wine() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? '0';
            setTimeout(() => el.classList.add('visible'), parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="wine" ref={sectionRef} className="bg-cream-50 py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Large hero-style image */}
        <div className="relative mb-20 scroll-reveal" data-delay="0">
          <div className="image-scale aspect-[21/9] rounded-sm overflow-hidden">
            <img
              src="https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Wine at Plus Eins"
              className="editorial-image"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 to-transparent" />
          </div>
          <div className="absolute bottom-10 left-10 text-cream-50">
            <p className="section-label text-cream-200/70 mb-3">The Wine</p>
            <h2 className="font-serif font-light leading-[1.1]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Wines that
              <br />
              <em>tell a story.</em>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Text left */}
          <div>
            <p className="font-sans font-light text-stone-600 text-lg leading-[1.75] mb-6 scroll-reveal" data-delay="0">
              Our wine list is small and intentional. Every bottle on it is there for a reason, and we can tell you that reason. We focus on South German wines — Baden, Württemberg, Franken — regions that produce wines of quiet character and exceptional food-friendliness.
            </p>
            <p className="font-sans font-light text-stone-500 text-base leading-[1.8] mb-8 scroll-reveal" data-delay="60">
              We work closely with a small number of winemakers who farm sustainably and bottle honestly. Low yields, minimal intervention, wines that taste of somewhere.
            </p>
            <p className="font-sans font-light text-stone-500 text-base leading-[1.8] mb-10 scroll-reveal" data-delay="100">
              You will find bottles by the glass each evening, and our selection changes with the seasons. We also carry a small take-home selection — because some wines deserve a second bottle.
            </p>
            <div className="scroll-reveal" data-delay="150">
              <button
                onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Wine evenings
              </button>
            </div>
          </div>

          {/* Right: philosophy pillars */}
          <div className="space-y-8 scroll-reveal-right" data-delay="100">
            {[
              {
                title: 'Origin over everything',
                text: 'We choose wines that express their terroir clearly. South German winemakers produce wines of remarkable precision and without the fanfare.',
              },
              {
                title: 'Seasonal selection',
                text: 'The list changes. Summer calls for lighter, cooler wines. Winter brings richer pours from the cellar. We never keep bottles that have passed their moment.',
              },
              {
                title: 'Food first',
                text: 'Every wine we pour is chosen to work with food. Our wines complement the salumeria, the kitchen and the season — they are never an afterthought.',
              },
            ].map((item, i) => (
              <div key={item.title} className="scroll-reveal border-l-2 border-terracotta-300 pl-6" data-delay={`${i * 80}`}>
                <h3 className="font-serif text-xl font-light text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm font-sans font-light text-stone-500 leading-[1.7]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
