import { DrawerNavProp } from "@/navigators/RootDrawerParamList";
import { Product } from "@/types/products-type";
import { getProducts } from "@/utils/load-and-filter-product-data";
import { useNavigation } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductTile from "../common/product-tile";
interface sectionProductProps {
  giftOfCouple?: boolean;
}

const SectionProduct: React.FC<sectionProductProps> = ({ giftOfCouple }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [numColumns, setNumColumns] = useState(2); // Define the number of columns
  const navigation = useNavigation<DrawerNavProp>();
  const randomProducts = useMemo(() => {
    const productList = getProducts();

    const getRandomProducts = (arr: Product[], n: number): Product[] => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    };

    return getRandomProducts(productList, 6);
  }, []); // Empty dependency array: only run this once

  // 3. useEffect to set the state with the memoized random products
  useEffect(() => {
    setProducts(randomProducts);
  }, [randomProducts]);
  return (
    <View className="mt-5">
      <View className="items-center">
        <Text className="text-2xl font-semibold mb-4 text-center">
          {giftOfCouple
            ? "Gifts for Couples"
            : "🎁 Best Sellers - Customer Favorites"}
        </Text>
        <Text className="text-lg font-normal text-center mb-4 mx-9">
          {giftOfCouple
            ? "Celebrate love with personalized gifts made for couples. From heartfelt keepsakes to custom creations, find the perfect way to cherish their bond and create lasting memories."
            : "Shop our most-loved personalized gifts, perfect for every occasion!"}
        </Text>
        <TouchableOpacity
          onPress={() => {
            giftOfCouple
              ? navigation.navigate("Home")
              : navigation.navigate("BestSellers");
          }}
        >
          <Text className="text-lg font-normal text-center mb-1">
            See all products →
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.product_id}
        renderItem={({ item }: { item: Product }) => (
          <ProductTile product={item} />
        )}
        numColumns={numColumns}
        key={numColumns.toString()}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default SectionProduct;
const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-around", // space out the items evenly
  },
});
