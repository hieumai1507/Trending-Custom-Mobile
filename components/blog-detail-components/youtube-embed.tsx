import React from "react";
import { View } from "react-native"; // You might need to install this: npm install react-native-webview
import { WebView } from "react-native-webview";
interface YoutubeEmbedProps {
  videoId: string;
}

export const YoutubeEmbed = ({ videoId }: YoutubeEmbedProps) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <View style={{ aspectRatio: 16 / 9, marginBottom: 16 }}>
      <WebView
        source={{ uri: videoUrl }}
        style={{ flex: 1 }}
        allowsFullscreenVideo={true}
      />
    </View>
  );
};
