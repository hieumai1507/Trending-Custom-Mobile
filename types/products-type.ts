export interface Product {
  _id: string;
  product_id: string;
  product_name: string;
  sale_price: string;
  sku_image: string;
  sku_name: string;
  original_price: string;
  department?: string;
  display_status: string;
  sizes: string[];
  colors: string[];
  images: { url: string; color: string }[]; // New images array
}

export interface ProductImage {
  url: string;
  color: string;
}
