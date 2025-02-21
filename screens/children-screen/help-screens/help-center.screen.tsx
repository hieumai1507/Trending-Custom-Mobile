import MainContentHelpCenter from "@/components/help-component/main-content-help-center";
import React from "react";
import { FlatList } from "react-native";

const HelpCenterScreen = () => {
  return (
    <FlatList
      className=" bg-white pt-5"
      data={[{ key: "mainContentHelpCenter" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentHelpCenter />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default HelpCenterScreen;
