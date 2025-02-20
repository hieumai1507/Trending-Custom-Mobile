import CustomDrawer from "@/components/drawer-components/CustomDrawer";
import { MENU } from "@/constants/textConstant";
import { DrawerParamList } from "@/navigators/RootDrawerParamList";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Crown, House, ShoppingCart, UserRound } from "lucide-react-native";
import React from "react";
import BestSellers from "./BestSellers";
import BLogs from "./Blogs";
import Cart from "./Cart";
import Home from "./Home";
import Profile from "./Profile";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerLayout() {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />} // Use Custom Sidebar
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          drawerActiveBackgroundColor: "#ff6347", // Active background color
          drawerActiveTintColor: "#fff", // Active text color
          drawerInactiveTintColor: "#333", // Inactive text color
        }}
      >
        <Drawer.Screen
          name={MENU.HOME}
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <House size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={MENU.BESTSELLERS}
          component={BestSellers}
          options={{
            drawerIcon: ({ color, size }) => (
              <Crown size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={MENU.BLOGS}
          component={BLogs}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="blog" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={MENU.CART}
          component={Cart}
          options={{
            drawerIcon: ({ color, size }) => (
              <ShoppingCart size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={MENU.PROFILE}
          component={Profile}
          options={{
            drawerIcon: ({ color, size }) => (
              <UserRound size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
