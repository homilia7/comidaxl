import { Sparkles, Flame, Clock, Bike } from 'lucide-react';

export function PromoTicker() {
  return (
    <div className="bg-gradient-to-r from-[#e63900] via-[#ff5500] to-[#ff8500] text-white py-2 px-4 text-xs sm:text-sm font-semibold tracking-wide overflow-hidden shadow-inner">
      <div className="flex items-center justify-center gap-6 text-center animate-pulse">
        <span className="inline-flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-yellow-300 animate-bounce" />
          ¡TODOS NUESTROS PLATOS PESAN MÁS DE MEDIO KILO!
        </span>
        <span className="hidden md:inline-flex items-center gap-1.5 opacity-90">
          <Sparkles className="w-4 h-4 text-yellow-200" />
          Famoso Túnel Neón LED en Heredia
        </span>
        <span className="hidden lg:inline-flex items-center gap-1.5 opacity-90">
          <Clock className="w-4 h-4" />
          Abiertos Lunes a Domingo de 11:00 am a 10:00 pm
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Bike className="w-4 h-4 text-yellow-300" />
          Pedidos Express al WhatsApp: +506 8994-0912
        </span>
      </div>
    </div>
  );
}
