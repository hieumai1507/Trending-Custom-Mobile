import { SplashScreen } from "@/screens";
import React, { useEffect, useState } from "react";
import StackNavigator from "./StackNavigator";

const AppRouter = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return <>{isShowSplash ? <SplashScreen /> : <StackNavigator />}</>;
};

export default AppRouter;
