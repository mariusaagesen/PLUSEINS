import { useEffect, useRef } from 'react';

export default function Yoga() {
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
    <section id="yoga" ref={sectionRef} className="bg-sage-100 py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <p className="section-label scroll-reveal" data-delay="0">Morning Yoga</p>
            <span className="block w-12 h-px bg-sage-400 mt-6 mb-6 scroll-reveal" data-delay="80" />
            <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-8 scroll-reveal" data-delay="120"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
            >
              Begin the morning
              <br />
              <em>before it begins you.</em>
            </h2>
            <p className="font-sans font-light text-stone-600 text-lg leading-[1.75] mb-5 scroll-reveal" data-delay="180">
              On selected mornings, we open the terrace before the café opens to the public. A small group, a quiet hour of yoga with an experienced teacher, and then coffee on the terrace as the neighbourhood wakes up.
            </p>
            <p className="font-sans font-light text-stone-500 text-base leading-[1.8] mb-10 scroll-reveal" data-delay="220">
              The practice is gentle and accessible. You do not need experience. You need comfortable clothes and the desire for a morning that feels different. Mat and equipment provided.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10 scroll-reveal" data-delay="280">
              {[
                { val: '07:15', label: 'Start time' },
                { val: '60 min', label: 'Duration' },
                { val: '12 max', label: 'Group size' },
              ].map((item) => (
                <div key={item.label} className="bg-cream-50/60 p-4 rounded-sm text-center">
                  <p className="font-serif text-2xl font-light text-stone-900">{item.val}</p>
                  <p className="text-xs font-sans text-stone-400 tracking-widest uppercase mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="scroll-reveal" data-delay="330">
              <button
                onClick={() => document.querySelector('#visit')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Reserve a spot
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 scroll-reveal-right" data-delay="80">
            <div className="relative">
              <div className="image-scale aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Morning yoga at Plus Eins"
                  className="editorial-image"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-sage-400/10" />
              </div>
              {/* Detail card */}
              <div className="absolute -bottom-6 -left-6 md:left-[-2.5rem] bg-stone-900 text-cream-50 p-6 max-w-[200px] scroll-reveal" data-delay="450">
                <p className="font-serif text-lg font-light leading-snug">
                  "A quiet practice, followed by the perfect cup."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
