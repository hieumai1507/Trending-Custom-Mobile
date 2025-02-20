import { View, Text } from "react-native";
import React from "react";

interface FreeShippingNoticeProps {
  remainingAmount: number;
  threshold: number;
}

export function FreeShippingNotice({
  remainingAmount,
  threshold,
}: FreeShippingNoticeProps) {
  return (
    <View className="mb-4 space-y-2 border border-gray-300 text-left px-4 py-3 rounded-md">
      <Text className="text-orange-500 font-bold text-sm">Free Shipping</Text>
      <Text className="text-gray-900 text-sm">
        Almost there! Spend ${remainingAmount.toFixed(2)} more to unlock free
        shipping on orders totalling ${threshold} or more.
      </Text>
    </View>
  );
}
