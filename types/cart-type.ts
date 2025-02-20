import { Product } from "./products-type";

// types/cart.ts
export interface CartItemType extends Product {
  quantity: number;
  shippingProtection?: boolean;
  giftWrapping?: boolean;
  size: string;
  color: string;
}

export interface CartSubtotalType {
  subtotal: number;
  priorityProduction: boolean;
  total: number;
}
