import MainContentReplacementRefund from "@/components/privacy-components/replacement-refund/main-content-replacement-refund";
import React from "react";
import { FlatList } from "react-native";

const ReplacementRefundScreen = () => {
  return (
    <FlatList
      className=" bg-white pt-5"
      data={[{ key: "mainContentReplacementRefund" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentReplacementRefund />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default ReplacementRefundScreen;
