import { appInfo } from "@/constants/appInfos";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useWindowDimensions } from "react-native";

interface ActionButtonsProps {
  onCancel: () => void;
  onApply: () => void;
  cancelText?: string;
  applyText?: string;
}

export function ActionButtons({
  onCancel,
  onApply,
  cancelText = "Cancel",
  applyText = "Apply",
}: ActionButtonsProps) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 600;

  return (
    <View className="p-4 border-t border-gray-200 gap-4 flex-1 flex flex-wrap flex-row">
      <TouchableOpacity
        className="items-center justify-center px-3 py-3 rounded-lg border border-gray-400 bg-white "
        style={{
          flex: isSmallScreen ? 1 : 0.5,
          width: appInfo.sizes.WIDTH * 0.25,
        }}
        onPress={onCancel}
      >
        <Text className="text-black font-bold text-lg">{cancelText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center justify-center px-3 py-3 rounded-lg bg-red-500 "
        style={{
          flex: isSmallScreen ? 1 : 0.5,
          width: appInfo.sizes.WIDTH * 0.25,
        }}
        onPress={onApply}
      >
        <Text className="text-white font-bold text-lg">{applyText}</Text>
      </TouchableOpacity>
    </View>
  );
}
