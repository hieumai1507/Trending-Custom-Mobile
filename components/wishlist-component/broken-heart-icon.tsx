import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const BrokenHeartIcon: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className, size = 24, color = "black" }) => {
  return <AntDesign name="hearto" size={size} color={color} />;
};

export default BrokenHeartIcon;
