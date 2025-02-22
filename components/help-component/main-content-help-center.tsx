import { appInfo } from "@/constants/appInfos";
import { faqData, FaqItem, helpTopics } from "@/data/help/help-center-data";
import { HelpCenterNavigationProp } from "@/navigators/RootStackParamList";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { InputComponent } from "../common";

const MainContentHelpCenter = () => {
  const router = useRouter();
  const navigation = useNavigation<HelpCenterNavigationProp>();
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const contentRefs = useRef<{ [key: string]: HTMLDivElement }>({});

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion((prev) => (prev === questionId ? null : questionId));
  };

  const filteredFaqs = faqData.filter((faq: FaqItem) => {
    const questionMatch = faq.question
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const answerMatch = faq.answer.some((item) => {
      if (typeof item === "string") {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (typeof item === "object" && item.content) {
        return item.content.some((contentItem) =>
          contentItem.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else if (typeof item === "object" && item.list) {
        return item.list.some((listItem) =>
          listItem.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return false;
    });

    return questionMatch || answerMatch;
  });
  useEffect(() => {
    if (expandedQuestion) {
      // Get the height of the content when it's expanded
      const contentHeight = contentRefs.current[expandedQuestion]?.scrollHeight;

      // Apply the transition and set the height to auto (for animation)
      if (contentRefs.current[expandedQuestion]) {
        contentRefs.current[
          expandedQuestion
        ].style.height = `${contentHeight}px`;
      }
    }

    return () => {
      // Cleanup when component unmounts or expandedQuestion changes
      if (expandedQuestion && contentRefs.current[expandedQuestion]) {
        contentRefs.current[expandedQuestion].style.height = "0px"; // Reset height when unmounting/collapsing
      }
    };
  }, [expandedQuestion]);

  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://trendingcustom.com/cdn/shop/files/67686ed315f0cb4f6cf190e9c46853e1_1920x.jpg?v=9022245673282680233",
        }}
        resizeMode="cover"
        style={{
          width: appInfo.sizes.WIDTH * 1,
          height: appInfo.sizes.HEIGHT * 0.25,
        }}
        className=" relative brightness-25 opacity-75" // Keep this - adjusted for a better effect
      >
        <View className="absolute inset-0 bg-black opacity-40" />
        <Pressable onPress={() => router.back()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color="white"
            className="mb-4 ml-4" // Added margin for better placement
          />
        </Pressable>
        <View className="container items-center mx-auto text-center relative z-10 mt-2 px-4">
          <Text className="text-3xl font-bold text-white mb-4">
            How can we help?
          </Text>
          <View className="flex-row items-center text-black rounded-md p-2 mt-8 flex-1 mx-4">
            <InputComponent
              placeholder="Search"
              value={searchTerm}
              onChange={(val) => setSearchTerm(val)}
              affix={<AntDesign name="search1" size={24} color="gray" />}
            />
          </View>
        </View>
      </ImageBackground>

      <View className="container mx-auto py-8 px-4">
        <Text className="text-xl font-semibold text-center mb-6">
          Most Important Questions
        </Text>
        {filteredFaqs.map((faq) => (
          <View
            key={faq.id}
            className={`bg-white rounded-md shadow-sm border-2 border-gray-300 mb-4 overflow-hidden ${
              expandedQuestion === faq.id ? "bg-red-50" : ""
            }`}
          >
            <TouchableOpacity
              onPress={() => toggleQuestion(faq.id)}
              className={`w-full py-3 px-4 flex-row justify-between  items-center rounded-t-md ${
                expandedQuestion === faq.id ? "bg-red-500" : ""
              }`}
            >
              <Text
                className={`font-bold ${
                  expandedQuestion === faq.id ? "text-white" : ""
                }`}
              >
                {faq.question}
              </Text>
              {expandedQuestion === faq.id ? (
                <Entypo name="chevron-up" size={24} color="black" />
              ) : (
                <Entypo name="chevron-down" size={24} color="black" />
              )}
            </TouchableOpacity>
            {expandedQuestion === faq.id && (
              <View className="py-2 px-4">
                {faq.answer.map((item, index) => (
                  <Text key={index} className="text-gray-700 mb-2">
                    {item}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      <View className="container mx-auto py-8 px-4">
        <Text className="text-xl font-semibold text-center mb-8">
          What do you need help with?
        </Text>
        <FlatList
          data={helpTopics}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-white border border-gray-400  items-center justify-center rounded-md m-auto w-[40%] h-20 mb-4" // w-1/2, h-20
              onPress={() => navigation.navigate(item.link)}
            >
              <Text className="text-gray-700 text-sm text-center mt-2">
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View className=" flex flex-col items-center justify-center">
        <Image
          source={{
            uri: "https://trendingcustom.com/cdn/shop/files/contact-form-image_1104x.png?v=8136496228665217996",
          }}
          className="w-64 h-40 mb-4"
          resizeMode="contain"
        />
        <Text className="text-center mb-2 p-4">
          We strive to provide up-to-date information. If you need help, contact
          us!
        </Text>
        <TouchableOpacity className="bg-white border border-orange-500 rounded-md mb-4 py-2 px-4">
          <Text className="text-orange-500 text-center">Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainContentHelpCenter;
