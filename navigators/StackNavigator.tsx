import DrawerLayout from "@/app/(tabs)/_layout";
import {
  BlogDetailScreen,
  ProductDetailScreen,
  ReviewsScreen,
} from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeStack"
      >
        {/* Màn hình chính là DrawerLayout */}
        <Stack.Screen name="HomeStack" component={DrawerLayout} />

        {/* Các màn hình chi tiết */}
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
