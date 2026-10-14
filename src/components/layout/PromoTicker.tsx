import { Sparkles, Flame, Clock, Bike, Star } from 'lucide-react';

export function PromoTicker() {
  const announcements = [
    { text: '¡TODOS NUESTROS PLATOS PESAN MÁS DE MEDIO KILO!', icon: Flame },
    { text: 'FAMOSO TÚNEL NEÓN LED EN HEREDIA', icon: Sparkles },
    { text: 'ABIERTOS LUNES A DOMINGO: 11:00 AM A 10:00 PM', icon: Clock },
    { text: 'EXPRESS DIRECTO AL WHATSAPP: +506 8994-0912', icon: Bike },
    { text: 'SHOCK BURGERS CON CHEDDAR FUNDIDO EN MESA', icon: Star },
  ];

  return (
    <div className="bg-gradient-to-r from-[#e63900] via-[#ff5500] to-[#ff8500] text-white py-2 text-xs font-bold tracking-wider uppercase overflow-hidden border-b border-white/10 select-none">
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {announcements.concat(announcements).map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2 px-2">
              <Icon className="w-3.5 h-3.5 text-yellow-300" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
