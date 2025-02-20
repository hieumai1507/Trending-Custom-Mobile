// utils/products.ts
import processedProductData from "@/data/product-data/processed-products.json"; // Adjust the path
import { Product } from "@/types/products-type";

let cachedProducts: Product[] | null = null; // Store the cached result

export const getProducts = (): Product[] => {
  if (cachedProducts) {
    // If the result is already cached, return it
    return cachedProducts;
  }

  cachedProducts = processedProductData.data; // Load pre-processed data
  return cachedProducts;
};

export const getProductById = (productId: string): Product | undefined => {
  const products = getProducts();
  return products.find((product) => product.product_id === productId);
};
