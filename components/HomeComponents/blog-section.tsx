import { View, Text, FlatList, Pressable } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import BlogCard from "../common/blog-card";
import blogPostData from "@/data/blog-posts";
import { BlogPost } from "@/types/blogs-type";
import { useNavigation } from "expo-router";
import { DrawerNavProp } from "@/navigators/RootDrawerParamList";

const BlogSection = () => {
  const [blog, setBlog] = useState<BlogPost[]>([]);
  const navigation = useNavigation<DrawerNavProp>();
  const randomBlogs = useMemo(() => {
    const getRandomProducts = (arr: BlogPost[], n: number): BlogPost[] => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    };

    return getRandomProducts(blogPostData, 6);
  }, []); // Empty dependency array: only run this once
  useEffect(() => {
    setBlog(randomBlogs);
  }, [randomBlogs]);
  return (
    <View className="py-6 bg-white mt-8">
      <View className="items-center px-4">
        <View className="items-center justify-between mb-4">
          <Text className="text-2xl font-semibold mb-4">Our Blog</Text>
          <Pressable onPress={() => navigation.navigate("Blogs")}>
            <Text className="text-gray-600 text-lg">See all posts →</Text>
          </Pressable>
        </View>

        <FlatList
          data={blog}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <BlogCard post={item} />}
          contentContainerStyle={{ gap: 16 }}
          horizontal={true} // Make it scroll horizontally
          showsHorizontalScrollIndicator={false} // Optional: Hide the scroll indicator
        />
      </View>
    </View>
  );
};

export default BlogSection;
