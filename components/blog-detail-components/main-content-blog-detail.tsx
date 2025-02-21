import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { BlogPost } from "@/types/blogs-type";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import ImageGalleryBlog from "./image-gallery-blog";
import { BlogContentRenderer } from "./blog-content-renderer";
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
        <Text className=" my-2 p-3 rounded-[8px] bg-[#f2f2f7] text-lg max-w-[80px] text-center">
          Back
        </Text>
      </Pressable>
      <Text className="text-3xl font-medium mb-2">{blog.title}</Text>
      <ImageGalleryBlog
        images={blog.images}
        onImageIndexChange={handleImageIndexChange} // Truyền hàm này
      />

      {/* Render Blog Content */}
      <View className="mt-4">
        <BlogContentRenderer content={blog.content} />
      </View>
    </View>
  );
};

export default MainContentBlogDetail;
