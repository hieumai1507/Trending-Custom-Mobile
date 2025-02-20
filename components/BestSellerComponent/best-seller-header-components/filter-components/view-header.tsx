import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

interface ViewHeaderProps {
  title: string;
  onBack: () => void;
}

export function ViewHeader({ title, onBack }: ViewHeaderProps) {
  return (
    <View className="flex-row items-center p-3 border-b border-gray-200">
      <TouchableOpacity className="mr-4" onPress={onBack}>
        <ChevronLeft size={24} color="black" />
      </TouchableOpacity>
      <Pressable onPress={onBack}>
        <Text className="text-2xl font-bold">{title}</Text>
      </Pressable>
    </View>
  );
}
