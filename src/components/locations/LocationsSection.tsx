import { BRANCHES } from '../../data/menuData';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';

export function LocationsSection() {
  return (
    <section id="sucursales" className="py-20 bg-[#101319] border-t border-white/5 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#ff5500]/10 blur-3xl animate-float-bob pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3 reveal-on-scroll reveal-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5500]/15 text-[#ff7733] border border-[#ff5500]/30 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" /> Costa Rica
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            NUESTRAS <span className="text-[#ff5500]">SUCURSALES</span>
          </h2>
          <p className="text-sm text-gray-400">
            Dos ubicaciones estratégicas para que disfrutes en el local o pidas express directo a tu casa.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {BRANCHES.map((b) => (
            <div
              key={b.id}
              className="bg-[#141822] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#ff5500]/50 transition-all duration-500 shadow-xl flex flex-col justify-between group hover:-translate-y-2 reveal-on-scroll reveal-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black bg-[#ff5500] text-white uppercase shadow-md">
                    {b.tagline}
                  </span>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Abierto Hoy
                  </span>
                </div>

                <h3 className="text-2xl font-heading text-white group-hover:text-[#ff7733] transition-colors">
                  {b.name}
                </h3>

                <div className="space-y-2.5 text-xs text-gray-300">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>

                  <p className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>{b.schedule}</span>
                  </p>

                  <p className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{b.phone}</span>
                  </p>
                </div>
              </div>

              {/* Navigation CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/5">
                <a
                  href={b.wazeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-sky-600/20 hover:bg-sky-600 text-sky-300 hover:text-white border border-sky-500/30 py-2.5 px-3 rounded-xl font-bold text-xs transition-all active:scale-95 text-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Abrir en Waze</span>
                </a>

                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 py-2.5 px-3 rounded-xl font-bold text-xs transition-all active:scale-95 text-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
