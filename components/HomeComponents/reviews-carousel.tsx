import { appInfo } from "@/constants/appInfos";
import { ReviewCardNavigationProp } from "@/navigators/RootStackParamList";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useRef, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

interface Review {
  id: number;
  image: string;
  alt: string;
}

const reviews: Review[] = [
  {
    id: 1,
    image:
      "https://trendingcustom.com/cdn/shop/files/BWCix-K0p_mid_200x.png?v=1732518020",
    alt: "Beach sunset scene with chairs",
  },
  {
    id: 2,
    image:
      "https://trendingcustom.com/cdn/shop/files/2_4704a7b3-6912-4c44-843c-7af2b85d3350_200x.png?v=1732518082",
    alt: "Custom ornament with silhouettes",
  },
  {
    id: 3,
    image:
      "https://trendingcustom.com/cdn/shop/files/6_e17493d0-dc5e-42af-882b-16319f76fe59_200x.png?v=1732518147",
    alt: "Live Simple Love Big photo",
  },
  {
    id: 4,
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34894_200x.png?v=1728357839",
    alt: "Scrabble style word art",
  },
  {
    id: 5,
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34895_200x.png?v=1728357839",
    alt: "Custom family sign with mug",
  },
  {
    id: 6,
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34896_200x.png?v=1728357839",
    alt: "Christmas ornament",
  },
  {
    id: 7,
    image:
      "https://trendingcustom.com/cdn/shop/files/image_c7389e35-c690-4db2-9eff-c7a2f9228649_200x.png?v=1728358245",
    alt: "Holiday themed number decoration",
  },
];

export default function ReviewCarousel() {
  const navigation = useNavigation<ReviewCardNavigationProp>();
  const flatListRef = useRef<FlatList>(null);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const itemWidth = appInfo.sizes.WIDTH * 0.6 + 20; // Cộng thêm margin

  const scroll = (direction: "left" | "right") => {
    if (!flatListRef.current) return;

    let newOffset =
      direction === "left"
        ? Math.max(currentScrollPosition - itemWidth, 0) // Không cuộn quá giới hạn trái
        : Math.min(
            currentScrollPosition + itemWidth,
            itemWidth * (reviews.length - 1)
          ); // Không cuộn quá phải

    flatListRef.current.scrollToOffset({
      offset: newOffset,
      animated: true,
    });

    setCurrentScrollPosition(newOffset);
  };

  const renderItem = ({ item }: { item: Review }) => (
    <View className="rounded-lg mx-2">
      <Image
        source={{ uri: item.image }}
        alt={item.alt}
        style={{
          width: appInfo.sizes.WIDTH * 0.55,
          height: appInfo.sizes.HEIGHT * 0.3,
          borderRadius: 5,
          marginLeft: 10,
        }}
      />
    </View>
  );

  return (
    <View className="w-full px-3 py-12">
      <View>
        <View className="text-center mb-8">
          <Text className="text-2xl font-semibold text-center mb-4">
            See what people are saying!
          </Text>
          <Pressable onPress={() => navigation.navigate("Reviews")}>
            <Text className="text-lg font-normal text-center mb-1">
              See all reviews →
            </Text>
          </Pressable>
        </View>

        <View className="relative">
          <FlatList
            ref={flatListRef}
            data={reviews}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={itemWidth}
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: 16 }}
            onScroll={(event) =>
              setCurrentScrollPosition(event.nativeEvent.contentOffset.x)
            }
            scrollEventThrottle={16}
          />

          {/* Nút scroll trái */}
          <Pressable
            className="absolute left-0 top-[50%] -translate-y-1/2 -translate-x-4 bg-white rounded-full opacity-80 p-2"
            onPress={() => scroll("left")}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: currentScrollPosition > 0 ? 0.8 : 0.5, // Ẩn khi không thể cuộn
            }}
          >
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </Pressable>

          {/* Nút scroll phải */}
          <Pressable
            className="absolute right-0 top-[50%] -translate-y-1/2 translate-x-4 bg-white opacity-80 rounded-full p-2"
            onPress={() => scroll("right")}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity:
                currentScrollPosition < itemWidth * (reviews.length - 1)
                  ? 0.8
                  : 0.5, // Ẩn khi hết danh sách
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
