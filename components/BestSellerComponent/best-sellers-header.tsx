import { COMMON } from "@/constants/textConstant";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SortDropdown } from "./best-seller-header-components/sort-components/sort-dropdown";
import TitleWrapper from "./best-seller-header-components/title-wrapper";
import { FilterModal } from "./best-seller-header-components/filter-modal";

const BestSellersHeader = () => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [sortValue, setSortValue] = React.useState("featured");
  return (
    <View className=" bg-white pb-4 ">
      <TitleWrapper />
      <View className="px-4">
        <View className="flex-row justify-between ">
          <TouchableOpacity
            className="flex-row items-center px-4 py-2 border border-gray-300 rounded-md"
            onPress={() => setIsFilterOpen(true)}
          >
            <FontAwesome name="sliders" size={24} color="black" />
            <Text className="text-lg ml-2">{COMMON.FILTERS}</Text>
          </TouchableOpacity>
          <View className="flex-row items-center">
            <SortDropdown value={sortValue} onValueChange={setSortValue} />
          </View>
        </View>
      </View>
      <FlatList
        className=" bg-white pt-5"
        data={[{ key: "filterModal" }]} // Dummy data to render filterModal
        renderItem={() => (
          <FilterModal
            isVisible={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
        )} // Render SectionProduct
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default BestSellersHeader;
