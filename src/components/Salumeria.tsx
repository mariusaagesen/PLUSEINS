import { useEffect, useRef } from 'react';

export default function Salumeria() {
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
    <section id="salumeria" ref={sectionRef} className="bg-stone-900 py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top label */}
        <div className="mb-16 scroll-reveal" data-delay="0">
          <p className="section-label text-stone-400">Italian Salumeria</p>
          <span className="block w-12 h-px bg-stone-600 mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Text */}
          <div>
            <h2 className="font-serif font-light text-cream-50 leading-[1.12] mb-8 scroll-reveal" data-delay="80"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Slow food.
              <br />
              <em>Honest hands.</em>
            </h2>
            <p className="font-sans font-light text-stone-300 text-lg leading-[1.75] mb-5 scroll-reveal" data-delay="140">
              In the back of Plus Eins, you will find our salumeria — a small, carefully kept counter stocked with the best Italy has to offer. Not trends. Not decorations. Ingredients with character and provenance.
            </p>
            <p className="font-sans font-light text-stone-400 text-base leading-[1.8] mb-8 scroll-reveal" data-delay="190">
              We work with small producers who have been making the same thing the same way for generations. Prosciutto aged in mountain air. Pecorino that crumbles perfectly. Olive oil pressed from a single grove. Everything is available to take home.
            </p>
            <p className="font-sans font-light text-stone-400 text-base leading-[1.8] mb-10 scroll-reveal" data-delay="230">
              Or stay and let us compose a board for you. We do not have a fixed menu. We have what is good today, and we will tell you about it.
            </p>

            <div className="grid grid-cols-2 gap-5 scroll-reveal" data-delay="280">
              {[
                { title: 'Charcuterie', desc: 'Prosciutto, salami, bresaola' },
                { title: 'Formaggi', desc: 'Aged, fresh & blue cheeses' },
                { title: 'Conserve', desc: 'Preserved tomatoes, olives, antipasti' },
                { title: 'Oli & Aceti', desc: 'Single-estate olive oils & vinegars' },
              ].map((item) => (
                <div key={item.title} className="border-t border-stone-700 pt-4">
                  <p className="font-serif text-lg font-light text-cream-100 mb-1">{item.title}</p>
                  <p className="text-xs font-sans text-stone-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 scroll-reveal-right" data-delay="100">
            <div className="space-y-4">
              <div className="image-scale aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4113834/pexels-photo-4113834.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Italian charcuterie board"
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
              <div className="image-scale aspect-square rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Artisan cheese selection"
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 mt-12">
              <div className="image-scale aspect-square rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Olive oil and antipasti"
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
              <div className="image-scale aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Italian table setting"
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-width quote */}
        <div className="border-t border-stone-700 pt-16 text-center scroll-reveal" data-delay="0">
          <blockquote className="font-serif text-2xl md:text-4xl font-light text-cream-100 italic leading-relaxed max-w-3xl mx-auto">
            "Good food does not need much. A little salt, good company, and enough time to enjoy it properly."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
