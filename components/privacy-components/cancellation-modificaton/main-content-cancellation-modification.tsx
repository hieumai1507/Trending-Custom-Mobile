import { View, Text, Pressable } from "react-native";
import React from "react";
import cancellationModificationData from "@/data/policies/cancellation-modification-data ";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const MainContentCancellationAndModification = () => {
  const router = useRouter();

  return (
    <View className=" mx-auto ml-2">
      <Pressable onPress={() => router.back()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          className="mb-4"
        />
      </Pressable>
      <Text className="text-3xl font-bold text-center mb-6">
        {cancellationModificationData.title}
      </Text>
      {cancellationModificationData.sections.map((section, index) => (
        <View key={index} className="mb-6">
          {section.content.map((paragraph, idx) => (
            <Text key={idx} className="mb-2 leading-relaxed">
              {paragraph}
            </Text>
          ))}
        </View>
      ))}
      <Text className="mb-12 leading-relaxed font-semibold">
        {cancellationModificationData.note}
      </Text>
    </View>
  );
};

export default MainContentCancellationAndModification;
