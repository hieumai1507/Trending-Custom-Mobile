import AppRouter from "@/navigators/AppRouter";
import { SplashScreen } from "@/screens";
import { store, persistor } from "@/stores/store";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";
import "../global.css";
import { PersistGate } from "redux-persist/integration/react";
import Toast from "react-native-toast-message";
export default function RootLayout() {
  const [loaded, error] = Font.useFonts({
    "Roboto-Bold": require("../assets/fonts/roboto-serif/RobotoSerif-Bold.ttf"),
    "Roboto-ExtraBold": require("../assets/fonts/roboto-serif/RobotoSerif-ExtraBold.ttf"),
    "Roboto-Medium": require("../assets/fonts/roboto-serif/RobotoSerif-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/roboto-serif/RobotoSerif-Regular.ttf"),
    "Roboto-SemiBold": require("../assets/fonts/roboto-serif/RobotoSerif-SemiBold.ttf"),
    // jakrata
    "Plus-Bold": require("../assets/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf"),
    "Plus-ExtraBold": require("../assets/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.ttf"),
    "Plus-Medium": require("../assets/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.ttf"),
    "Plus-Regular": require("../assets/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf"),
    "Plus-SemiBold": require("../assets/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      <SplashScreen />;
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent={true}
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
          <Toast />
        </PersistGate>
      </Provider>
    </>
  );
}
