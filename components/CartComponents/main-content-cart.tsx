import { View, Text, Pressable, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import { removeFromCart, updateQuantity } from "@/stores/shop/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { CartItem } from "./cart-item";
import CartSubtotal from "./cart-subtotal";
import { CartTimer } from "./cart-timer";
import { FreeShippingNotice } from "./freeship-notice";
import { DrawerNavProp } from "@/navigators/RootDrawerParamList";
import { appInfo } from "@/constants/appInfos";
import { MENU } from "@/constants/textConstant";

const MainContentCart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<DrawerNavProp>();
  const items = useSelector((state: RootState) => state.cart.items);
  const [priorityProduction, setPriorityProduction] = useState(false);

  useEffect(() => {
    // Cuộn lên đầu khi vào trang
    // Trong React Native, có thể xử lý cuộn bằng ScrollView
  }, []);

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId: string, quantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity }));
  };

  const handleShippingProtectionChange = (
    itemId: string,
    shippingProtection: boolean
  ) => {
    dispatch(updateQuantity({ id: itemId, shippingProtection }));
  };

  const handleGiftWrappingChange = (itemId: string, giftWrapping: boolean) => {
    dispatch(updateQuantity({ id: itemId, giftWrapping }));
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const salePrice = Number(item.sale_price);
      const quantity = Number(item.quantity);
      const shippingProtection = !!item.shippingProtection;
      const giftWrapping = !!item.giftWrapping;

      if (isNaN(salePrice) || isNaN(quantity)) {
        console.error("Invalid salePrice or quantity:", item);
        return total;
      }

      let itemTotal = salePrice * quantity;
      if (shippingProtection) itemTotal += 2.99;
      if (giftWrapping) itemTotal += 6.99;
      return total + itemTotal;
    }, 0);
  };

  const calculateTotal = () => {
    let total = calculateSubtotal();
    if (priorityProduction) total += 2.99;
    return total;
  };

  return (
    <View className=" bg-white  border-t border-[#dddddd]">
      <View className="relative py-12">
        <Image
          source={{
            uri: "https://trendingcustom.com/cdn/shop/t/57/assets/best-sellers-mobile.png?v=183578064170196121981691676939",
          }} // Sử dụng ảnh mobile
          className="absolute"
          style={{
            width: appInfo.sizes.WIDTH * 1,
            height: appInfo.sizes.HEIGHT * 0.2,
          }}
          resizeMode="cover"
        />
        <View className="flex items-center px-4">
          <Text className="mb-4 text-3xl font-bold text-black items-center mt-4">
            Shopping Cart{items.length > 0 ? `(${items.length})` : ""}
          </Text>
          <Text className="max-w-2xl text-center text-gray-600"></Text>
        </View>
      </View>
      {items.length === 0 ? (
        <View className="flex-1 items-center justify-center  space-y-4">
          <Text className="text-lg text-gray-600">
            There are no items in your cart.
          </Text>
          <Pressable
            className="h-12 min-w-[200px] bg-black rounded-md flex items-center justify-center mt-8"
            onPress={() => navigation.navigate("BestSellers")}
          >
            <Text className="text-white font-bold">CONTINUE SHOPPING</Text>
          </Pressable>
        </View>
      ) : (
        <View className="w-full mt-4">
          <CartTimer />
          <FreeShippingNotice remainingAmount={43.01} threshold={70} />

          <FlatList
            data={items}
            keyExtractor={(item) => `${item._id}-${item.color}-${item.size}`}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                onQuantityChange={(quantity) =>
                  handleQuantityChange(item._id, quantity)
                }
                onRemoveItem={() => handleRemoveItem(item._id)}
                onShippingProtectionChange={(checked) =>
                  handleShippingProtectionChange(item._id, checked)
                }
                onGiftWrappingChange={(checked) =>
                  handleGiftWrappingChange(item._id, checked)
                }
              />
            )}
          />

          <CartSubtotal
            subtotal={{
              subtotal: calculateSubtotal(),
              priorityProduction,
              total: calculateTotal(),
            }}
            onPriorityProductionChange={setPriorityProduction}
          />
        </View>
      )}
    </View>
  );
};
export default MainContentCart;
