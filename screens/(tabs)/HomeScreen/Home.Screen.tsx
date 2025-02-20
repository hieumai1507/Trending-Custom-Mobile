import Footer from "@/components/drawer-components/footer";
import Header from "@/components/drawer-components/header";
import MainContentHome from "@/components/HomeComponents/main-content-home";
import React, { useCallback } from "react";
import { FlatList } from "react-native";

const HomeScreen = () => {
  const renderHeader = useCallback(() => <Header />, []);
  const renderFooter = useCallback(() => <Footer />, []);
  return (
    <FlatList
      className="flex-1 bg-white pt-5"
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      data={[{ key: "mainContentHome" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentHome />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default HomeScreen;
