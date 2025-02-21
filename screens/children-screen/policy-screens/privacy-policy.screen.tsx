import MainContentPrivacyPolicy from "@/components/privacy-components/privacy-policy-component/main-content-privacy-policy";
import React from "react";
import { FlatList } from "react-native";

// Route type

const PrivacyPolicyScreen = () => {
  return (
    <FlatList
      className=" bg-white pt-5"
      data={[{ key: "mainContentPrivacyPolicy" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentPrivacyPolicy />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default PrivacyPolicyScreen;
