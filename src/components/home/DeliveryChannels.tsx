import { Bike, Navigation, ShoppingCart, MessageSquareText } from 'lucide-react';

export function DeliveryChannels() {
  return (
    <section className="py-10 bg-[#12151b] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-heading text-white tracking-wide">
              ¿CÓMO PREFIERES DISFRUTAR TU COMIDA CALLEJERA XL?
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Pide para entrega express directa a tu puerta o visítanos en nuestros restaurantes temáticos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/50689940912"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>WhatsApp Express</span>
            </a>

            <a
              href="https://www.ubereats.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-gray-900 border border-white/15 text-white font-bold text-xs transition-all"
            >
              <Bike className="w-4 h-4 text-emerald-400" />
              <span>Uber Eats</span>
            </a>

            <a
              href="https://www.pedidosya.cr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#e5213b] hover:bg-[#c91830] text-white font-bold text-xs transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>PedidosYa</span>
            </a>

            <a
              href="#sucursales"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/10 transition-all"
            >
              <Navigation className="w-4 h-4 text-sky-400" />
              <span>Rutas Waze</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
