import { View, Text, Pressable } from "react-native";
import React from "react";
import ReplacementReFundData from "@/data/policies/replacement-refund-data";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const MainContentReplacementRefund = () => {
  const router = useRouter();
  return (
    <View className="max-w-3xl mx-auto mt-8  p-4 bg-white">
      <Pressable onPress={() => router.back()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          className="mb-4"
        />
      </Pressable>
      <Text className="text-3xl font-bold text-center mb-2 text-gray-800">
        <Text className=" text-blue-600 mb-4">30 DAYS</Text>
      </Text>
      <Text className="text-3xl font-bold text-center mb-6 text-gray-800">
        Refund/Replacement Policy
      </Text>

      {/* First Section: Full Refund/Replacement Policy */}
      <View className="bg-white p-6 rounded-lg shadow-md mb-8">
        <Text className="text-gray-700 text-lg mb-4 text-center">
          {ReplacementReFundData.fullRefund.description}
        </Text>
        <View className="space-y-4">
          {ReplacementReFundData.fullRefund.reasons.map((reason, index) => (
            <View key={index} className="bg-blue-50 p-4 rounded-md">
              <Text className="text-gray-700 text-[16px]">{reason}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Second Section: No Refund & Replacement */}
      <View className="bg-white p-6 rounded-lg shadow-md mb-8">
        <Text className="text-xl font-semibold text-gray-800 mb-4 text-center">
          {ReplacementReFundData.noRefund.title}
        </Text>
        <Text className="text-gray-700 text-[16px] mb-4 text-center">
          {ReplacementReFundData.noRefund.description}
        </Text>
        <View className="space-y-4">
          {ReplacementReFundData.noRefund.reasons.map((reason, index) => (
            <View key={index} className="bg-blue-50 p-4 rounded-md">
              <Text className="text-gray-700 text-[16px]">{reason}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Third Section: Refund and Replacement Service Procedure */}
      <View className="bg-white p-6 rounded-lg shadow-md mb-8">
        <Text className="text-xl font-semibold text-gray-800 mb-4 text-center">
          {ReplacementReFundData.procedure.title}
        </Text>
        <View className="space-y-6">
          {ReplacementReFundData.procedure.steps.map((step, index) => (
            <View key={index} className="items-center">
              <Text className="text-lg font-semibold text-gray-700 mb-2 text-center">
                {step.title}
              </Text>
              <Text className="text-gray-700 text-[16px] text-center">
                {step.description}
                {step.link && (
                  <Text className="text-blue-500 underline">
                    {` ${step.link.text}`}
                  </Text>
                )}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Fourth Section: Refund Time */}
      <View className="bg-white p-6 rounded-lg shadow-md">
        <Text className="text-xl font-semibold text-gray-800 mb-4 text-center">
          {ReplacementReFundData.refundTime.title}
        </Text>
        <Text className="text-gray-700 text-[16px] mb-4 text-center">
          {ReplacementReFundData.refundTime.description}
        </Text>
        <View className="space-y-4">
          {ReplacementReFundData.refundTime.methods.map((method, index) => (
            <View key={index} className="bg-blue-50 p-4 rounded-md">
              <Text className="font-semibold text-gray-800 mb-2">
                {method.title}
              </Text>
              <Text className="text-gray-700">{method.time}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default MainContentReplacementRefund;
