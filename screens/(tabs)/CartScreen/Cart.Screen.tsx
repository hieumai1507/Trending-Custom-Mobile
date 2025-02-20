import MainContentCart from "@/components/CartComponents/main-content-cart";
import Footer from "@/components/drawer-components/footer";
import Header from "@/components/drawer-components/header";
import React, { useCallback } from "react";
import { FlatList } from "react-native";

const CartScreen = () => {
  const renderHeader = useCallback(() => <Header />, []);
  const renderFooter = useCallback(() => <Footer />, []);
  return (
    <FlatList
      className="flex-1 bg-white pt-5"
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      data={[{ key: "mainContentCart" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentCart />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default CartScreen;
