import { useState, useEffect } from 'react';
import { CartItem } from '../types/cart';
import { Product, ProductExtra } from '../types/product';

const CART_STORAGE_KEY = 'ccxl_cart_v1';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [items]);

  const addToCart = (
    product: Product,
    quantity: number = 1,
    selectedExtras: ProductExtra[] = [],
    specialInstructions?: string
  ) => {
    const extrasTotal = selectedExtras.reduce((acc, curr) => acc + curr.price, 0);
    const unitPrice = product.price + extrasTotal;
    const itemTotal = unitPrice * quantity;

    // Create a deterministic unique id for item variant
    const extraIds = selectedExtras.map((e) => e.id).sort().join(',');
    const variantId = `${product.id}_${extraIds}_${(specialInstructions || '').trim()}`;

    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === variantId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const existing = updated[existingIndex];
        const newQty = existing.quantity + quantity;
        updated[existingIndex] = {
          ...existing,
          quantity: newQty,
          itemTotal: existing.unitPrice * newQty,
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: variantId,
          product,
          quantity,
          selectedExtras,
          specialInstructions,
          unitPrice,
          itemTotal,
        },
      ];
    });

    setIsOpen(true);
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0
              ? { ...item, quantity: newQty, itemTotal: item.unitPrice * newQty }
              : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.itemTotal, 0);

  return {
    items,
    isOpen,
    setIsOpen,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    subtotal,
  };
}
