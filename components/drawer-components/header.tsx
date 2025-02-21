import AuthModal from "@/modals/AuthModal.tsx";
import { DrawerNavProp } from "@/navigators/RootDrawerParamList";
import { Feather, Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
const { width, height } = Dimensions.get("window");

const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation<DrawerNavProp>();
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white">
      {/* Header Main Section */}
      <View className="flex-row justify-between items-center px-4 ">
        {/* Drawer Toggle */}

        {/* Logo */}
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("@/assets/images/splash-logo.png")}
            style={{
              width: width * 0.25,
              height: height * 0.1,
            }}
            resizeMode="contain"
          />
        </Pressable>

        {/* Right Icons */}
        <View className="flex-row space-x-4 gap-4">
          <TouchableOpacity onPress={() => navigation.navigate("Wishlist")}>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Ionicons name="person-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Ionicons name="cart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View className="flex-row justify-center items-center gap-2 px-4">
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-row items-center bg-gray-200 rounded-md p-2 mx-3 flex-1">
          <Ionicons name="search-outline" size={20} color="gray" />
          <TextInput
            placeholder="Search for anything"
            className="flex-1 p-2 text-black"
          />
        </View>
      </View>

      {/* Trust Info */}
      <Text className="text-center mt-2 px-6 pt-2 pb-4 border-b border-gray-200">
        Trusted by more than{" "}
        <Text className="font-bold">2 Million Customers</Text> and{" "}
        <Text className="font-bold">250K 5-Star Reviews ⭐⭐⭐⭐⭐</Text>
      </Text>

      <AuthModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default Header;
