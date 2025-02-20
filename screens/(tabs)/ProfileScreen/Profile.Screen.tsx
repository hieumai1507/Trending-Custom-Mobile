import Footer from "@/components/drawer-components/footer";
import Header from "@/components/drawer-components/header";
import MainContentProfile from "@/components/ProfileComponent/main-content-profile";
import React, { useCallback } from "react";
import { FlatList } from "react-native";

const ProfileScreen = () => {
  const renderHeader = useCallback(() => <Header />, []);
  const renderFooter = useCallback(() => <Footer />, []);
  return (
    <FlatList
      className="flex-1 bg-white pt-5"
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      data={[{ key: "mainContentProfile" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentProfile />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default ProfileScreen;
