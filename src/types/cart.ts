import { Product, ProductExtra, BranchId } from './product';

export interface CartItemOption {
  extra: ProductExtra;
  quantity: number;
}

export interface CartItem {
  id: string; // Unique cart item ID (allows multiple variants of same product)
  product: Product;
  quantity: number;
  selectedExtras: ProductExtra[];
  specialInstructions?: string;
  unitPrice: number; // Base price + selected extras
  itemTotal: number; // unitPrice * quantity
}

export type DeliveryType = 'express' | 'pickup' | 'dinein';

export interface CheckoutFormData {
  customerName: string;
  phone: string;
  branch: BranchId;
  deliveryType: DeliveryType;
  address?: string;
  notes?: string;
}
