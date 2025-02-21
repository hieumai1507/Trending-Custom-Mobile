import MainContentTermOfService from "@/components/privacy-components/main-term-of-service";
import React from "react";
import { FlatList } from "react-native";

const TermOfServicesScreen = () => {
  return (
    <FlatList
      className=" bg-white pt-5"
      data={[{ key: "mainContentTermOfService" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentTermOfService />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default TermOfServicesScreen;
