import { ArrowRight, Flame, Scale, Clock, Award } from 'lucide-react';

interface HeroBannerProps {
  onExploreMenu: () => void;
}

export function HeroBanner({ onExploreMenu }: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 bg-gradient-to-b from-[#111418] via-[#0d0f12] to-[#0d0f12]">
      {/* Background neon ambient effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#ff5500]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-[#ff5500]/40 text-[#ff7733] text-xs font-black tracking-wider uppercase animate-pulse">
              <Flame className="w-4 h-4 text-[#ff5500]" />
              Auténtico Sabor Callejero XL • Costa Rica
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight uppercase leading-[0.95]">
              PORCIONES <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff8800] to-yellow-400">MONUMENTALES</span> PARA COMPARTIR
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Bienvenido al lugar donde cada plato principal y porción de papas pesa 
              <strong className="text-white font-bold"> más de medio kilo</strong>. 
              Shock Burgers artesanales, tablas de chicharrones crujientes y cascadas de queso cheddar fundido.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#ff5500] hover:bg-[#e64c00] text-white px-8 py-4 rounded-2xl font-extrabold text-base shadow-xl shadow-[#ff5500]/30 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Explorar Menú XL</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://wa.me/50689940912"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white px-7 py-4 rounded-2xl font-bold text-base transition-all"
              >
                <span>WhatsApp: 8994-0912</span>
              </a>
            </div>

            {/* Quick Badges Grid */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="bg-[#161a20]/80 border border-white/5 p-3 rounded-xl text-center">
                <Scale className="w-5 h-5 text-[#ff5500] mx-auto mb-1" />
                <p className="text-xs font-bold text-white">+500 Gramos</p>
                <p className="text-[10px] text-gray-400">En cada plato</p>
              </div>
              <div className="bg-[#161a20]/80 border border-white/5 p-3 rounded-xl text-center">
                <Clock className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                <p className="text-xs font-bold text-white">11am a 10pm</p>
                <p className="text-[10px] text-gray-400">Todos los días</p>
              </div>
              <div className="bg-[#161a20]/80 border border-white/5 p-3 rounded-xl text-center">
                <Award className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                <p className="text-xs font-bold text-white">2 Locales</p>
                <p className="text-[10px] text-gray-400">Heredia & San José</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-[#161a20] group">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85"
                  alt="Shock Burger XL Comida Callejera"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent opacity-90" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#12151a]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-black uppercase text-[#ff5500] tracking-wider">
                      Plato Estrella
                    </span>
                    <h3 className="text-xl font-heading text-white">SHOCK BURGER XL</h3>
                    <p className="text-xs text-gray-400">Triple cheddar fundido + tocineta crocante</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-yellow-400">₡7,900</span>
                    <span className="block text-[10px] text-gray-400">Porción 650g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
