import MainContentProductDetail from "@/components/product-detail-components/main-content-product-detail";
import { RootStackParamList } from "@/navigators/RootStackParamList";
import { Product } from "@/types/products-type";
import { getProductById } from "@/utils/load-and-filter-product-data";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

// Route type
type ProductDetailRouteProp = RouteProp<RootStackParamList, "ProductDetail">;

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const navigation = useNavigation();
  useEffect(() => {
    if (productId) {
      const fetchedProduct = getProductById(productId);
      setProduct(fetchedProduct);
    }
  }, [productId]);

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlatList
      className=" bg-white pt-5"
      data={[{ key: "mainContentCart" }]} // Dummy data to render SectionProduct
      renderItem={() => (
        <MainContentProductDetail product={product} navigation={navigation} />
      )} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default ProductDetailScreen;
