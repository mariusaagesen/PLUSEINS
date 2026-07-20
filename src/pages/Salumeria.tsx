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
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-32 md:pb-40">
        <ScrollReveal direction="up">
          <div className="font-sans text-stone-800" style={{ maxWidth: '960px' }}>

            {/* Three-column top layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">

              {/* Column 1: Snacks + Homemade Starters */}
              <div>
                <h2 className="font-bold text-base tracking-wide uppercase mb-4">Snacks</h2>
                <div className="space-y-2 text-sm font-light leading-relaxed">
                  <div className="flex justify-between gap-4"><span>+1 Bagte Oliven</span><span className="shrink-0">55</span></div>
                  <div className="flex justify-between gap-4"><span>3 forskellige italienske olier (incl. brød)</span><span className="shrink-0">45</span></div>
                  <div className="flex justify-between gap-4"><span>ekstra brød</span><span className="shrink-0">199</span></div>
                  <div className="flex justify-between gap-4 flex-col">
                    <span>Snack-Board (3 slags ost eller skinke,pølse)</span>
                    <div className="flex justify-between gap-4"><span>- 100g &amp; brød</span><span className="shrink-0">95</span></div>
                  </div>
                </div>

                <h2 className="font-bold text-base tracking-wide uppercase mt-10 mb-4">Homemade Starters</h2>
                <div className="space-y-2 text-sm font-light leading-relaxed">
                  <div className="flex justify-between gap-4"><span>Humus</span><span className="shrink-0">239</span></div>
                  <div className="flex justify-between gap-4"><span>Caprese</span><span className="shrink-0"></span></div>
                  <div className="flex justify-between gap-4"><span>Serrano, Fersken</span><span className="shrink-0"></span></div>
                  <div className="flex justify-between gap-4"><span>Torta Verde</span><span className="shrink-0"></span></div>
                  <div className="flex justify-between gap-4"><span>Mousse di tonno</span><span className="shrink-0"></span></div>
                  <div className="flex justify-between gap-4"><span>Pate à la Bent</span><span className="shrink-0"></span></div>
                  <div className="flex justify-between gap-4"><span>„Best of Starters" (choose 3)</span><span className="shrink-0"></span></div>
                </div>
                <p className="text-sm font-light mt-3 text-stone-500">Self imported Italian delicacies</p>
                <p className="text-sm font-light text-stone-500">ekstra brød</p>

                <h2 className="font-bold text-base tracking-wide uppercase mt-10 mb-4">Homemade Desserts</h2>
                <div className="space-y-2 text-sm font-light leading-relaxed">
                  <div className="flex justify-between gap-4"><span>Tarte Tartin with Creme Fraise</span></div>
                  <div className="flex justify-between gap-4"><span>Crème Brulée</span></div>
                  <div className="flex justify-between gap-4"><span>Tiramisu</span></div>
                </div>
              </div>

              {/* Column 2: To go + Packages */}
              <div>
                <h2 className="font-bold text-base tracking-wide uppercase mb-4">To go spise</h2>
                <div className="space-y-2 text-sm font-light leading-relaxed">
                  <div className="flex justify-between gap-4"><span>Italian Tapas Picollo</span><span className="shrink-0">45</span></div>
                </div>

                <h2 className="font-bold text-base tracking-wide uppercase mt-10 mb-4">To go „bottled happiness"</h2>
                <div className="space-y-2 text-sm font-light leading-relaxed">
                  <div className="flex justify-between gap-4"><span>Vin / flaske</span><span className="shrink-0">119</span></div>
                  <div className="flex justify-between gap-4"><span>Cremant / flaske</span><span className="shrink-0">299</span></div>
                </div>

                <div className="mt-10 space-y-6 text-sm font-light leading-relaxed">
                  <div>
                    <p className="font-bold">Picollo</p>
                    <p>skinke, pølse og ost</p>
                    <p className="font-bold mt-1">319 / per person</p>
                  </div>
                  <div>
                    <p className="font-bold">Medio</p>
                    <p>+1 starter skinke, pølse og ost</p>
                    <p className="font-bold mt-1">369 / per person</p>
                  </div>
                  <div>
                    <p className="font-bold">Grande</p>
                    <p>+1 starter</p>
                    <p>+1 dessert</p>
                    <p>ost, skinke og pølse</p>
                    <p className="font-bold mt-1">429 / per person</p>
                  </div>
                </div>

                <div className="mt-10 text-sm font-light space-y-1">
                  <p className="font-bold text-base tracking-wide uppercase">Espresso</p>
                  <p className="text-stone-500 leading-relaxed">If you're ever passing by, you're always welcome to stop in for an espresso.</p>
                </div>
              </div>

              {/* Column 3: Café + Drinks */}
              <div>
                <h2 className="font-bold text-base tracking-wide uppercase mb-4">Café</h2>
                <div className="space-y-2 text-sm font-light leading-relaxed">
                  <div><span>Flat White</span></div>
                  <div><span>Latte</span></div>
                  <div><span>Cappuccino</span></div>
                  <div><span>Americano</span></div>
                  <div><span>Cortado</span></div>
                  <div><span>@sterlandsk The</span></div>
                  <div className="flex justify-between gap-4"><span>Ice Latte (inkl karamel sirup)</span><span className="shrink-0">150</span></div>
                </div>

                <h2 className="font-bold text-base tracking-wide uppercase mt-10 mb-4">Vin*</h2>
                <div className="space-y-2 text-sm font-light leading-relaxed">
                  <div><span>Hvid</span></div>
                  <div><span>Rød</span></div>
                  <div><span>Rosé</span></div>
                  <div><span>Alkoholfri hvidvin</span></div>
                </div>
                <p className="text-xs text-stone-400 mt-2">•Vin serveres med vand og chips</p>

                <h2 className="font-bold text-base tracking-wide uppercase mt-10 mb-4">Øl</h2>
                <div className="space-y-2 text-sm font-light leading-relaxed">
                  <div><span>Augustiner Hell</span></div>
                  <div><span>Franziskaner Weissbier hell</span></div>
                  <div><span>Franziekaner Weissbier dunkel</span></div>
                  <div className="flex justify-between gap-4"><span>Franziskaner Weissbier alkoholfri</span><span className="shrink-0">250</span></div>
                </div>

                <h2 className="font-bold text-base tracking-wide uppercase mt-10 mb-4">Non Alcoholic</h2>
                <div className="space-y-2 text-sm font-light leading-relaxed">
                  <div><span>Limonade italian style</span></div>
                  <div><span>Vand med kulsyre San Benedetto 0.75 l</span></div>
                  <div><span>Vand uden kulsyre San Benedetto 0,75 l</span></div>
                </div>

                <h2 className="font-bold text-base tracking-wide uppercase mt-10 mb-4">Cocktails &amp; Bobler</h2>
                <div className="space-y-2 text-sm font-light leading-relaxed">
                  <div><span>Aperol Spritz</span></div>
                  <div><span>Aperol Limoncello</span></div>
                  <div><span>Gin Tonic</span></div>
                  <div><span>Hugo</span></div>
                  <div><span>Cremant</span></div>
                  <div><span>Sekt</span></div>
                  <div><span>Alkoholfri Sekt</span></div>
                </div>
              </div>

            </div>

            {/* Footer line */}
            <div className="border-t border-stone-200 pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-stone-400 font-light">
              <span>DKK, ink. moms</span>
              <span>follow us @instagram: pluseins.dk</span>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
