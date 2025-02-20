import { View, Text, Image, FlatList } from "react-native";
import React from "react";

interface MediaLogo {
  id: number;
  name: string;
  image: string;
  width: number;
}

const mediaLogos: MediaLogo[] = [
  {
    id: 1,
    name: "RFDTV",
    image:
      "https://trendingcustom.com/cdn/shop/files/rfdtv_200x.png?v=1649814658",
    width: 96,
  },
  {
    id: 2,
    name: "FOX",
    image:
      "https://trendingcustom.com/cdn/shop/files/fox_200x.png?v=1649814488",
    width: 80,
  },
  {
    id: 3,
    name: "News",
    image:
      "https://trendingcustom.com/cdn/shop/files/newsnet_200x.png?v=1649814488",
    width: 80,
  },
  {
    id: 4,
    name: "TCN",
    image:
      "https://trendingcustom.com/cdn/shop/files/ncn_200x.png?v=1649814488",
    width: 64,
  },
  {
    id: 5,
    name: "NBC",
    image:
      "https://trendingcustom.com/cdn/shop/files/nbc_200x.png?v=1649814488",
    width: 96,
  },
];

export function MediaLogos() {
  return (
    <View className="py-6 bg-white items-center mt-8 mb-8">
      <Text className="text-3xl font-semibold mb-4 text-center">
        As seen on
      </Text>
      <FlatList
        data={mediaLogos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={{ alignItems: "center" }}
        renderItem={({ item }) => (
          <View className="mx-2 my-2 items-center align-middle">
            <Image
              source={{ uri: item.image }}
              className="h-12"
              style={{ width: item.width }}
              resizeMode="contain"
            />
          </View>
        )}
      />
      <Text className="mt-3 text-lg text-[#9e9ea7] text-center">
        And over 200 news sites
      </Text>
    </View>
  );
}
