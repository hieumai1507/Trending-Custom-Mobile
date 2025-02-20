import { View, Text, Image } from "react-native";
import React from "react";
import { appInfo } from "@/constants/appInfos";

const PromoBanner = () => {
  return (
    <View className=" items-center gap-4">
      <Image
        source={{
          uri: "https://trendingcustom.com/cdn/shop/files/Group_35144_1.png?v=1737023126&width=1170",
        }}
        style={{
          width: appInfo.sizes.WIDTH * 0.9,
          height: appInfo.sizes.HEIGHT * 0.25,
        }}
      />
      <Image
        source={{
          uri: "https://trendingcustom.com/cdn/shop/files/Group_35118_5737a383-59d5-4934-bd30-08d94872b47c.png?v=1729331223&width=1170",
        }}
        style={{
          width: appInfo.sizes.WIDTH * 0.9,
          height: appInfo.sizes.HEIGHT * 0.25,
        }}
      />
    </View>
  );
};

export default PromoBanner;
