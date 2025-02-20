import { appInfo } from "@/constants/appInfos";
import { COMMON } from "@/constants/textConstant";
import React from "react";
import { View, Text, Image } from "react-native";

export default function TitleWrapper() {
  return (
    <View className="">
      <View className="relative py-12">
        <Image
          source={{
            uri: "https://trendingcustom.com/cdn/shop/t/57/assets/best-sellers-mobile.png?v=183578064170196121981691676939",
          }} // Sử dụng ảnh mobile
          className="absolute"
          style={{
            width: appInfo.sizes.WIDTH * 1,
            height: appInfo.sizes.HEIGHT * 0.2,
          }}
          resizeMode="cover"
        />
        <View className="flex items-center px-4">
          <Text className="mb-4 text-3xl font-bold text-black">
            {COMMON.BESTSELLERS}
          </Text>
          <Text className="max-w-2xl text-center text-gray-600">
            Find the perfect personalized gift for your loved ones on our Best
            Sellers page!
          </Text>
        </View>
      </View>
    </View>
  );
}
