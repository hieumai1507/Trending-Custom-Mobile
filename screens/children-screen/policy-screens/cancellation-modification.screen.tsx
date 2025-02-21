import MainContentCancellationAndModification from "@/components/privacy-components/cancellation-modificaton/main-content-cancellation-modification";
import React from "react";
import { FlatList } from "react-native";

// Route type

const CancellationModificationScreen = () => {
  return (
    <FlatList
      className=" bg-white pt-5"
      data={[{ key: "mainContentCancellationAndModification" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentCancellationAndModification />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default CancellationModificationScreen;
