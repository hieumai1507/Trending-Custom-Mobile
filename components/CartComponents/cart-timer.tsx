import { useState, useEffect } from "react";
import { View, Text } from "react-native";

export function CartTimer() {
  const [time, setTime] = useState(9 * 60 + 50);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <View className="mb-4 rounded-md bg-blue-100 px-4 py-3 border border-blue-500">
      {time > 0 ? (
        <Text className="text-blue-500 text-sm text-left">
          Your cart will expire in{" "}
          <Text className="font-semibold">
            {minutes}:{seconds.toString().padStart(2, "0")} minutes!
          </Text>{" "}
          Checkout now before your items sell out
        </Text>
      ) : (
        <Text className="text-blue-500 text-sm text-left">
          Forgot one final step? Place your order now and make the payment right
          away!
        </Text>
      )}
    </View>
  );
}
