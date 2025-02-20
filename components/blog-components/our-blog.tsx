import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import Pagination from "../common/pagination";
import blogPostData from "@/data/blog-posts";
import BlogCard from "../common/blog-card";

const itemsPerPage = 6;

const OurBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numColumns, setNumColumns] = useState(2); // Define the number of columns
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = blogPostData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogPostData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <View className=" bg-white py-6 px-4 items-center">
      <Text className="text-3xl font-semibold text-center mb-6">Our Blog</Text>

      <FlatList
        data={currentPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BlogCard post={item} isInBlogsScreen />}
        numColumns={numColumns}
        key={numColumns.toString()}
      />

      <View className="mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={handlePageChange}
        />
      </View>
    </View>
  );
};

export default OurBlog;
