import { appInfo } from "@/constants/appInfos";
import { ProductImage } from "@/types/products-type";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";

interface ImageGalleryProps {
  images: ProductImage[];
  selectedColor: string | null;
  onSelectColor: (color: string) => void;
  onImageIndexChange: (index: number) => void; // Add this prop
}

const ImageGallery = ({
  images,
  selectedColor,
  onSelectColor,
  onImageIndexChange, // Add this prop
}: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Khi selectedColor thay đổi, cập nhật ảnh tương ứng
  useEffect(() => {
    if (selectedColor) {
      const index = images.findIndex((img) => img.color === selectedColor);
      if (index !== -1) setSelectedIndex(index);
    }
  }, [selectedColor, images]);

  // Call onImageIndexChange when selectedIndex changes
  useEffect(() => {
    onImageIndexChange(selectedIndex);
  }, [selectedIndex, onImageIndexChange]);

  return (
    <View className="relative">
      {/* Ảnh chính */}
      <View className="relative w-full aspect-square overflow-hidden rounded-lg">
        <Image
          source={{
            uri:
              images[selectedIndex]?.url || "https://via.placeholder.com/150",
          }}
          className="rounded-lg mx-auto"
          style={{
            width: appInfo.sizes.WIDTH * 0.95,
            height: appInfo.sizes.HEIGHT * 0.5,
          }}
        />

        {/* Nút yêu thích */}
        <TouchableOpacity
          className="absolute right-2 top-2 bg-white/80 p-2 rounded-full"
          onPress={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart
            size={20}
            color={isWishlisted ? "red" : "black"}
            fill={isWishlisted ? "red" : "white"}
          />
        </TouchableOpacity>

        {/* Nút chuyển ảnh */}
        {images.length > 1 && (
          <>
            <TouchableOpacity
              className="absolute left-2 top-1/2 -mt-4 bg-white/80 shadow-gray-400 shadow-sm p-2 rounded-full"
              onPress={() => {
                setSelectedIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                );
              }}
            >
              <ChevronLeft size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              className="absolute right-2 top-1/2 -mt-4 bg-white/80 shadow-gray-400 shadow-sm p-2 rounded-full"
              onPress={() => {
                setSelectedIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                );
              }}
            >
              <ChevronRight size={20} color="black" />
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Danh sách ảnh nhỏ */}
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item) => item.color}
        className="flex-1 mt-4"
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className={`w-16 h-16 mr-2 overflow-hidden rounded-lg border-2 ${
              index === selectedIndex ? "border-black" : "border-transparent"
            }`}
            onPress={() => {
              setSelectedIndex(index);
              onSelectColor(item.color);
            }}
          >
            <Image
              source={{ uri: item.url || "https://via.placeholder.com/150" }}
              className="w-full h-full object-cover"
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ImageGallery;
