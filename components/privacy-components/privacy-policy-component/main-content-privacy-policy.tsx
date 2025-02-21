import privacyPolicyData from "@/data/policies/privacy-policy-data";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const MainContentPrivacyPolicy = () => {
  const router = useRouter();
  return (
    <View className="p-4">
      <Pressable onPress={() => router.back()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          className="mb-4"
        />
      </Pressable>
      <Text className="text-3xl font-bold text-center mb-4">
        Privacy Policy
      </Text>
      {privacyPolicyData.sections.map((section, index) => (
        <View key={index} className="mb-4">
          <Text className="text-lg font-semibold mb-2">{section.title}</Text>
          {section.content.map((paragraph, index) => (
            <Text key={index} className="leading-relaxed mb-2">
              {paragraph}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default MainContentPrivacyPolicy;
