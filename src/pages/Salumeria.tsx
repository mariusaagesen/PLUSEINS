import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function Salumeria() {
  const { t } = useLanguage();

  return (
    <div className="bg-cream-50 min-h-screen">

      {/* Hero: heading left, photo right */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-0">
        <div className="grid md:grid-cols-[5fr_12fr] gap-8 md:gap-16 items-center">

          <ScrollReveal direction="up">
            <div className="flex items-center justify-center">
              <h1
                className="font-serif font-light text-stone-900 leading-[1.02] text-center"
                style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}
              >
                {t.nav.salumeria}
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={60}>
            <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src="/images/logos/IMG_5106.jpg"
                alt="Salumeria — Plus Eins"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16 md:mt-20">
        <div className="w-full h-px bg-stone-200" />
      </div>

      {/* Intro */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-12 pb-16 md:pb-20">
        <ScrollReveal direction="up">
          <p className="font-sans font-light text-stone-500 text-lg leading-[1.8] max-w-2xl">
            {t.salumeria.intro.text}
          </p>
        </ScrollReveal>
      </section>

      {/* Menu text */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-32 md:pb-40 flex justify-center">
        <ScrollReveal direction="up">
          <div className="font-sans text-stone-800 w-full" style={{ maxWidth: '1000px' }}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">

              {/* ── LEFT COLUMN ── */}
              <div className="space-y-10">

                {/* Snacks */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h2 className="font-bold text-xl">Snacks</h2>
                    <span className="text-sm font-light">55</span>
                  </div>
                  <div className="w-full h-px bg-stone-400 mt-1 mb-3" />
                  <div className="space-y-1 text-sm font-light leading-relaxed">
                    <p>+1 Bagte Oliven</p>
                    <p>3 forskellige italienske olier (incl. brød)</p>
                    <p>ekstra brød</p>
                  </div>
                  <div className="flex justify-end mt-1 mb-2">
                    <span className="text-sm font-light">45</span>
                  </div>
                  <div className="bg-stone-100 px-4 py-3 text-sm font-light space-y-1">
                    <p>Snack-Board (3 slags ost eller skinke,pølse)</p>
                    <div className="flex justify-between gap-4">
                      <span>- 100g &amp; brød</span>
                      <span className="shrink-0">199</span>
                    </div>
                  </div>
                </div>

                {/* Homemade Starters */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h2 className="font-bold text-xl">Homemade Starters</h2>
                    <span className="text-sm font-light">95</span>
                  </div>
                  <div className="w-full h-px bg-stone-400 mt-1 mb-3" />
                  <div className="space-y-1 text-sm font-light leading-relaxed">
                    <p>Humus</p>
                    <p>Caprese</p>
                    <p>Serrano, Fersken</p>
                    <p>Torta Verde</p>
                    <p>Mousse di tonno</p>
                    <p>Pate à la Bent</p>
                  </div>
                  <div className="mt-3 bg-stone-100 px-4 py-3 flex justify-between gap-4 text-sm font-light">
                    <span>„Best of Starters" (choose 3)</span>
                    <span className="shrink-0">239</span>
                  </div>
                </div>

                {/* Self imported Italian delicacies */}
                <div>
                  <h2 className="font-bold text-xl mb-1">Self imported Italian delicacies</h2>
                  <div className="w-full h-px bg-stone-400 mt-1 mb-3" />
                  <div className="grid grid-cols-3 text-sm font-light border border-stone-300">
                    <div className="p-3 border-r border-stone-300">
                      <p className="font-semibold">Picollo</p>
                      <p>skinke, pølse</p>
                      <p>og ost</p>
                      <p className="mt-3 font-semibold">319 / per person</p>
                    </div>
                    <div className="p-3 border-r border-stone-300">
                      <p className="font-semibold">Medio</p>
                      <p>+1 starter</p>
                      <p>skinke, pølse</p>
                      <p>og ost</p>
                      <p className="mt-3 font-semibold">369 / per person</p>
                    </div>
                    <div className="p-3">
                      <p className="font-semibold">Grande</p>
                      <p>+1 starter</p>
                      <p>+1 dessert</p>
                      <p>ost, skinke og pølse</p>
                      <p className="mt-3 font-semibold">429 / per person</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 text-sm font-light mt-3">
                    <span>ekstra brød</span>
                    <span className="shrink-0">45</span>
                  </div>
                </div>

                {/* Homemade Desserts */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h2 className="font-bold text-xl">Homemade Desserts</h2>
                    <span className="text-sm font-light">119</span>
                  </div>
                  <div className="w-full h-px bg-stone-400 mt-1 mb-3" />
                  <div className="space-y-1 text-sm font-light leading-relaxed">
                    <p>Tarte Tartin with Creme Fraise</p>
                    <p>Crème Brulée</p>
                    <p>Tiramisu</p>
                  </div>
                </div>

                {/* To go spise */}
                <div className="bg-stone-100 px-4 py-4">
                  <h2 className="font-bold text-base mb-1">To go spise</h2>
                  <div className="w-full h-px bg-stone-400 mb-3" />
                  <div className="flex justify-between gap-4 text-sm font-light">
                    <span>Italian Tapas Picollo</span>
                    <span className="shrink-0">299</span>
                  </div>
                </div>

                {/* To go bottled happiness */}
                <div className="bg-stone-100 px-4 py-4">
                  <h2 className="font-bold text-base mb-1">To go „bottled happiness"</h2>
                  <div className="w-full h-px bg-stone-400 mb-3" />
                  <div className="space-y-1 text-sm font-light">
                    <div className="flex justify-between gap-4">
                      <span>Vin / flaske</span>
                      <span className="shrink-0">150</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Cremant / flaske</span>
                      <span className="shrink-0">250</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* ── RIGHT COLUMN ── */}
              <div className="space-y-10 mt-10 md:mt-0">

                {/* Vin */}
                <div>
                  <h2 className="font-bold text-xl">Vin*</h2>
                  <div className="w-full h-px bg-stone-400 mt-1 mb-3" />
                  <div className="space-y-1 text-sm font-light leading-relaxed">
                    <p>Hvid</p>
                    <p>Rød</p>
                    <p>Rosé</p>
                    <p>Alkoholfri hvidvin</p>
                    <p className="text-stone-500">•Vin serveres med vand og chips</p>
                  </div>
                </div>

                {/* Øl */}
                <div>
                  <h2 className="font-bold text-xl">Øl</h2>
                  <div className="w-full h-px bg-stone-400 mt-1 mb-3" />
                  <div className="space-y-1 text-sm font-light leading-relaxed">
                    <p>Augustiner Hell</p>
                    <p>Franziskaner Weissbier hell</p>
                    <p>Franziekaner Weissbier dunkel</p>
                    <p>Franziskaner Weissbier alkoholfri</p>
                  </div>
                </div>

                {/* Café */}
                <div>
                  <h2 className="font-bold text-xl">Café</h2>
                  <div className="w-full h-px bg-stone-400 mt-1 mb-3" />
                  <div className="space-y-1 text-sm font-light leading-relaxed">
                    <p>Flat White</p>
                    <p>Latte</p>
                    <p>Cappuccino</p>
                    <p>Americano</p>
                    <p>Cortado</p>
                    <p>@sterlandsk The</p>
                    <p>Ice Latte (inkl karamel sirup)</p>
                  </div>
                  <div className="mt-3 border border-stone-300 px-4 py-3 text-sm font-light">
                    <p className="font-semibold">Espresso</p>
                    <p className="text-stone-500 mt-1 leading-relaxed">If you're ever passing by, you're always welcome to stop in for an espresso.</p>
                  </div>
                </div>

                {/* Non Alcoholic */}
                <div>
                  <h2 className="font-bold text-xl">Non Alcoholic</h2>
                  <div className="w-full h-px bg-stone-400 mt-1 mb-3" />
                  <div className="space-y-1 text-sm font-light leading-relaxed">
                    <p>Limonade italian style</p>
                    <p>Vand med kulsyre San Benedetto 0.75 l</p>
                    <p>Vand uden kulsyre San Benedetto 0,75 l</p>
                  </div>
                </div>

                {/* Cocktails & Bobler */}
                <div>
                  <h2 className="font-bold text-xl">Cocktails &amp; Bobler</h2>
                  <div className="w-full h-px bg-stone-400 mt-1 mb-3" />
                  <div className="space-y-1 text-sm font-light leading-relaxed">
                    <p>Aperol Spritz</p>
                    <p>Aperol Limoncello</p>
                    <p>Gin Tonic</p>
                    <p>Hugo</p>
                    <p>Cremant</p>
                    <p>Sekt</p>
                    <p>Alkoholfri Sekt</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-2 space-y-1 text-xs text-stone-400 font-light">
                  <p>DKK, ink. moms</p>
                  <p>follow us @instagram: pluseins.dk</p>
                </div>

              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
