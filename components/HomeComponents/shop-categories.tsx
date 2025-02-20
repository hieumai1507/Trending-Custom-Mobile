import { View, Text, Image, Pressable, FlatList } from "react-native";
import React from "react";

interface Category {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const categories: Category[] = [
  {
    id: "1",
    title: "Music Fridge Magnet",
    image:
      "https://trendingcustom.com/cdn/shop/files/3c652c223e657d65757775736a7675683e2a292c153233302915181833352476757775737675757076717e72183022256a76692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d3335322_400x.webp?v=1737437249",
    alt: "Custom music player magnet with artwork",
  },
  {
    id: "2",
    title: "Wooden Plaque",
    image:
      "https://trendingcustom.com/cdn/shop/files/3c652c223e657d65757775736a7776683d25127708702f300d3d1818757377767674777176767f183022256a75692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352_400x.webp?v=1737437367",
    alt: "My Missing Piece wooden plaque",
  },
  {
    id: "3",
    title: "LED Night Light",
    image:
      "https://trendingcustom.com/cdn/shop/files/image-2_a07b00ee-57ca-4c35-a52b-e304948d7eab_400x.png?v=1736498998",
    alt: "Decorative LED night light",
  },
  {
    id: "4",
    title: "Poster",
    image:
      "https://trendingcustom.com/cdn/shop/files/3c652c223e657d65757775736a777168050a280034150305023618187573777577717270777672183022256a73692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352_400x.webp?v=1737437563",
    alt: "Custom couple poster artwork",
  },
];

const CategoryItem = ({ item }: { item: Category }) => {
  return (
    <Pressable key={item.title} className="w-[50%] p-3">
      <View className="p-0">
        <View className="">
          <Image
            source={{ uri: item.image }}
            className="w-full h-auto rounded-md aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </View>
      </View>
      <View className="p-3 pt-2">
        <Text className="font-medium text-[16px] text-center">
          {item.title}
        </Text>
        <Text className="sr-only">{item.alt}</Text>
      </View>
    </Pressable>
  );
};

export default function ShopCategories() {
  return (
    <View className="mt-5">
      <View className="mx-auto">
        <View className="items-center mb-10">
          <Text className="text-2xl font-semibold mb-4 text-center">
            Shop by Category
          </Text>
          <Text className="text-lg font-normal text-center mx-9">
            Looking for custom ornaments or home decor? You'll find the perfect
            gift for any occasion right here!
          </Text>
        </View>

        <FlatList
          keyExtractor={(item) => item.id}
          data={categories}
          numColumns={2}
          renderItem={({ item }: { item: Category }) => (
            <CategoryItem item={item} />
          )}
        />
      </View>
    </View>
  );
}
