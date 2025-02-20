import React, { useState } from "react";
import {
  Modal,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { ChevronLeft, ChevronRight, X } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProp } from "@/navigators/RootStackParamList";
import { ProductImage } from "@/types/products-type";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: ProductImage[] | string;
  onViewProduct: () => void;
  productName: string;
  productId: string;
  isInCart?: boolean;
}

export function PreviewModal({
  isOpen,
  onClose,
  images,
  onViewProduct,
  productId,
  productName,
  isInCart,
}: PreviewModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigation = useNavigation<HomeStackNavigationProp>();

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Modal
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}
      animationType="fade"
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-full bg-white rounded-lg overflow-hidden">
            <View className="p-4 border-b border-gray-300 flex-row justify-between items-center">
              <Text className="text-lg font-bold">Preview</Text>
              <TouchableOpacity onPress={onClose}>
                <X width={24} height={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="relative aspect-[4/3] overflow-hidden">
              <Image
                source={{
                  uri:
                    images[currentImageIndex]?.url ||
                    images ||
                    "/placeholder.svg",
                }}
                resizeMode="contain"
                className="w-full h-full"
              />
              {images.length > 1 && (
                <>
                  <TouchableOpacity
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 shadow-gray-400 shadow-sm p-2 bg-white/80  rounded-full"
                    onPress={handlePrevious}
                  >
                    <ChevronLeft width={24} height={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 shadow-gray-400 shadow-sm p-2 bg-white/80  rounded-full"
                    onPress={handleNext}
                  >
                    <ChevronRight width={24} height={24} color="black" />
                  </TouchableOpacity>
                </>
              )}
            </View>
            {!isInCart ? (
              <View className="p-4 border-t border-gray-300">
                <TouchableOpacity
                  className="w-full bg-green-600 py-3 rounded-lg"
                  onPress={() => {
                    onViewProduct();
                    onClose();
                    navigation.navigate("ProductDetail", {
                      productId: productId,
                      productName: productName,
                    });
                  }}
                >
                  <Text className="text-white text-center text-lg font-bold">
                    View Product
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              ""
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
