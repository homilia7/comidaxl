import { useState } from 'react';
import { X, Send, MapPin, Bike, ShoppingBag, Utensils } from 'lucide-react';
import { CartItem, CheckoutFormData, DeliveryType } from '../../types/cart';
import { BranchId } from '../../types/product';
import { BRANCHES } from '../../data/menuData';
import { generateWhatsAppOrderUrl, formatCRC } from '../../hooks/useWhatsAppOrder';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  onOrderSuccess: () => void;
}

export function CheckoutModal({ isOpen, onClose, items, subtotal, onOrderSuccess }: CheckoutModalProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<CheckoutFormData>({
    customerName: '',
    phone: '',
    branch: 'heredia',
    deliveryType: 'express',
    address: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName.trim() || !formData.phone.trim()) {
      alert('Por favor indica tu nombre y teléfono para procesar el pedido.');
      return;
    }
    if (formData.deliveryType === 'express' && !formData.address?.trim()) {
      alert('Por favor indica tu dirección de entrega para el servicio express.');
      return;
    }

    const orderUrl = generateWhatsAppOrderUrl(items, formData, subtotal);
    window.open(orderUrl, '_blank');
    onOrderSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#141820] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#171b24]">
          <div>
            <h3 className="font-heading text-2xl text-white">FINALIZAR PEDIDO</h3>
            <p className="text-xs text-gray-400">Envío directo al WhatsApp oficial de Comida Callejera XL</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto flex-1">
          {/* Sucursal */}
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff5500]" /> Elige tu Sucursal
            </label>
            <div className="grid grid-cols-2 gap-2">
              {BRANCHES.map((b) => (
                <button
                  type="button"
                  key={b.id}
                  onClick={() => setFormData({ ...formData, branch: b.id as BranchId })}
                  className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                    formData.branch === b.id
                      ? 'bg-[#ff5500]/15 border-[#ff5500] text-white shadow-md'
                      : 'bg-[#181c24] border-white/5 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <span className="block text-white font-extrabold">{b.name}</span>
                  <span className="text-[10px] text-gray-400 block truncate">{b.tagline}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Modalidad de entrega */}
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
              Tipo de Entrega
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'express', label: 'Express', icon: Bike },
                { id: 'pickup', label: 'Para Llevar', icon: ShoppingBag },
                { id: 'dinein', label: 'En Mesa', icon: Utensils },
              ].map((t) => {
                const Icon = t.icon;
                const isSelected = formData.deliveryType === t.id;
                return (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setFormData({ ...formData, deliveryType: t.id as DeliveryType })}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold gap-1 transition-all ${
                      isSelected
                        ? 'bg-[#ff5500] border-[#ff5500] text-white'
                        : 'bg-[#181c24] border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cliente Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1">Nombre Completo *</label>
              <input
                type="text"
                required
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                placeholder="Ej: Daniel Rojas"
                className="w-full bg-[#181c24] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#ff5500]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1">Teléfono Móvil *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Ej: 8888-8888"
                className="w-full bg-[#181c24] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#ff5500]"
              />
            </div>
          </div>

          {/* Dirección si es express */}
          {formData.deliveryType === 'express' && (
            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1">Dirección Exacta de Entrega *</label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Provincia, cantón, señas exactas (casa, color, puntos de referencia)..."
                className="w-full bg-[#181c24] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#ff5500] resize-none h-16"
              />
            </div>
          )}

          {/* Notas */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 mb-1">Observaciones / Método de Pago</label>
            <input
              type="text"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Ej: Pago con SINPE Móvil o Efectivo..."
              className="w-full bg-[#181c24] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#ff5500]"
            />
          </div>

          {/* Resumen Total y Submit */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-300 font-semibold">Total a Confirmar:</span>
              <span className="text-2xl font-black text-yellow-400">{formatCRC(subtotal)}</span>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-black text-base py-4 rounded-2xl shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <Send className="w-5 h-5" />
              <span>Enviar Pedido a WhatsApp</span>
            </button>
            <p className="text-[11px] text-gray-400 text-center mt-2">
              Se abrirá tu WhatsApp con el detalle listo para enviar a Comida Callejera XL.
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}
