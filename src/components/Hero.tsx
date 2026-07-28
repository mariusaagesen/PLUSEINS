import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] min-h-[600px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Plus Eins atmosphere"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1280}
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-stone-950/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-3xl">
          <p className="text-cream-200 text-xs font-sans tracking-[0.25em] uppercase mb-6">
            Café · Salumeria · Wine · Lifestyle
          </p>
          <h1 className="font-serif text-cream-50 font-light leading-[1.08] mb-8"
            style={{ fontSize: 'clamp(3.2rem, 8vw, 7rem)' }}
          >
            A place where
            <br />
            <em>every detail matters.</em>
          </h1>
          <p className="font-sans font-light text-cream-200/80 text-lg leading-relaxed max-w-lg mb-10">
            Plus Eins is a destination where good coffee, Italian delicacies, carefully chosen wine and beautiful things live under one roof.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector('#visit')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-light"
            >
              Find us
            </button>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 text-cream-200/70 text-sm font-sans tracking-[0.1em] uppercase hover:text-cream-50 transition-colors"
            >
              Discover more
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-2 text-cream-200/50 hover:text-cream-200 transition-colors z-10"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase rotate-90 mb-3 inline-block">Scroll</span>
        <ArrowDown size={14} strokeWidth={1.5} className="animate-bounce" />
      </button>
    </section>
  );
}
