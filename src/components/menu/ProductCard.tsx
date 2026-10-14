import { Product } from '../../types/product';
import { formatCRC } from '../../hooks/useWhatsAppOrder';
import { Plus, SlidersHorizontal, Scale } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenCustomize: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export function ProductCard({ product, onOpenCustomize, onQuickAdd }: ProductCardProps) {
  const hasExtras = product.availableExtras && product.availableExtras.length > 0;

  return (
    <div className="bg-[#141820] rounded-3xl overflow-hidden border border-white/5 hover:border-[#ff5500]/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col group hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-[#ff5500]/20 reveal-on-scroll reveal-hidden">
      {/* Product Image & Badges with smooth zoom */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141820] via-transparent to-transparent opacity-85" />

        {/* Top Badges with subtle bounce */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {product.badge ? (
            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#ff5500] text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              {product.badge}
            </span>
          ) : <span />}

          {product.weight && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#0d0f12]/85 backdrop-blur-md text-yellow-400 border border-yellow-400/30 shadow-sm">
              <Scale className="w-3 h-3" />
              {product.weight}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-heading text-xl text-white group-hover:text-[#ff7733] transition-colors duration-200 leading-tight">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-2 mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action Button with spring physics */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] text-gray-400 block font-medium">Precio</span>
            <span className="text-xl font-black text-white">{formatCRC(product.price)}</span>
          </div>

          {hasExtras ? (
            <button
              onClick={() => onOpenCustomize(product)}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-[#ff5500] active:scale-95 text-white px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 shadow-md group/btn cursor-pointer"
              title="Personalizar ingredientes y salsas"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#ff5500] group-hover/btn:text-white transition-colors" />
              <span>Personalizar</span>
            </button>
          ) : (
            <button
              onClick={() => onQuickAdd(product)}
              className="flex items-center gap-1.5 bg-[#ff5500] hover:bg-[#e64c00] active:scale-95 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 shadow-md shadow-[#ff5500]/25 hover:shadow-lg hover:shadow-[#ff5500]/40 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Agregar</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
