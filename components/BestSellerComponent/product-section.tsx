import { Product } from "@/types/products-type";
import { getProducts } from "@/utils/load-and-filter-product-data";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Pagination from "../common/pagination";
import ProductTile from "../common/product-tile";

interface BestSellerProductsSectionProps {
  isNotInHome?: boolean;
}

const BestSellerProductsSection: React.FC<
  BestSellerProductsSectionProps
> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <View className="mt-8">
      <FlatList
        data={paginatedProducts}
        keyExtractor={(item) => item.product_id}
        renderItem={({ item }: { item: Product }) => (
          <ProductTile isNotInHome product={item} />
        )}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "flex-start",
        }}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / itemsPerPage)}
        setCurrentPage={handlePageChange}
      />
    </View>
  );
};

export default BestSellerProductsSection;
