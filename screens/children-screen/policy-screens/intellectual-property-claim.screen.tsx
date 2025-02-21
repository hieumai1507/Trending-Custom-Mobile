import MainContentIntellectualPropertyClaim from "@/components/privacy-components/main-content-intellectual-property-claim";
import React from "react";
import { FlatList } from "react-native";

const IntellectualPropertyClaim = () => {
  return (
    <FlatList
      className=" bg-white pt-5"
      data={[{ key: "mainContentIntellectualPropertyClaim" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentIntellectualPropertyClaim />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default IntellectualPropertyClaim;
