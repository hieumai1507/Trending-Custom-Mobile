import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface RadioGroupItemProps {
  value: string;
  checked: boolean;
  onPress?: () => void;
}

export function RadioGroupItem({
  value,
  checked,
  onPress,
}: RadioGroupItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center space-x-2"
    >
      <View
        className={`w-5 h-5 rounded-full border-2 ${
          checked ? "border-blue-500 bg-blue-500" : "border-gray-400"
        } flex items-center justify-center`}
      >
        {checked && <View className="w-2.5 h-2.5 rounded-full bg-white" />}
      </View>
      <Text className="text-base sr-only">{value}</Text>
    </TouchableOpacity>
  );
}
