import { View, Text, TouchableOpacity, Linking, Pressable } from "react-native";
import React from "react";
import ipClaimData from "@/data/policies/ip-claim-data";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const MainContentIntellectualPropertyClaim = () => {
  const router = useRouter();
  return (
    <View className="p-4 bg-gray-100">
      <Pressable onPress={() => router.back()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          className="mb-4"
        />
      </Pressable>
      <View className="max-w-3xl mx-auto mt-8">
        <Text className="text-3xl font-bold text-center mb-6 text-gray-800">
          {ipClaimData.title}
        </Text>

        {ipClaimData.sections.map((section, index) => (
          <View key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <Text className="text-2xl font-semibold mb-4 text-gray-800">
              {section.title}
            </Text>
            {section.content.map((paragraph, pIndex) => (
              <Text key={pIndex} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </Text>
            ))}
          </View>
        ))}

        {ipClaimData.complaintLink && (
          <View className="items-center mt-8">
            <Text className="text-gray-500 text-center mb-2">
              You can file complaints through the link below:
            </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(ipClaimData.complaintLink)}
              className="bg-blue-500 py-2 px-4 rounded-lg shadow-md"
            >
              <Text className="text-white text-lg font-semibold">
                File Complaint
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default MainContentIntellectualPropertyClaim;
