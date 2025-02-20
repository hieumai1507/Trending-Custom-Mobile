import { View, Text, Image, Pressable, FlatList } from "react-native";
import React from "react";
import { appInfo } from "@/constants/appInfos";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Safe Payment",
    description:
      "We take your privacy seriously and protect it with complete security.",
    icon: "https://trendingcustom.com/cdn/shop/files/transaction_1_2eaee27c-2af9-4df1-8def-51d50e3854d8_100x.png?v=1728283255",
  },
  {
    title: "Secure Logistic",
    description:
      "Package safety - Full refund for your damaged or lost package.",
    icon: "https://trendingcustom.com/cdn/shop/files/arrow_1_3252f918-c202-426f-9796-f63ac5a91dbd_100x.png?v=1728283322",
  },
  {
    title: "Secure Privacy",
    description:
      "We take all necessary precautions to protect your personal information.",
    icon: "https://trendingcustom.com/cdn/shop/files/insurance_1_1_4c25f3d4-543c-409e-923d-5fea976e6770_100x.png?v=1728283338",
  },
  {
    title: "Express Shipping",
    description: "Available as Standard or Express delivery",
    icon: "https://trendingcustom.com/cdn/shop/files/global_1_1c58fac9-e205-4691-b6ed-4b38aae5f765_100x.png?v=1728283356",
  },
];

export default function SellingPointSection() {
  const renderItem = ({ item }: { item: Feature }) => (
    <View className="p-4 rounded-lg bg-white items-center">
      <View className="mb-2 flex justify-center">
        <Image
          source={{ uri: item.icon }}
          alt={item.title}
          style={{
            width: appInfo.sizes.WIDTH * 0.18,
            height: appInfo.sizes.HEIGHT * 0.1,
          }}
        />
      </View>
      <Text className="text-xl font-semibold mb-1 text-center">
        {item.title}
      </Text>
      <Text className="text-base text-gray-500 mb-2 text-center px-6 mx-10 my-2">
        {item.description}
      </Text>
      <Pressable className="text-base  underline text-center">
        <Text className="underline">Learn More</Text>
      </Pressable>
    </View>
  );

  return (
    <View className="w-full py-6 px-12 mt-5">
      <FlatList
        data={features}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ gap: 16 }} // Tạo khoảng cách giữa các item
      />
    </View>
  );
}
