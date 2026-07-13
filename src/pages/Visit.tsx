import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function Visit() {
  const { t } = useLanguage();
  const v = t.visit;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src="/images/IMG_8158 copy.JPG"
          alt="Plus Eins Rørvig"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="section-label text-cream-200/60 mb-4">{v.hero.eyebrow}</p>
          <h1 className="font-serif font-light text-cream-50 leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            {v.hero.title}
          </h1>
          <p className="font-sans font-light text-cream-200/70 text-lg">{v.hero.subtitle}</p>
        </div>
      </section>

      {/* Main info */}
      <section className="bg-cream-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-xl">
            {/* Info panels */}
            <div className="space-y-10">
              {/* Address */}
              <ScrollReveal delay={0}>
                <div className="flex gap-5">
                  <div className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={14} strokeWidth={1.5} className="text-stone-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400 mb-3">{v.address.label}</p>
                    <p className="font-serif text-2xl font-light text-stone-900">{v.address.street}</p>
                    <p className="font-serif text-2xl font-light text-stone-600">{v.address.city}</p>
                    <p className="font-serif text-2xl font-light text-stone-500">{v.address.country}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hours */}
              <ScrollReveal delay={80}>
                <div className="flex gap-5">
                  <div className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock size={14} strokeWidth={1.5} className="text-stone-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400 mb-4">{v.hours.label}</p>
                    <div className="space-y-3">
                      {v.hours.items.map((h) => (
                        <div key={h.days} className="flex justify-between border-b border-stone-100 pb-3">
                          <span className="text-sm font-sans text-stone-600">{h.days}</span>
                          <span className="text-sm font-sans text-stone-900">{h.time}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs font-sans text-stone-400 mt-3">{v.hours.note}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact */}
              <ScrollReveal delay={160}>
                <div className="flex gap-5">
                  <div className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={14} strokeWidth={1.5} className="text-stone-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400 mb-3">{v.contact.label}</p>
                    <a href={`tel:${v.contact.phone.replace(/\s/g, '')}`} className="font-serif text-2xl font-light text-stone-900 hover:text-stone-500 transition-colors block">{v.contact.phone}</a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Social */}
              <ScrollReveal delay={240}>
                <div className="flex gap-5">
                  <div className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Instagram size={14} strokeWidth={1.5} className="text-stone-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400 mb-3">{v.social.label}</p>
                    <div className="flex flex-wrap gap-4">
                      <a href="https://instagram.com/pluseins.dk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-sans text-stone-600 hover:text-stone-900 transition-colors">
                        <Instagram size={14} strokeWidth={1.5} />
                        {v.social.instagram}
                      </a>
                      <a href="https://facebook.com/profile.php?id=61591412867548" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-sans text-stone-600 hover:text-stone-900 transition-colors">
                        <Facebook size={14} strokeWidth={1.5} />
                        {v.social.facebook}
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Map placeholder + directions */}
          </div>
        </div>
      </section>
    </div>
  );
}
