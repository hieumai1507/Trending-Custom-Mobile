import { View } from "react-native";
import { useEffect, useState } from "react";

const Loading = () => {
  const blades = Array.from({ length: 12 });

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-10 h-10 relative">
        {blades.map((_, index) => (
          <View
            key={index}
            className="absolute w-[3px] h-[11px] bg-gray-500 rounded-sm"
            style={{
              transform: [{ rotate: `${index * 30}deg` }, { translateY: -10 }],
              opacity: (index + 1) / 12,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Loading;
