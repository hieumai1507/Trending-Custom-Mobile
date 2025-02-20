import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeStack: undefined;
  ProductDetail: { productId: string; productName: string };
  Reviews: undefined;
  BlogDetail: { id: string; slug: string };
};
// NativeStackNavigationProp dùng để navigate
export type HomeStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomeStack"
>;
export type ProductDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProductDetail"
>;
export type ReviewCardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Reviews"
>;
export type BlogDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "BlogDetail"
>;
