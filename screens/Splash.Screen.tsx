import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  View,
} from "react-native";
import React from "react";
import { appInfo } from "@/constants/appInfos";
import { SpaceComponent } from "@/components/common";
import { appColors } from "@/constants/appColors";
const SplashScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/splash-img.png")}
      className="flex-1 justify-center items-center"
      imageStyle={{ flex: 1 }}
    >
      <Image
        source={require("../assets/images/splash-logo.png")}
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
          resizeMode: "contain",
        }}
      />
      <SpaceComponent height={20} />
      <ActivityIndicator color={appColors.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;
