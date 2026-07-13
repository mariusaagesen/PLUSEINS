import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const routes = [
  { key: 'boutique' as const, path: '/boutique' },
  { key: 'salumeria' as const, path: '/salumeria' },
  { key: 'deliMenu' as const, path: '/deli' },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <Link to="/" className="inline-block mb-5">
              <img
                src="/images/Logo.png"
                alt="Plus Eins"
                className="h-10 object-contain"
              />
            </Link>
            <p className="text-sm font-sans font-light leading-[1.75] text-stone-500 max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-stone-600 mb-6">{t.footer.explore}</p>
            <ul className="space-y-3">
              {routes.map(({ key, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm font-sans font-light text-stone-400 hover:text-cream-100 transition-colors"
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-stone-600 mb-6">{t.footer.contact}</p>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-stone-600 mb-1">{t.visit.address.label}</p>
                <p className="text-sm font-sans font-light text-stone-400">{t.visit.address.street}</p>
                <p className="text-sm font-sans font-light text-stone-400">{t.visit.address.city}</p>
              </div>
              <div>
                <p className="text-xs text-stone-600 mb-1">{t.footer.hours.label}</p>
                <div className="flex justify-between gap-4">
                  <p className="text-sm font-sans font-light text-stone-400">{t.footer.hours.days}</p>
                  <p className="text-sm font-sans font-light text-stone-400">{t.footer.hours.time}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-stone-600 mb-1">{t.footer.contact}</p>
                <a href="mailto:hej@pluseins.dk" className="text-sm font-sans font-light text-stone-400 hover:text-stone-200 transition-colors block">
                  hej@pluseins.dk
                </a>
              </div>
              <div className="flex gap-3 pt-1">
                <a href="https://instagram.com/pluseins.dk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 border border-stone-700 rounded-full flex items-center justify-center hover:border-stone-400 hover:text-stone-200 transition-colors">
                  <Instagram size={13} strokeWidth={1.5} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577638444114" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 border border-stone-700 rounded-full flex items-center justify-center hover:border-stone-400 hover:text-stone-200 transition-colors">
                  <Facebook size={13} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs font-sans text-stone-700">
            {t.footer.copyright.replace('{year}', String(year))}
          </p>
          <p className="text-xs font-sans text-stone-700">pluseins.dk — {t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
