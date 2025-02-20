import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { BlogPost } from "@/types/blogs-type";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import ImageGalleryBlog from "./image-gallery";
interface MainContentProductDetailProp {
  blog: BlogPost;
  navigation: any;
}
const MainContentBlogDetail = ({
  blog,
  navigation,
}: MainContentProductDetailProp) => {
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const handleImageIndexChange = (index: number) => {
    setSelectedImageIndex(index);
  };
  if (!blog.images) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View className="flex-1 p-4 bg-white">
      <Pressable onPress={() => router.back()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          className="mb-4"
        />
      </Pressable>
      <ImageGalleryBlog
        images={blog.images}
        onImageIndexChange={handleImageIndexChange} // Truyền hàm này
      />
    </View>
  );
};

export default MainContentBlogDetail;
