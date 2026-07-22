import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Lang } from '../i18n/translations';

const mainRoutes = [
  { key: 'boutique' as const, path: '/boutique' },
  { key: 'salumeria' as const, path: '/salumeria' },
  { key: 'deliMenu' as const, path: '/deli' },
  { key: 'showroom' as const, path: '/showroom' },
  { key: 'magazine' as const, path: '/magazine' },
  { key: 'aboutUs' as const, path: '/about' },
];

const langs: Lang[] = ['da', 'de', 'en'];

export default function Navigation() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          transparent
            ? 'bg-transparent py-6'
            : 'bg-cream-50/96 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.06)] py-4'
        }`}
        style={{ transition: 'background-color 0.4s ease, padding 0.3s ease, box-shadow 0.4s ease' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/Logo.png"
              alt="Plus Eins"
              className={`transition-all duration-[400ms] object-contain ${transparent ? 'h-12' : 'h-10'}`}
            />
          </Link>

          {/* Desktop links — main areas + secondary */}
          <ul className="hidden xl:flex items-center gap-8">
            {mainRoutes.map(({ key, path }) => {
              const active = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`text-[12px] font-sans tracking-[0.14em] uppercase transition-colors duration-200 ${
                      transparent
                        ? active ? 'text-cream-50' : 'text-cream-200/80 hover:text-cream-50'
                        : active ? 'text-stone-900' : 'text-stone-600 hover:text-stone-900'
                    }`
                    }
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              );
            })}

          </ul>

          {/* Language switcher + hamburger */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {langs.map((l, i) => (
                <span key={l} className="flex items-center">
                  <button
                    onClick={() => setLang(l)}
                    className={`text-[10px] font-sans tracking-[0.12em] uppercase transition-colors duration-200 ${
                      lang === l
                        ? transparent ? 'text-cream-50 font-medium' : 'text-stone-900 font-medium'
                        : transparent ? 'text-cream-200/50 hover:text-cream-200' : 'text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                  {i < langs.length - 1 && (
                    <span className={`mx-1 text-[9px] ${transparent ? 'text-cream-200/30' : 'text-stone-300'}`}>·</span>
                  )}
                </span>
              ))}
            </div>

            <button
              onClick={() => setOpen(true)}
              className={`p-1.5 transition-colors ${transparent ? 'text-cream-50' : 'text-stone-800'}`}
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / full-screen drawer */}
      <div className={`fixed inset-0 z-[100] flex transition-all duration-500 ${open ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-stone-950/60 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`relative ml-auto w-[85vw] max-w-xs bg-cream-50 h-full flex flex-col transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between p-6 border-b border-stone-100">
            <img
              src="/images/Logo.png"
              alt="Plus Eins"
              className="h-10 object-contain"
            />
            <button onClick={() => setOpen(false)} className="text-stone-400 hover:text-stone-900 transition-colors" aria-label="Close menu">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <ul className="flex flex-col py-6 flex-1 overflow-y-auto">
            <li className="px-6 pb-2 pt-2"><p className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400">Plus Eins</p></li>
            {mainRoutes.map(({ key, path }) => {
              const active = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center px-6 py-4 font-serif text-2xl font-light transition-colors ${
                      active ? 'text-stone-900 bg-stone-50' : 'text-stone-700 hover:text-stone-900'
                    }`}
                  >
                    {t.nav[key]}
                    {active && <span className="ml-auto w-1 h-1 rounded-full bg-terracotta-400" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="p-6 border-t border-stone-100">
            <div className="flex items-center gap-2 mb-3">
              {langs.map((l, i) => (
                <span key={l} className="flex items-center">
                  <button
                    onClick={() => setLang(l)}
                    className={`text-xs font-sans tracking-widest uppercase ${lang === l ? 'text-stone-900 font-medium' : 'text-stone-400 hover:text-stone-600'}`}
                  >
                    {l.toUpperCase()}
                  </button>
                  {i < langs.length - 1 && <span className="mx-2 text-stone-200 text-xs">·</span>}
                </span>
              ))}
            </div>
            <p className="text-xs font-sans text-stone-400 tracking-widest uppercase">{t.footer.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}
