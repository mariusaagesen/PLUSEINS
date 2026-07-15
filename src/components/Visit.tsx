import { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const hours = [
  { days: 'Monday – Friday', time: '08:00 – 18:00' },
  { days: 'Saturday', time: '09:00 – 17:00' },
  { days: 'Sunday', time: '10:00 – 15:00' },
];

export default function Visit() {
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
    <section id="visit" ref={sectionRef} className="bg-cream-50 py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-label scroll-reveal" data-delay="0">Visit Us</p>
          <span className="block w-12 h-px bg-stone-300 mt-6 mb-6 mx-auto scroll-reveal" data-delay="80" />
          <h2 className="font-serif font-light text-stone-900 leading-[1.12] mb-6 scroll-reveal" data-delay="120"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
          >
            We are here.
            <br />
            <em>Come as you are.</em>
          </h2>
          <p className="font-sans font-light text-stone-500 text-lg leading-[1.75] scroll-reveal" data-delay="180">
            Plus Eins is an easy place to find and a hard place to leave. We hope to see you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Info */}
          <div className="space-y-10">
            {/* Address */}
            <div className="scroll-reveal" data-delay="0">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center border border-stone-200 rounded-full flex-shrink-0 mt-1">
                  <MapPin size={14} strokeWidth={1.5} className="text-stone-600" />
                </div>
                <div>
                  <p className="text-xs font-sans tracking-[0.18em] uppercase text-stone-400 mb-2">Address</p>
                  <p className="font-serif text-xl font-light text-stone-900">Vesterbrogade 42</p>
                  <p className="font-serif text-xl font-light text-stone-600">1620 Copenhagen V</p>
                  <p className="font-serif text-xl font-light text-stone-600">Denmark</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="scroll-reveal" data-delay="80">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center border border-stone-200 rounded-full flex-shrink-0 mt-1">
                  <Clock size={14} strokeWidth={1.5} className="text-stone-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-sans tracking-[0.18em] uppercase text-stone-400 mb-4">Opening hours</p>
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div key={h.days} className="flex justify-between items-center border-b border-stone-100 pb-3">
                        <span className="text-sm font-sans text-stone-600">{h.days}</span>
                        <span className="text-sm font-sans font-light text-stone-900">{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-sans text-stone-400 mt-3">Kitchen closes 30 min before closing</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="scroll-reveal" data-delay="160">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center border border-stone-200 rounded-full flex-shrink-0 mt-1">
                  <Phone size={14} strokeWidth={1.5} className="text-stone-600" />
                </div>
                <div>
                  <p className="text-xs font-sans tracking-[0.18em] uppercase text-stone-400 mb-2">Get in touch</p>
                  <a href="tel:+4512345678" className="font-serif text-xl font-light text-stone-900 hover:text-stone-600 transition-colors block">
                    +45 12 34 56 78
                  </a>
                  <a href="mailto:accounting@plus-eins.dk" className="font-serif text-xl font-light text-stone-600 hover:text-stone-900 transition-colors block">
                    accounting@plus-eins.dk
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="scroll-reveal" data-delay="230">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center border border-stone-200 rounded-full flex-shrink-0 mt-1">
                  <Instagram size={14} strokeWidth={1.5} className="text-stone-600" />
                </div>
                <div>
                  <p className="text-xs font-sans tracking-[0.18em] uppercase text-stone-400 mb-2">Follow along</p>
                  <a href="#" className="font-serif text-xl font-light text-stone-900 hover:text-stone-600 transition-colors">
                    @pluseins.dk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="scroll-reveal-right" data-delay="100">
            <div className="aspect-[4/3] rounded-sm overflow-hidden relative">
              <img
                src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Copenhagen neighborhood"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-950/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 bg-cream-50 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <img
                      src="/images/Screenshot_2026-07-08_at_15.10.11.png"
                      alt="Plus Eins"
                      className="h-8 w-8 object-contain mix-blend-multiply"
                    />
                  </div>
                  <p className="font-sans text-sm text-cream-50 tracking-wider font-light">Vesterbrogade, Copenhagen</p>
                </div>
              </div>
            </div>

            {/* Directions CTA */}
            <div className="mt-6 p-6 bg-cream-100 rounded-sm">
              <p className="font-serif text-lg font-light text-stone-900 mb-1">Getting here</p>
              <p className="text-sm font-sans font-light text-stone-500 leading-[1.65] mb-4">
                We are a short walk from Vesterbro station and well served by bus lines. Street parking is available nearby.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans tracking-[0.15em] uppercase text-stone-600 hover:text-stone-900 transition-colors inline-flex items-center gap-2"
              >
                Open in maps
                <span className="inline-block w-6 h-px bg-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
