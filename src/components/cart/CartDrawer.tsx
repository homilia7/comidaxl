import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartItem } from '../../types/cart';
import { formatCRC } from '../../hooks/useWhatsAppOrder';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  subtotal,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#12151b] border-l border-white/10 text-white flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#151922]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-[#ff5500]" />
              <h3 className="font-heading text-2xl tracking-wide">TU PEDIDO XL</h3>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#ff5500]/20 text-[#ff7733] border border-[#ff5500]/30">
                {items.length} {items.length === 1 ? 'ítem' : 'ítems'}
              </span>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto" />
                <p className="text-gray-400 font-semibold text-sm">Tu carrito está vacío todavía.</p>
                <button
                  onClick={onClose}
                  className="bg-[#ff5500] hover:bg-[#e64c00] text-white px-6 py-2.5 rounded-xl font-bold text-xs"
                >
                  Ver Platos Recomendados
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="p-4 rounded-2xl bg-[#171b24] border border-white/5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <img src={item.product.image} alt={item.product.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-white truncate">{item.product.name}</h4>
                      <p className="text-xs font-black text-yellow-400 mt-0.5">{formatCRC(item.unitPrice)} c/u</p>
                      
                      {item.selectedExtras.length > 0 && (
                        <div className="mt-1 space-y-0.5">
                          {item.selectedExtras.map((e) => (
                            <p key={e.id} className="text-[10px] text-gray-400">
                              + {e.name} ({formatCRC(e.price)})
                            </p>
                          ))}
                        </div>
                      )}
                      {item.specialInstructions && (
                        <p className="text-[10px] text-orange-400 italic mt-0.5">"{item.specialInstructions}"</p>
                      )}
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-500 hover:text-red-400 p-1"
                      title="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex items-center border border-white/10 rounded-lg bg-black/30 p-1">
                      <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 hover:text-[#ff5500]">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-bold">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 hover:text-[#ff5500]">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="font-black text-sm text-white">{formatCRC(item.itemTotal)}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-[#151922] border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-base">
                <span className="text-gray-400 font-semibold">Subtotal</span>
                <span className="text-2xl font-black text-white">{formatCRC(subtotal)}</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full bg-[#ff5500] hover:bg-[#e64c00] active:scale-95 text-white font-black text-base py-4 rounded-2xl shadow-xl shadow-[#ff5500]/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>Completar Pedido</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
