import { useState } from 'react';
import { ShoppingBag, MapPin, Menu as MenuIcon, X, Flame } from 'lucide-react';
import { PromoTicker } from './PromoTicker';
import { formatCRC } from '../../hooks/useWhatsAppOrder';

interface NavbarProps {
  totalItems: number;
  subtotal: number;
  onOpenCart: () => void;
}

export function Navbar({ totalItems, subtotal, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0d0f12]/90 border-b border-white/10 shadow-xl transition-all">
      <PromoTicker />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ff3c00] to-[#ff8c00] p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#121418] rounded-[14px] flex items-center justify-center overflow-hidden">
                <Flame className="w-7 h-7 text-[#ff5500] group-hover:text-yellow-400 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-2xl tracking-wider text-white">COMIDA CALLEJERA</span>
                <span className="px-1.5 py-0.5 text-xs font-black bg-[#ff5500] text-white rounded">XL</span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium tracking-wide flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#ff5500]" />
                Heredia & San José, Costa Rica
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-sm font-semibold text-gray-200 hover:text-[#ff5500] transition-colors">
              Menú XL
            </a>
            <a href="#experiencia" className="text-sm font-semibold text-gray-200 hover:text-[#ff5500] transition-colors">
              Experiencia & Neón
            </a>
            <a href="#sucursales" className="text-sm font-semibold text-gray-200 hover:text-[#ff5500] transition-colors">
              Sucursales
            </a>
            <a
              href="https://wa.me/50689940912"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-full hover:bg-emerald-900/60 transition-colors"
            >
              WhatsApp: +506 8994-0912
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-3 bg-[#ff5500] hover:bg-[#e64c00] active:scale-95 text-white px-4 py-2.5 rounded-xl font-bold shadow-lg shadow-[#ff5500]/25 transition-all duration-200"
              aria-label="Abrir carrito de compras"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-sm font-black">
                {totalItems > 0 ? formatCRC(subtotal) : 'Mi Pedido'}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
              aria-label="Alternar menú móvil"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121418] border-b border-white/10 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-gray-200 hover:text-[#ff5500]"
          >
            🍔 Menú XL
          </a>
          <a
            href="#experiencia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-gray-200 hover:text-[#ff5500]"
          >
            ✨ Experiencia Túnel Neón
          </a>
          <a
            href="#sucursales"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-gray-200 hover:text-[#ff5500]"
          >
            📍 Sucursales & Waze
          </a>
          <a
            href="https://wa.me/50689940912"
            target="_blank"
            rel="noreferrer"
            className="block text-center text-sm font-bold text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 py-2.5 rounded-xl"
          >
            📲 WhatsApp Directo: +506 8994-0912
          </a>
        </div>
      )}
    </header>
  );
}
