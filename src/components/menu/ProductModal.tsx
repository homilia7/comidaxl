import { useState } from 'react';
import { Product, ProductExtra } from '../../types/product';
import { formatCRC } from '../../hooks/useWhatsAppOrder';
import { X, Plus, Minus, Check, Flame } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    quantity: number,
    selectedExtras: ProductExtra[],
    notes?: string
  ) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<ProductExtra[]>([]);
  const [notes, setNotes] = useState('');

  const toggleExtra = (extra: ProductExtra) => {
    setSelectedExtras((prev) =>
      prev.some((e) => e.id === extra.id)
        ? prev.filter((e) => e.id !== extra.id)
        : [...prev, extra]
    );
  };

  const extrasSum = selectedExtras.reduce((sum, e) => sum + e.price, 0);
  const total = (product.price + extrasSum) * quantity;

  const handleConfirm = () => {
    onAddToCart(product, quantity, selectedExtras, notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#141820] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header with image */}
        <div className="relative h-48 bg-black/50 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141820] via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-5 right-5">
            <h3 className="text-2xl font-heading text-white">{product.name}</h3>
            <p className="text-xs text-gray-300 line-clamp-1">{product.description}</p>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Extras Selection */}
          {product.availableExtras && product.availableExtras.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-4 h-4 text-[#ff5500]" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Personaliza tu Plato con Extras XL
                </h4>
              </div>

              <div className="space-y-2">
                {product.availableExtras.map((extra) => {
                  const isChecked = selectedExtras.some((e) => e.id === extra.id);
                  return (
                    <label
                      key={extra.id}
                      onClick={() => toggleExtra(extra)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#ff5500]/15 border-[#ff5500] text-white'
                          : 'bg-[#181c24] border-white/5 text-gray-300 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                            isChecked ? 'bg-[#ff5500] border-[#ff5500] text-white' : 'border-white/20'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-semibold">{extra.name}</span>
                      </div>
                      <span className="text-xs font-bold text-yellow-400">+{formatCRC(extra.price)}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
              Instrucciones Especiales (Opcional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej: Sin cebolla, salsas aparte, carne bien cocida..."
              className="w-full bg-[#181c24] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff5500] resize-none h-20"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#0f1217] border-t border-white/5 flex items-center justify-between gap-4">
          <div className="flex items-center border border-white/10 bg-[#181c24] rounded-xl p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-2 text-gray-300 hover:text-white"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 font-bold text-sm text-white">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-2 text-gray-300 hover:text-white"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleConfirm}
            className="flex-1 bg-[#ff5500] hover:bg-[#e64c00] active:scale-95 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-lg shadow-[#ff5500]/25 transition-all text-center"
          >
            Agregar {formatCRC(total)}
          </button>
        </div>

      </div>
    </div>
  );
}
