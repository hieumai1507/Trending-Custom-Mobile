import React from "react";
import { View, Text } from "react-native";

interface PriceSectionProps {
  currentPrice: number;
  originalPrice: number;
}

export function PriceSection({
  currentPrice,
  originalPrice,
}: PriceSectionProps) {
  const isSamePrice = currentPrice === originalPrice;
  const calculatedDiscount = isSamePrice
    ? 0
    : ((originalPrice - currentPrice) / originalPrice) * 100;

  return (
    <View className="flex items-baseline gap-2">
      <Text className="text-[#2BA346] font-medium text-[16px]">
        ${currentPrice.toFixed(2)} USD
      </Text>
      {!isSamePrice && (
        <View className="flex flex-row space-x-2">
          <Text className="text-gray-500 line-through text-sm">
            ${originalPrice.toFixed(2)} USD
          </Text>
          {calculatedDiscount > 0 && (
            <View className="bg-[#fef1f1]">
              <Text className="text-[#fc4545] text-[14px] rounded-[6px] font-semibold py-[2px] px-[6px]">
                {calculatedDiscount.toFixed(0)}% OFF
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
