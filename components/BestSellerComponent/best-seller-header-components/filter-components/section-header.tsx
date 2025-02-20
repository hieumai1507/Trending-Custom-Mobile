// components/filter/section-header.tsx
import React from "react";
import { View, Text } from "react-native";

interface SectionHeaderProps {
  title: string;
  count?: number;
}

export function SectionHeader({ title, count }: SectionHeaderProps) {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <Text className="text-2xl font-bold">{title}</Text>
      {typeof count !== "undefined" && (
        <Text className="text-sm text-gray-500">({count})</Text>
      )}
    </View>
  );
}
