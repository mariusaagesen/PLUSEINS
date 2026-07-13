import { useEffect, useRef } from 'react';

export default function Cafe() {
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
    <section id="cafe" ref={sectionRef} className="bg-cream-100 py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Large image */}
          <div className="relative scroll-reveal-left" data-delay="0">
            <div className="image-scale aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Coffee at Plus Eins"
                className="editorial-image"
                loading="lazy"
              />
            </div>
            {/* Floating detail card */}
            <div className="absolute -bottom-6 -right-6 md:right-[-3rem] bg-cream-50 p-6 shadow-lg max-w-[180px] scroll-reveal" data-delay="400">
              <p className="font-serif text-3xl font-light text-stone-900 leading-none mb-1">08:00</p>
              <p className="text-xs font-sans text-stone-400 tracking-widest uppercase">Opens daily</p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-4">
            <p className="section-label scroll-reveal" data-delay="0">The Café</p>
            <span className="scroll-reveal block w-12 h-px bg-stone-300 my-6" data-delay="80" />
            <h2 className="font-serif font-light text-stone-900 leading-[1.15] mb-8 scroll-reveal" data-delay="120"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
            >
              Start the day
              <br />
              <em>the right way.</em>
            </h2>
            <p className="font-sans font-light text-stone-600 text-lg leading-[1.75] mb-5 scroll-reveal" data-delay="180">
              Our café is the kind of place where you linger. A cortado that tastes exactly as it should. Sourdough toast with good butter. Homemade cake that changes with the seasons.
            </p>
            <p className="font-sans font-light text-stone-500 text-base leading-[1.8] mb-10 scroll-reveal" data-delay="220">
              We source our beans from small roasters who share our values, and everything from the kitchen is made fresh each morning. Breakfast, brunch, a light lunch — and always excellent coffee.
            </p>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10 scroll-reveal" data-delay="280">
              {[
                'Specialty espresso & filter',
                'Seasonal breakfast',
                'Homemade cakes & pastries',
                'Weekend brunch',
                'Terrace seating',
                'Dog-friendly',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-sans text-stone-600">
                  <span className="mt-[6px] w-1 h-1 rounded-full bg-terracotta-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="scroll-reveal" data-delay="330">
              <button
                onClick={() => document.querySelector('#visit')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                See opening hours
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
