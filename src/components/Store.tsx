import { useEffect, useRef } from 'react';

const categories = [
  {
    title: 'Ceramics & Tableware',
    desc: 'Handmade pieces from Nordic and European studios. Objects you will use every day.',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Fashion & Textiles',
    desc: 'Carefully considered wardrobe pieces from independent European labels.',
    image: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Interior & Objects',
    desc: 'Candles, linen, glass and curiosities that make a home feel considered.',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Books & Paper',
    desc: 'Titles on food, travel, design and the art of living slowly.',
    image: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Store() {
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
    <section id="store" ref={sectionRef} className="bg-cream-200 py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-16">
          <p className="section-label scroll-reveal" data-delay="0">Lifestyle Store</p>
          <span className="block w-12 h-px bg-stone-400 mt-6 mb-6 scroll-reveal" data-delay="80" />
          <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-6 scroll-reveal" data-delay="120"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
          >
            Objects chosen
            <br />
            <em>to last a lifetime.</em>
          </h2>
          <p className="font-sans font-light text-stone-600 text-lg leading-[1.75] scroll-reveal" data-delay="180">
            The store inside Plus Eins is an extension of the same philosophy that guides everything here. We do not carry things because they are popular. We carry things because they are made well, by people who care.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="scroll-reveal group cursor-pointer"
              data-delay={`${i * 80}`}
            >
              <div className="image-scale aspect-[3/4] rounded-sm overflow-hidden mb-4">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="editorial-image"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-lg font-light text-stone-900 mb-2 group-hover:text-stone-600 transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm font-sans font-light text-stone-500 leading-[1.65]">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="bg-stone-900 rounded-sm p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 scroll-reveal" data-delay="0">
          <div>
            <p className="font-serif text-2xl md:text-3xl font-light text-cream-50 mb-2">
              Looking for a gift?
            </p>
            <p className="text-sm font-sans font-light text-stone-400 max-w-md">
              We put together gift boxes made up of things we love — for people who appreciate the difference between a thoughtful gift and a generic one.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#visit')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-light flex-shrink-0"
          >
            Come in and browse
          </button>
        </div>
      </div>
    </section>
  );
}
