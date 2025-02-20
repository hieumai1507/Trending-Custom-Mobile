import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react-native";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 4; // Số trang tối đa hiển thị cùng lúc

    if (totalPages <= maxPagesToShow) {
      // Hiển thị tất cả nếu số trang ít hơn maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        // Nếu trang hiện tại <= 3, hiển thị từ trang 1 đến 4 và dấu "..."
        pages.push(1, 2, 3, "...");
      } else if (currentPage >= totalPages - 2) {
        // Nếu trang hiện tại gần cuối, hiển thị "..." và 4 trang cuối
        pages.push(
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        // Nếu trang hiện tại nằm giữa, hiển thị "..." ở 2 đầu
        pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...");
      }
    }
    return pages;
  };

  return (
    <View className="flex flex-row justify-center items-center mt-4">
      {/* Nút Prev */}
      <TouchableOpacity
        onPress={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-md mx-1 ${
          currentPage === 1 ? "bg-gray-200" : "bg-gray-100"
        }`}
      >
        <ChevronLeft size={20} color="gray" />
      </TouchableOpacity>

      {/* Danh sách số trang */}
      <View className="items-center">
        <FlatList
          horizontal
          data={getPageNumbers()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            item === "..." ? (
              <View className="w-10 h-10 flex items-center justify-center mx-1">
                <Text className="text-gray-500 font-semibold">...</Text>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => setCurrentPage(Number(item))}
                className={`w-10 h-10 flex items-center justify-center rounded-md mx-1 ${
                  currentPage === item ? "bg-black text-white" : "bg-gray-100"
                }`}
              >
                <Text
                  className={`font-semibold ${
                    currentPage === item ? "text-white" : "text-black"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )
          }
        />
      </View>

      {/* Nút Next */}
      <TouchableOpacity
        onPress={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-md mx-1 ${
          currentPage === totalPages ? "bg-gray-200" : "bg-gray-100"
        }`}
      >
        <ChevronRight size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
