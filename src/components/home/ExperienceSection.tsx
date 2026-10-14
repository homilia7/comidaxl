import { Sparkles, Instagram, Flame, Award } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 bg-[#0d0f12] relative overflow-hidden">
      {/* Floating Ambient Background Shapes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff5500]/10 rounded-full blur-[130px] pointer-events-none animate-float-bob" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none animate-float-bob-rev" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos Showcase with Scroll Reveal */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 reveal-on-scroll reveal-hidden">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-64 bg-[#151922] group hover:border-[#ff5500]/50 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80"
                  alt="Experiencia Street Food Neón"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5 rounded-3xl bg-[#151922] border border-white/10 text-center hover:-translate-y-1 transition-transform">
                <Flame className="w-8 h-8 text-[#ff5500] mx-auto mb-2 animate-bounce" />
                <h4 className="font-heading text-xl text-white">CHEDDAR FUNDIDO</h4>
                <p className="text-xs text-gray-400 mt-1">Cascadas de queso caliente en cada bocado.</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#ff5500] to-[#e63900] text-white shadow-xl hover:-translate-y-1 transition-transform">
                <Sparkles className="w-8 h-8 text-yellow-300 mb-2 animate-spin-slow" />
                <h4 className="font-heading text-2xl">TÚNEL NEÓN LED</h4>
                <p className="text-xs opacity-90 mt-1">El spot más instagrameable de Heredia para tus fotos.</p>
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-64 bg-[#151922] group hover:border-[#ff5500]/50 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80"
                  alt="Hamburguesas Gigantes Comida Callejera"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Description & Social Proof */}
          <div className="lg:col-span-6 space-y-6 reveal-on-scroll reveal-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" /> La Experiencia Callejera XL
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
              NO ES SOLO COMIDA, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-yellow-400">
                ES UN FESTÍN URBANO
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              En <strong>Comida Callejera XL</strong> rompimos con las porciones pequeñas. Diseñamos cada receta pensando en el verdadero amante de la comida abundante: carne 100% artesanal a la plancha, chicharrones crujientes, papas rebosadas y un ambiente callejero iluminado con luces de neón.
            </p>

            <div className="p-6 rounded-2xl bg-[#141820] border border-white/10 space-y-3 hover:border-pink-500/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  @comida_callejeraxl
                </span>
                <span className="text-xs text-yellow-400 font-bold">Comunidad Viral</span>
              </div>
              <p className="text-xs text-gray-400">
                Más de 15,000 fanáticos de la comida rápida en Costa Rica. Síguenos para no perderte las promociones relámpago y nuevos lanzamientos de temporada.
              </p>
              <a
                href="https://www.instagram.com/comida_callejeraxl"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black text-pink-400 hover:text-pink-300 pt-1"
              >
                <span>Visitar Perfil de Instagram &rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
