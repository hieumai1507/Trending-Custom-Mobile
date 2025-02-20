import { COMMON } from "@/constants/textConstant";
import { priceRanges } from "@/data/filter-data";
import { CustomPriceRange } from "@/types/filters-type";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { SectionHeader } from "./section-header";

interface PriceSectionProps {
  selectedPrice: string;
  customPriceRange: CustomPriceRange;
  onPriceChange: (value: string) => void;
  onCustomPriceChange: (field: "low" | "high", value: string) => void;
  onPriceInputFocus: () => void;
}

export function PriceSection({
  selectedPrice,
  customPriceRange,
  onPriceChange,
  onCustomPriceChange,
  onPriceInputFocus,
}: PriceSectionProps) {
  const [isCustomPriceVisible, setIsCustomPriceVisible] = useState(
    selectedPrice === "custom"
  );

  const handleRadioChange = (value: string) => {
    onPriceChange(value);
    setIsCustomPriceVisible(value === "custom");
  };

  return (
    <View className="mt-6">
      <SectionHeader title={COMMON.PRICE} />
      <View className="space-y-3">
        {priceRanges.map((range) => (
          <Pressable
            key={range.value}
            className="flex-row items-center space-x-2 my-1"
            onPress={() => handleRadioChange(range.value)}
          >
            <View className="border-2 border-black rounded-full mr-2 mb-2">
              <RadioButton
                value={range.value}
                status={selectedPrice === range.value ? "checked" : "unchecked"}
                onPress={() => handleRadioChange(range.value)}
              />
            </View>
            <Text className="text-lg mb-2">{range.label}</Text>
          </Pressable>
        ))}

        {isCustomPriceVisible && (
          <View className="mt-3">
            <Text className="text-lg font-semibold">{COMMON.CUSTOM_PRICE}</Text>
            <View className="flex-row items-center space-x-2 mt-2">
              <TextInput
                className="h-10 border border-gray-300 rounded-md px-3 w-24"
                placeholder="Low"
                value={customPriceRange.low}
                onChangeText={(text) => onCustomPriceChange("low", text)}
                onFocus={onPriceInputFocus}
                keyboardType="number-pad"
              />
              <Text className="text-base">to</Text>
              <TextInput
                className="h-10 border border-gray-300 rounded-md px-3 w-24"
                placeholder={COMMON.HIGH}
                value={customPriceRange.high}
                onChangeText={(text) => onCustomPriceChange("high", text)}
                onFocus={onPriceInputFocus}
                keyboardType="number-pad"
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
