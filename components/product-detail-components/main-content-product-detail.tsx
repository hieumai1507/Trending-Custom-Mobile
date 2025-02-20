import { addToCart } from "@/stores/shop/cart-slice";
import { Product } from "@/types/products-type";
import { MaterialIcons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import ImageGallery from "./image-gallery";

interface MainContentProductDetailProp {
  product: Product;
  navigation: any;
}

const MainContentProductDetail = ({
  product,
  navigation,
}: MainContentProductDetailProp) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  // Thêm state để theo dõi index ảnh đang hiển thị
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Khi vào trang, chọn ảnh và màu đầu tiên
  useEffect(() => {
    if (product.images.length > 0) {
      setSelectedColor(product.images[0].color);
      setSelectedImageIndex(0); // Cập nhật selectedImageIndex
    }
  }, [product]);

  // Hàm để cập nhật màu khi index ảnh thay đổi (từ ImageGallery)
  const handleImageIndexChange = (index: number) => {
    setSelectedImageIndex(index);
    setSelectedColor(product.images[index].color);
  };

  const handleAddToCart = () => {
    console.log("Add product to cart");

    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }
    dispatch(
      addToCart({
        product,
        quantity,
        size: selectedSize,
        color: selectedColor,
      })
    );

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "HomeStack", state: { routes: [{ name: "Cart" }] } }],
      })
    );

    Toast.show({
      type: "success",
      text1: "Thông báo",
      text2: `You added the product : ${product.product_name} successfully!!`,
    });
  };

  const calculateDiscountPercentage = () => {
    if (product.original_price && product.sale_price) {
      return (
        ((product.original_price - product.sale_price) /
          product.original_price) *
        100
      ).toFixed(0);
    }
    return null;
  };

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

      {/* Truyền selectedColor và hàm onImageIndexChange vào ImageGallery */}
      <ImageGallery
        images={product.images}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        onImageIndexChange={handleImageIndexChange} // Truyền hàm này
      />

      <Text className="text-2xl font-medium mt-4">{product.product_name}</Text>
      <Text className="text-xl font-semibold text-gray-600 mt-2">
        ${product.sale_price}
      </Text>

      {product.sale_price !== product.original_price && (
        <View className="flex flex-row gap-2 pl-2">
          <Text className="text-gray-400 line-through text-lg">
            ${product.original_price}
          </Text>
          {calculateDiscountPercentage() && (
            <Text className="text-[#AB3042] font-semibold text-lg">
              -{calculateDiscountPercentage()}%
            </Text>
          )}
        </View>
      )}

      {/* Chọn màu */}
      <View className="mt-4">
        <Text className="font-semibold text-lg">Select Color</Text>
        <FlatList
          horizontal
          data={product.colors}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Pressable
              className={`px-4 py-2 mb-4 rounded-lg mx-2 border ${
                selectedColor === item
                  ? "border-green-600 bg-green-100"
                  : "border-gray-400"
              }`}
              onPress={() => setSelectedColor(item)}
            >
              <Text className="text-center text-lg">{item}</Text>
            </Pressable>
          )}
        />
      </View>

      {/* Chọn size */}
      <View className="mt-4">
        <Text className="font-semibold text-lg">Select Size</Text>
        <FlatList
          horizontal
          data={product.sizes}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Pressable
              className={`px-4 py-2 mb-4 rounded-lg mx-2 border ${
                selectedSize === item
                  ? "border-green-600 bg-green-100"
                  : "border-gray-400"
              }`}
              onPress={() => setSelectedSize(item)}
            >
              <Text className="text-center text-lg">{item}</Text>
            </Pressable>
          )}
        />
      </View>

      <View className="flex-row items-center justify-between space-x-4 mt-4">
        <View className="border border-gray-400 rounded-md flex-row items-center">
          <TouchableOpacity
            className="px-3 py-2"
            onPress={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            <Text className="text-lg">-</Text>
          </TouchableOpacity>
          <Text className="px-4 text-lg">{quantity}</Text>
          <TouchableOpacity
            className="px-3 py-2"
            onPress={() => setQuantity((prev) => prev + 1)}
          >
            <Text className="text-lg">+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="bg-green-600 py-3 px-6 rounded-lg"
          onPress={handleAddToCart}
        >
          <Text className="text-white font-bold text-lg">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainContentProductDetail;
