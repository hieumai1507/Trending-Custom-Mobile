import { Product } from "@/types/products-type";
import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PreviewModal } from "./preview-modal";
import { PriceSection } from "./price-section";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProp } from "@/navigators/RootStackParamList";

interface ProductTileProp {
  product: Product;
  isNotInHome?: boolean;
}

const ProductTile = ({ product, isNotInHome }: ProductTileProp) => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const productImages = [product.sku_image]; // Use sku_image
  const handleClickNavigate = () => {
    navigation.navigate("ProductDetail", {
      productId: product.product_id,
      productName: product.product_name,
    });
  };
  return (
    <>
      <TouchableOpacity
        onPress={handleClickNavigate}
        className="group cursor-pointer w-[48%] p-4 m-1"
      >
        <View className="overflow-hidden relative rounded-lg flex text-left">
          <Image
            source={{ uri: product.sku_image || "/placeholder.svg" }}
            alt={product.product_name}
            className="w-full h-auto aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
            style={styles.image}
          />
          {/* eye button to open modal */}
          {isNotInHome ? (
            <TouchableOpacity
              className="absolute right-2 top-2 opacity-80 rounded-[50%]  p-2 bg-gray-500"
              onPress={(e) => {
                e.preventDefault();
                setIsPreviewOpen(true);
              }}
            >
              <Octicons name="eye" size={18} color="white" />
            </TouchableOpacity>
          ) : (
            ""
          )}
        </View>
        {/* product info */}
        <View className="mt-4 space-y-2">
          <Text className="text-lg" numberOfLines={2} ellipsizeMode="tail">
            {product.product_name}
          </Text>
          {/* price */}
          <PriceSection
            currentPrice={parseFloat(product.sale_price)}
            originalPrice={parseFloat(product.original_price)}
          />
          <View className="flex items-center gap-1"></View>
        </View>
      </TouchableOpacity>
      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        images={product.images}
        productName={product.product_name}
        productId={product.product_id}
        onViewProduct={() => {
          // Handle view product action
          console.log("View product:", product.product_id);
        }}
      />
    </>
  );
};

export default ProductTile;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});
