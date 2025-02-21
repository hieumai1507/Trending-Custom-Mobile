import MainContentContactUs from "@/components/help-component/main-content-contact-us";
import React from "react";
import { FlatList } from "react-native";

const ContactUsScreen = () => {
  return (
    <FlatList
      className=" bg-white pt-5"
      data={[{ key: "mainContentContactUs" }]} // Dummy data to render SectionProduct
      renderItem={() => <MainContentContactUs />} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default ContactUsScreen;
