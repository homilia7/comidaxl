import { Flame, Instagram, MessageSquare, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0b0d10] border-t border-white/10 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500] flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-2xl tracking-wider text-white">COMIDA CALLEJERA XL</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              El restaurante urbano de Costa Rica donde no escatimamos en porciones. Platos insignia de más de 500 gramos, ingredientes frescos y sabor callejero real.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/comida_callejeraxl"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-pink-600 hover:text-white flex items-center justify-center text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/50689940912"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-300 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sucursales */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff5500]" /> Nuestras Sedes
            </h4>
            <ul className="space-y-2">
              <li>
                <strong className="text-white block">Heredia (Santa Lucía):</strong>
                <span>300m oeste de McDonald's</span>
              </li>
              <li>
                <strong className="text-white block">San José (Goicoechea):</strong>
                <span>Frente a C.C. El Pueblo</span>
              </li>
            </ul>
          </div>

          {/* Horario y Pedidos */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Atención al Cliente</h4>
            <p>Lunes a Domingo</p>
            <p className="text-white font-bold">11:00 am – 10:00 pm</p>
            <p className="pt-2 text-emerald-400 font-bold">Pedidos: +506 8994-0912</p>
          </div>

        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} Comida Callejera XL. Todos los derechos reservados.</p>
          <p>Desarrollado con alto rendimiento gastronómico.</p>
        </div>
      </div>
    </footer>
  );
}
