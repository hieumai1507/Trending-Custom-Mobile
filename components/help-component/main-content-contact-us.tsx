import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Linking,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { ArrowRight } from "iconsax-react-native";
import {
  concernOptions,
  contactEmail,
  helpLinks,
  responseTime,
} from "@/data/help/contact-us-data";
import { ContactUsNavigationProp } from "@/navigators/RootStackParamList";

const MainContentContactUs = () => {
  const router = useRouter();
  const navigation = useNavigation<ContactUsNavigationProp>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedConcern, setSelectedConcern] = useState("Select one");
  const [showOptions, setShowOptions] = useState(false);

  const handleReset = () => {
    setName(""); // Reset name input
    setEmail(""); // Reset email input
    setSelectedConcern("Select one"); // Reset the selected concern
  };

  return (
    <View className="bg-gray-100 p-4">
      <Pressable onPress={() => router.back()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          className="mb-4"
        />
      </Pressable>
      <View className="bg-white rounded-lg p-6">
        <Text className="text-3xl font-bold text-center mb-6">Contact Us</Text>
        <Text className="text-gray-700 text-center mb-4 text-sm font-bold">
          Please contact us using the form below or via email at
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(`mailto:${contactEmail}`)}
        >
          <Text className="text-[#5551ff] text-center text-sm font-bold">
            {contactEmail}
          </Text>
        </TouchableOpacity>
        <Text className="text-gray-700 text-center mb-6 text-sm font-bold">
          We generally respond within {responseTime} of your inquiry.
        </Text>

        <View className="space-y-4">
          <View>
            <Text className="text-gray-700 text-sm font-bold">Your name</Text>
            <TextInput
              className="border border-gray-300 rounded p-2 mt-1"
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View>
            <Text className="text-gray-700 text-sm font-bold">
              Your email <Text className="text-red-500">*</Text>
            </Text>
            <TextInput
              className="border border-gray-300 rounded p-2 mt-1"
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View>
            <Text className="text-gray-700 text-sm font-bold">
              Question/concern <Text className="text-red-500">*</Text>
            </Text>
            <TouchableOpacity
              className="border border-gray-300 rounded p-2 mt-1 bg-white"
              onPress={() => setShowOptions(!showOptions)}
            >
              <Text className="text-gray-700">{selectedConcern}</Text>
            </TouchableOpacity>
            {showOptions && (
              <View className="border border-gray-300 rounded bg-white mt-2 p-2">
                {concernOptions.map((option) => (
                  <TouchableOpacity
                    key={option.value}
                    onPress={() => {
                      setSelectedConcern(option.label);
                      setShowOptions(false);
                    }}
                    className="p-2 border-b border-gray-200"
                  >
                    <Text className="text-gray-700">{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View className="flex-row items-center justify-between border rounded p-3 mt-4">
            <View className="flex-row items-center">
              <Text className="text-sm text-gray-700">
                Tôi không phải là người máy
              </Text>
            </View>
            <View className="text-xs text-gray-500 text-right">
              <Text>reCAPTCHA</Text>
              <Text>Privacy - Terms</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              onPress={handleReset}
              className="bg-gray-200 px-6 py-2 rounded"
            >
              <Text className="text-gray-700 font-bold">Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#6ab73d] px-6 py-2 rounded">
              <Text className="text-white font-bold">Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="mt-12 text-center">
        <Text className="text-xl font-semibold mb-4">
          Here are a few things you can take care of on your own
        </Text>
        <View className="flex-wrap flex-row justify-center gap-2">
          {helpLinks.map((link) => (
            <TouchableOpacity
              key={link.label}
              onPress={() => navigation.navigate(link.link)}
            >
              <Text className="bg-gray-200 px-4 py-2 m-2 rounded-lg text-gray-700">
                {link.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default MainContentContactUs;
