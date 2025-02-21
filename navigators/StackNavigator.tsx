import DrawerLayout from "@/app/(tabs)/_layout";
import {
  BlogDetailScreen,
  CancellationAndModificationScreen,
  ContactUsScreen,
  HelpCenterScreen,
  IntellectualPropertyClaim,
  PrivacyPolicy,
  ProductDetailScreen,
  ReplacementRefundScreen,
  ReviewsScreen,
  TermOfServicesScreen,
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
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen
          name="CancellationAndModification"
          component={CancellationAndModificationScreen}
        />
        <Stack.Screen
          name="ReplacementRefund"
          component={ReplacementRefundScreen}
        />
        <Stack.Screen name="TermOfServices" component={TermOfServicesScreen} />
        <Stack.Screen
          name="IntellectualPropertyClaim"
          component={IntellectualPropertyClaim}
        />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
