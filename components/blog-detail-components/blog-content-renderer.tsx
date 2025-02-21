import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Linking,
  TouchableOpacity,
} from "react-native";
import { BlogContent } from "@/types/blogs-type";
import { YoutubeEmbed } from "./youtube-embed"; // Assuming you have a YouTube embed component

interface BlogContentRendererProps {
  content: BlogContent[];
}

export const BlogContentRenderer = ({ content }: BlogContentRendererProps) => {
  const renderContent = (item: BlogContent, index: number) => {
    switch (item.type) {
      case "text":
        return (
          <Text key={index} className="mb-2 text-justify">
            {item.text}
          </Text>
        );
      case "image":
        return (
          <View key={index} className="mb-4">
            <Image
              source={{ uri: item.src }}
              style={{ width: "100%", height: 200, resizeMode: "cover" }} // Adjust height as needed
              className="rounded-lg"
            />
            {item.alt && (
              <Text className="text-gray-500 italic text-sm mt-1 text-center">
                {item.alt}
              </Text>
            )}
          </View>
        );
      case "heading":
        return (
          <Text
            key={index}
            className={`text-${36 - (item.level - 1) * 6} font-bold mb-2`}
          >
            {item.text}
          </Text>
        );
      case "quote":
        return (
          <View key={index} className="mb-4 p-4 border-l-2 border-gray-300">
            <Text className="italic text-gray-700">"{item.text}"</Text>
            {item.author && (
              <Text className="text-right text-gray-500 mt-1">
                - {item.author}
              </Text>
            )}
          </View>
        );
      case "list":
        return (
          <View key={index} className="mb-2">
            {item.ordered ? (
              <FlatList
                data={item.items}
                keyExtractor={(listItem, listIndex) => listIndex.toString()}
                renderItem={({ item: listItem, index: listIndex }) => (
                  <Text className="ml-4 mb-1">
                    {listIndex + 1}. {listItem}
                  </Text>
                )}
              />
            ) : (
              <FlatList
                data={item.items}
                keyExtractor={(listItem, listIndex) => listIndex.toString()}
                renderItem={({ item: listItem }) => (
                  <Text className="ml-4 mb-1">• {listItem}</Text>
                )}
              />
            )}
          </View>
        );
      case "embed":
        if (item.provider === "youtube") {
          return <YoutubeEmbed key={index} videoId={item.src} />;
        }
        if (item.provider === "twitter") {
          // You would need a Twitter embed component here
          return <Text key={index}>Twitter embed not yet implemented</Text>;
        }
        if (item.provider === "instagram") {
          // You would need an Instagram embed component here
          return <Text key={index}>Instagram embed not yet implemented</Text>;
        }
        return null; // Or a default case for unknown providers

      default:
        return null;
    }
  };

  return (
    <View>{content.map((item, index) => renderContent(item, index))}</View>
  );
};
