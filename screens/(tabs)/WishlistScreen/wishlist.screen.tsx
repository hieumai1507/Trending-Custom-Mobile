import { View, Text, FlatList } from "react-native";
import React, { useCallback } from "react";
import Header from "@/components/drawer-components/header";
import Footer from "@/components/drawer-components/footer";
import MainContentWishlist from "@/components/wishlist-component/main-content-wishlist";

const WishlistScreen = () => {
  const renderHeader = useCallback(() => <Header />, []);
  const renderFooter = useCallback(() => <Footer />, []);
  return (
    <FlatList
      className="flex-1 bg-white pt-5"
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      data={[{ key: "mainContentWishlist" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentWishlist />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};
export default WishlistScreen;
