// components/filter/shipping-section.tsx
import { COMMON } from "@/constants/textConstant";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { SectionHeader } from "./section-header";

interface ShippingSectionProps {
  selectedShipping: string[];
  onShippingChange: (value: string) => void;
}

export function ShippingSection({
  selectedShipping,
  onShippingChange,
}: ShippingSectionProps) {
  const handleShippingSelect = (value: string) => {
    onShippingChange(value);
  };

  return (
    <View className="mt-6">
      <SectionHeader title={COMMON.SHIPPING} />
      <View className="space-y-2">
        <Pressable
          className="flex-row items-center space-x-2"
          onPress={() => handleShippingSelect("standard")}
        >
          <View className="border-2 border-black rounded-[6px] mr-2 mb-2">
            <Checkbox
              status={
                selectedShipping.includes("standard") ? "checked" : "unchecked"
              }
              onPress={() => handleShippingSelect("standard")}
            />
          </View>
          <Text className="text-lg mb-2">{COMMON.STANDARD_SHIPPING}</Text>
        </Pressable>
        <Pressable
          className="flex-row items-center space-x-2"
          onPress={() => handleShippingSelect("express")}
        >
          <View className="border-2 border-black rounded-[6px] mr-2">
            <Checkbox
              status={
                selectedShipping.includes("express") ? "checked" : "unchecked"
              }
              onPress={() => handleShippingSelect("express")}
            />
          </View>
          <Text className="text-lg">{COMMON.EXPRESS_SHIPPING}</Text>
        </Pressable>
      </View>
    </View>
  );
}
