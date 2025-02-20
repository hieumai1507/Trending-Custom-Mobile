import { appInfo } from "@/constants/appInfos";
import { HomeStackNavigationProp } from "@/navigators/RootStackParamList";
import { BlogPost } from "@/types/blogs-type";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface ProductTileProp {
  post: BlogPost;
  isInBlogsScreen?: boolean;
}
const BlogCard = ({ post, isInBlogsScreen }: ProductTileProp) => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const handleClickNavigate = () => {
    navigation.navigate("BlogDetail", {
      id: post.id,
      slug: post.slug,
    });
  };
  return isInBlogsScreen ? (
    <TouchableOpacity
      onPress={handleClickNavigate}
      className="group cursor-pointer w-[48%] p-2 m-1"
    >
      <View className="overflow-hidden relative rounded-lg flex text-left">
        <Image
          source={{ uri: post.poster || "/placeholder.svg" }}
          alt={post.slug}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          resizeMode="cover"
          style={{
            width: appInfo.sizes.WIDTH * 0.5,
            height: appInfo.sizes.HEIGHT * 0.15,
          }}
        />
      </View>
      {/* product info */}
      <View className=" space-y-2">
        <Text className="text-lg" numberOfLines={2} ellipsizeMode="tail">
          {post.title}
        </Text>
        {/* price */}
        <Text className="text-sm text-gray-500">{post.date}</Text>
      </View>
      <View className=" pb-4">
        <Text className="text-black underline text-sm">Read More</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={handleClickNavigate}>
      <View
        className="overflow-hidden relative rounded-lg flex text-left"
        style={{
          maxWidth: appInfo.sizes.WIDTH * 0.7,
        }}
      >
        <Image
          source={{ uri: post.poster }}
          style={{
            width: appInfo.sizes.WIDTH * 0.7,
            height: appInfo.sizes.HEIGHT * 0.25,
            borderRadius: 5,
          }}
        />
        <View className="p-4">
          <Text
            className="text-xl font-medium mb-2 leading-6"
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              maxWidth: appInfo.sizes.WIDTH * 0.65,
            }}
          >
            {post.title}
          </Text>
          <Text className="text-sm text-gray-500">{post.date}</Text>
        </View>
        <View className="px-4 pb-4">
          <Text className="text-[#007185] underline text-sm">Read More</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BlogCard;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});
