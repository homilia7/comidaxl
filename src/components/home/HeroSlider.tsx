import { useState, useEffect } from 'react';
import { ArrowRight, Flame, ChevronLeft, ChevronRight, Scale, Clock, Sparkles } from 'lucide-react';
import { formatCRC } from '../../hooks/useWhatsAppOrder';

interface HeroSliderProps {
  onExploreMenu: () => void;
}

const SLIDES = [
  {
    badge: 'La Más Vendida • Porción 650g',
    title: 'SHOCK BURGER VOLCÁN XL',
    highlight: 'VOLCÁN XL',
    description: 'Triple queso cheddar fundido en mesa, doble carne smash artesanal, tocineta crujiente en pan brioche a la mantequilla.',
    price: 7900,
    weight: '650g+',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85',
  },
  {
    badge: 'Festín Para 4 Personas • 1.5 kg',
    title: 'SURTIDO MONUMENTAL CALLEJERO',
    highlight: 'MONUMENTAL',
    description: 'Mini burgers smash, chicharrones de cerdo crujientes, alitas BBQ, aros de cebolla y papas rebosadas de queso.',
    price: 18900,
    weight: '1.5 kg',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85',
  },
  {
    badge: 'Auténtico Sabor Criollo • 900g',
    title: 'TABLA DE CHICHARRONES DORADOS',
    highlight: 'CRUJIENTES',
    description: 'Cortes seleccionados de cerdo súper crujientes, acompañados de abundante yuca frita, patacones y pico de gallo.',
    price: 11900,
    weight: '900g+',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
  },
];

export function HeroSlider({ onExploreMenu }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#111418] via-[#0d0f12] to-[#0d0f12]">
      {/* Floating Background Shapes (Foodies Parallax) */}
      <div className="absolute top-12 left-10 w-24 h-24 rounded-full bg-[#ff5500]/15 blur-2xl animate-float-bob pointer-events-none" />
      <div className="absolute bottom-16 right-16 w-36 h-36 rounded-full bg-yellow-500/10 blur-3xl animate-float-bob-rev pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[520px]">
          
          {/* Left: Text Details with Smooth Transitions */}
          <div key={`text-${current}`} className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/15 border border-[#ff5500]/40 text-[#ff7733] text-xs font-black uppercase tracking-wider">
              <Flame className="w-4 h-4 text-[#ff5500] animate-bounce" />
              {slide.badge}
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight uppercase leading-[0.95]">
              PORCIONES <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff8800] to-yellow-400">{slide.highlight}</span> PARA COMPARTIR
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#ff5500] hover:bg-[#e64c00] active:scale-95 text-white px-8 py-4 rounded-2xl font-extrabold text-base shadow-xl shadow-[#ff5500]/30 hover:scale-[1.03] transition-all cursor-pointer"
              >
                <span>Ordenar Ahora</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://wa.me/50689940912"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/15 text-white px-7 py-4 rounded-2xl font-bold text-base transition-all"
              >
                <span>WhatsApp: 8994-0912</span>
              </a>
            </div>

            {/* Badges Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="bg-[#161a20]/80 border border-white/5 p-3 rounded-2xl text-center">
                <Scale className="w-4 h-4 text-[#ff5500] mx-auto mb-1" />
                <p className="text-xs font-bold text-white">+500 Gramos</p>
                <p className="text-[10px] text-gray-400">Porción garantizada</p>
              </div>
              <div className="bg-[#161a20]/80 border border-white/5 p-3 rounded-2xl text-center">
                <Clock className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                <p className="text-xs font-bold text-white">11am a 10pm</p>
                <p className="text-[10px] text-gray-400">Todos los días</p>
              </div>
              <div className="bg-[#161a20]/80 border border-white/5 p-3 rounded-2xl text-center">
                <Sparkles className="w-4 h-4 text-orange-400 mx-auto mb-1" />
                <p className="text-xs font-bold text-white">Túnel Neón LED</p>
                <p className="text-[10px] text-gray-400">En Heredia</p>
              </div>
            </div>
          </div>

          {/* Right: Slide Visual with Rotating Seal & Floating Controls */}
          <div className="lg:col-span-5 relative">
            {/* Rotating Stamp */}
            <div className="absolute -top-6 -right-6 z-20 w-24 h-24 rounded-full bg-[#181c24] border-2 border-[#ff5500] shadow-xl flex items-center justify-center p-1 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-white font-mono text-[9px] tracking-widest uppercase">
                <path id="sliderCircle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text>
                  <textPath xlinkHref="#sliderCircle">
                    • CALIDAD XL • SABOR MONUMENTAL •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Flame className="w-7 h-7 text-[#ff5500]" />
              </div>
            </div>

            {/* Slide Image Box */}
            <div key={`img-${current}`} className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-[#161a20] group animate-fade-up">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent opacity-90" />
              
              {/* Floating Pill Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#12151a]/95 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-black uppercase text-[#ff5500] tracking-wider">
                    Especial Callejero
                  </span>
                  <h3 className="text-xl font-heading text-white">{slide.title}</h3>
                  <p className="text-xs text-gray-400">Porción masiva de {slide.weight}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-yellow-400">{formatCRC(slide.price)}</span>
                </div>
              </div>
            </div>

            {/* Slider Navigation Controls (Foodies array-prev & array-next) */}
            <div className="flex items-center justify-between mt-4 px-2">
              <div className="flex items-center gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      current === i ? 'w-8 bg-[#ff5500]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir al slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#ff5500] text-gray-300 hover:text-white border border-white/10 transition-all active:scale-90"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#ff5500] text-gray-300 hover:text-white border border-white/10 transition-all active:scale-90"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
