import React from "react";
import { View } from "react-native";
import BestSellersHeader from "./best-sellers-header";
import BestSellerProductsSection from "./product-section";

const MainContentBestSellers = () => {
  return (
    <View>
      <BestSellersHeader />
      <BestSellerProductsSection />
    </View>
  );
};

export default MainContentBestSellers;
