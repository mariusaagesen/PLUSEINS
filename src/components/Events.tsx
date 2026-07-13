import { useEffect, useRef } from 'react';
import { Music, Wine, Leaf, Users } from 'lucide-react';

const events = [
  {
    icon: Wine,
    title: 'Wine evenings',
    freq: 'Monthly',
    desc: 'An evening with a winemaker or sommelier, a few bottles, food to match, and conversation that goes on longer than planned.',
  },
  {
    icon: Music,
    title: 'Live music',
    freq: 'Thursdays',
    desc: 'Intimate acoustic performances from local and visiting musicians. No stage, no amplification — just music in the room.',
  },
  {
    icon: Leaf,
    title: 'Seasonal dinners',
    freq: 'Quarterly',
    desc: 'A long table, a set menu, ingredients from people we trust. A celebration of what the season has to offer.',
  },
  {
    icon: Users,
    title: 'Community mornings',
    freq: 'Sundays',
    desc: 'Slower mornings, longer tables. A relaxed gathering over coffee and pastries for regulars and newcomers alike.',
  },
];

export default function Events() {
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
    <section id="events" ref={sectionRef} className="py-28 md:py-36 overflow-hidden">
      {/* Background image section */}
      <div className="relative mb-20">
        <div className="image-scale h-[50vh] min-h-[320px] overflow-hidden scroll-reveal" data-delay="0">
          <img
            src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Events at Plus Eins"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-950/50" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <p className="section-label text-cream-200/70 mb-4 scroll-reveal" data-delay="200">Events & Experiences</p>
              <h2 className="font-serif font-light text-cream-50 leading-[1.1] scroll-reveal" data-delay="260"
                style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
              >
                Evenings worth
                <br />
                <em>remembering.</em>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {events.map((event, i) => (
            <div key={event.title} className="scroll-reveal" data-delay={`${i * 80}`}>
              <div className="w-10 h-10 flex items-center justify-center border border-stone-200 rounded-full mb-5">
                <event.icon size={16} strokeWidth={1.5} className="text-stone-600" />
              </div>
              <p className="text-xs font-sans tracking-[0.18em] uppercase text-terracotta-500 mb-2">{event.freq}</p>
              <h3 className="font-serif text-xl font-light text-stone-900 mb-3">{event.title}</h3>
              <p className="text-sm font-sans font-light text-stone-500 leading-[1.7]">{event.desc}</p>
            </div>
          ))}
        </div>

        {/* Newsletter / stay informed */}
        <div className="border-t border-stone-200 pt-12 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between scroll-reveal" data-delay="0">
          <div className="max-w-lg">
            <h3 className="font-serif text-2xl font-light text-stone-900 mb-2">Stay in the loop</h3>
            <p className="text-sm font-sans font-light text-stone-500 leading-[1.7]">
              We announce events through our newsletter — usually a week before, never more. No clutter, just what is coming up.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-64 px-5 py-3.5 bg-transparent border border-stone-300 text-stone-800 text-sm font-sans placeholder:text-stone-400 focus:outline-none focus:border-stone-600 transition-colors"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
