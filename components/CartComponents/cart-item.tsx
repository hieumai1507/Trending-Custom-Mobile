import { CartItemType } from "@/types/cart-type";
import { Eye, Minus, Plus } from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  Modal,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PreviewModal } from "../common/preview-modal";
import { Feather } from "@expo/vector-icons";

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (quantity: number) => void;
  onRemoveItem: () => void;
  onShippingProtectionChange: (checked: boolean) => void;
  onGiftWrappingChange: (checked: boolean) => void;
}

export function CartItem({
  item,
  onQuantityChange,
  onRemoveItem,
  onShippingProtectionChange,
  onGiftWrappingChange,
}: CartItemProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);

  const handleDecrease = () => {
    if (item.quantity === 1) {
      setShowRemoveConfirmation(true);
    } else {
      onQuantityChange(item.quantity - 1);
    }
  };
  const selectedImage = item.images.find(
    (img) => img.color === item.color
  )?.url;
  const imageUrl = selectedImage || "https://via.placeholder.com/150";
  return (
    <View className="bg-white rounded-2xl border border-gray-200 p-4">
      <View className="flex flex-row  gap-4">
        <View className=" w-50">
          <Image
            source={{
              uri: imageUrl,
            }}
            className="w-40 h-40 rounded-lg object-cover"
          />
          <TouchableOpacity
            className=" bg-gray-200 p-2 rounded items-center flex-row justify-center gap-2 mt-1"
            onPress={() => setIsPreviewOpen(true)}
          >
            <Feather name="zoom-in" size={24} color="#2f80ed" />
            <Text className="text-[#2f80ed]">Preview</Text>
          </TouchableOpacity>
        </View>

        <View className="space-y-2">
          <Text className="text-lg font-bold max-w-60">
            {item.product_name}
          </Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-red-500 text-lg font-semibold">
              ${item.sale_price} USD
            </Text>
            <Text className="text-gray-400 line-through mt-1">
              ${item.original_price} USD
            </Text>
          </View>
          <Text className="text-sm">Size: {item.size}</Text>
          <Text className="text-sm">Color: {item.color}</Text>

          <View className="flex-row items-center gap-4">
            {showRemoveConfirmation ? (
              <View className="flex-row gap-2">
                <TouchableOpacity
                  className="bg-green-500 p-2 rounded"
                  onPress={() => setShowRemoveConfirmation(false)}
                >
                  <Text className="text-white">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-red-500 p-2 rounded"
                  onPress={onRemoveItem}
                >
                  <Text className="text-white">Remove</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View className="flex-row border rounded-md">
                <TouchableOpacity
                  className="p-2 border-r"
                  onPress={handleDecrease}
                >
                  <Minus size={16} />
                </TouchableOpacity>
                <Text className="p-2 text-center">{item.quantity}</Text>
                <TouchableOpacity
                  className="p-2 border-l"
                  onPress={() => onQuantityChange(item.quantity + 1)}
                >
                  <Plus size={16} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>

      <View className="mt-4 space-y-2">
        <View className="flex-row items-center justify-between p-2 bg-gray-100 rounded-lg mb-2">
          <Text className="text-sm font-bold flex-1">
            Protect Your Item ($2.99 USD)
          </Text>
          <Switch
            value={item.shippingProtection}
            onValueChange={onShippingProtectionChange}
          />
        </View>
        <View className="flex-row items-center justify-between p-2 bg-gray-200 rounded-lg">
          <Text className="text-sm font-bold">Gift Wrapping ($6.99 USD)</Text>
          <Switch
            value={item.giftWrapping}
            onValueChange={onGiftWrappingChange}
          />
        </View>
      </View>
      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        images={imageUrl}
        productName={item.product_name}
        productId={item.product_id}
        onViewProduct={() => {
          // Handle view product action
          console.log("View product:", item.product_id);
        }}
        isInCart
      />
      {/* <Modal visible={isPreviewOpen} transparent={true} animationType="slide">
        <View className=" justify-center items-center bg-black/50">
          <View className="bg-white p-4 rounded-lg w-3/4">
            <Text className="text-center font-bold mb-2">Preview</Text>
            <Image
              source={{
                uri: imageUrl,
              }}
              className="w-full h-48 object-contain rounded-lg"
            />
            <TouchableOpacity
              className="mt-2 p-2 bg-red-500 rounded"
              onPress={() => setIsPreviewOpen(false)}
            >
              <Text className="text-white text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
}
