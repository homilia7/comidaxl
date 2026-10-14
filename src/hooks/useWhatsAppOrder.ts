import { CartItem, CheckoutFormData } from '../types/cart';
import { BRANCHES } from '../data/menuData';

export function formatCRC(amount: number): string {
  return new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: 'CRC',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateWhatsAppOrderUrl(
  items: CartItem[],
  checkout: CheckoutFormData,
  subtotal: number
): string {
  const branchInfo = BRANCHES.find((b) => b.id === checkout.branch) || BRANCHES[0];

  const deliveryTypeLabels = {
    express: '🛵 Express a Domicilio',
    pickup: '🛍️ Para Llevar (Paso a recoger)',
    dinein: '🍽️ Consumo en Mesa / Local',
  };

  let message = `🔥 *NUEVO PEDIDO - COMIDA CALLEJERA XL* 🔥\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📍 *Sucursal:* ${branchInfo.name}\n`;
  message += `📦 *Modalidad:* ${deliveryTypeLabels[checkout.deliveryType]}\n`;
  message += `👤 *Cliente:* ${checkout.customerName}\n`;
  message += `📞 *Teléfono:* ${checkout.phone}\n`;

  if (checkout.deliveryType === 'express' && checkout.address) {
    message += `🏠 *Dirección de Entrega:* ${checkout.address}\n`;
  }

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📋 *PRODUCTOS SELECCIONADOS:*\n\n`;

  items.forEach((item, index) => {
    message += `${index + 1}. *${item.quantity}x ${item.product.name}* — ${formatCRC(item.itemTotal)}\n`;
    if (item.selectedExtras.length > 0) {
      item.selectedExtras.forEach((extra) => {
        message += `   └ + ${extra.name} (${formatCRC(extra.price)})\n`;
      });
    }
    if (item.specialInstructions) {
      message += `   └ 📝 *Nota:* ${item.specialInstructions}\n`;
    }
    message += `\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL A PAGAR:* *${formatCRC(subtotal)}*\n`;

  if (checkout.notes) {
    message += `\n💬 *Observaciones:* ${checkout.notes}\n`;
  }

  message += `\n_Enviado desde el nuevo sitio web oficial de Comida Callejera XL_ 🚀`;

  const encodedMessage = encodeURIComponent(message);
  // Phone target: +506 8994-0912
  return `https://wa.me/50689940912?text=${encodedMessage}`;
}
