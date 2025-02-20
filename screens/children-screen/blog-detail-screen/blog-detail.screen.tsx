import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import {
  BlogDetailNavigationProp,
  RootStackParamList,
} from "@/navigators/RootStackParamList";
import MainContentBlogDetail from "@/components/blog-detail-components/main-content-blog-detail";
import { BlogPost } from "@/types/blogs-type";
import { useNavigation } from "expo-router";
import blogPostData from "@/data/blog-posts";

type BlogDetailRouteProp = RouteProp<RootStackParamList, "BlogDetail">;
const BlogDetailScreen = () => {
  const route = useRoute<BlogDetailRouteProp>();
  const { id } = route.params;
  const [blog, setBlog] = useState<BlogPost | undefined>(undefined);
  const navigation = useNavigation();
  const getBlogPostById = (id: string): BlogPost | undefined => {
    return blogPostData.find((post) => post.id.toString() === id) as
      | BlogPost
      | undefined;
  };
  useEffect(() => {
    if (id) {
      const blogPost = getBlogPostById(id);
      setBlog(blogPost);
    }
  }, [id]);

  if (!blog) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <FlatList
      className=" bg-white pt-5"
      data={[{ key: "mainContentCart" }]} // Dummy data to render SectionProduct
      renderItem={() => (
        <MainContentBlogDetail blog={blog} navigation={navigation} />
      )} // Render SectionProduct
      keyExtractor={(item) => item.key}
    />
  );
};

export default BlogDetailScreen;
