import { View, Text, Image, Pressable } from "react-native";
import { Checkbox } from "react-native-paper";
import { FC } from "react";
import { router } from "expo-router";
import { useState } from "react";
import { CartSubtotalType } from "@/types/cart-type";

interface CartSubtotalProps {
  subtotal: CartSubtotalType;
  onPriorityProductionChange: (checked: boolean) => void;
}

const CartSubtotal: FC<CartSubtotalProps> = ({
  subtotal,
  onPriorityProductionChange,
}) => {
  const [checked, setChecked] = useState(subtotal.priorityProduction);

  return (
    <View className="p-4 bg-white rounded-lg border space-y-4">
      <Text className="text-lg font-semibold">Cart Subtotal</Text>

      <View className="space-y-2">
        <View className="flex-row justify-between">
          <Text>Subtotal:</Text>
          <Text>${subtotal.subtotal.toFixed(2)} USD</Text>
        </View>
        <View className="flex-row justify-between">
          <Text>Taxes and shipping:</Text>
          <Text className="text-gray-500">Calculated at checkout</Text>
        </View>
      </View>

      <View className="flex-row items-start gap-2 bg-gray-50 p-3 rounded-lg">
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
            onPriorityProductionChange(!checked);
          }}
        />
        <View className="flex-1">
          <View className="flex-row justify-between items-baseline">
            <Text className="font-bold">Priority Production</Text>
            <Text className="font-bold">$2.99 USD</Text>
          </View>
          <Text className="text-sm text-gray-600 max-w-xs">
            Move your order to the front of the line for faster processing
          </Text>
        </View>
      </View>

      <View className="border-t pt-4 space-y-2">
        <View className="flex-row justify-between font-semibold">
          <Text>Total:</Text>
          <Text className="font-bold">${subtotal.total.toFixed(2)} USD</Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
            }}
            className="h-5 w-20"
            resizeMode="contain"
          />
          <Text className="text-sm">
            Pay in 4 interest-free payments of $8.25.
          </Text>
          <Pressable
            // onPress={() => router.push("/learn-more")}
            className="text-blue-600 text-sm underline"
          >
            <Text>Learn more</Text>
          </Pressable>
        </View>
      </View>

      <View className="space-y-2 mb-2">
        <Pressable
          className="w-full bg-green-600 p-3 rounded-lg mt-4"
          //  onPress={() => router.push("") }
        >
          <Text className="text-center text-white font-bold">
            🔒 Secure Checkout
          </Text>
        </Pressable>
        <Pressable className="w-full bg-yellow-400 p-3 rounded-lg flex-row items-center justify-center mt-4">
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
            }}
            className="h-5 w-20"
            resizeMode="contain"
          />
        </Pressable>
      </View>

      <View className="items-center space-y-2">
        <Image
          source={{
            uri: "https://trendingcustom.com/cdn/shop/files/Group_34853_1149x.png?v=9272419069271462433",
          }}
          className="h-20 w-[90%]"
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default CartSubtotal;
