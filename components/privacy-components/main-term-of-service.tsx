import { View, Text, TouchableOpacity, Linking, Pressable } from "react-native";
import React from "react";
import termsData from "@/data/policies/termData";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const MainContentTermOfService = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white p-4">
      <Pressable onPress={() => router.back()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          className="mb-4"
        />
      </Pressable>
      <View className="items-center mb-6">
        <Text className="text-2xl font-bold text-gray-900 text-center">
          {termsData.title}
        </Text>
      </View>

      {termsData.sections.map((section, index) => (
        <View key={index} className="mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-2">
            {section.title}
          </Text>
          {section.content.map((paragraph, pIndex) => (
            <Text key={pIndex} className="text-gray-700 mb-2 leading-relaxed">
              {paragraph}
            </Text>
          ))}
        </View>
      ))}

      <View className="items-center mt-8">
        <Text className="text-gray-500 text-center mb-2">
          Questions about the Terms of Service should be sent to us at
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(`mailto:${termsData.contactEmail}`)}
        >
          <Text className="text-blue-500 underline">
            {termsData.contactEmail}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainContentTermOfService;
