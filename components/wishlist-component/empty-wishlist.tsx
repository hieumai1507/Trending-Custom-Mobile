import React from "react";
import { View, Text } from "react-native";
import BrokenHeartIcon from "./broken-heart-icon";

const EmptyFavorites: React.FC = () => {
  return (
    <View className="items-center justify-center">
      <View className="bg-gray-100 p-8 rounded-full">
        <BrokenHeartIcon size={80} color="#f87171" />
        {/* Không cần className vì react-native-vector-icons không hỗ trợ */}
      </View>
      <Text className="text-2xl font-semibold mt-4 text-gray-700">
        Nothing here... yet.
      </Text>
      <Text className="text-center text-gray-500 mt-2">
        These are a few of your favorite things...
        {"\n"}or they will be, once you favorite something.
      </Text>
    </View>
  );
};

export default EmptyFavorites;
