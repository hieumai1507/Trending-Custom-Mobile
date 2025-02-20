import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface CategoryGridProps {
  items: { id: number; title: string }[] | string[];
  selectedIds?: number[];
  onSelect?: (id: number) => void;
  limit?: number;
}

export function CategoryGrid({
  items,
  selectedIds = [],
  onSelect,
  limit,
}: CategoryGridProps) {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 8 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        className={` flex-1 flex flex-wrap flex-row
        } justify-start`}
      >
        {displayItems.map((item, index) => {
          const isString = typeof item === "string";
          const id = isString ? index : (item as { id: number }).id;
          const title = isString ? item : (item as { title: string }).title;

          const isSelected = !isString && selectedIds.includes(id);
          const buttonClasses = `px-3 py-3 rounded-lg mb-2 mr-2 ${
            isSelected ? "bg-red-500" : "bg-gray-50"
          }`;
          const textClasses = `text-lg ${
            isSelected ? "text-white" : "text-gray-700"
          }`;

          return (
            <TouchableOpacity
              key={id}
              className={buttonClasses}
              onPress={() => onSelect?.(id)}
            >
              <Text className={textClasses}>{title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
