// components/ui/checkbox.tsx
import React from "react";
import { Pressable, View } from "react-native";
import { Check } from "lucide-react-native";

interface CheckboxProps {
  checked: boolean;
  onPress?: () => void;
}

export function Checkbox({ checked, onPress }: CheckboxProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`w-5 h-5 border-2 rounded ${
        checked ? "bg-blue-500 border-blue-500" : "border-gray-400"
      }`}
    >
      {checked && (
        <View className="flex items-center justify-center h-full">
          <Check size={16} color="white" />
        </View>
      )}
    </Pressable>
  );
}
