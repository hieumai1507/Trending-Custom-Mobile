import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeStack: undefined;
  ProductDetail: { productId: string; productName: string };
  Reviews: undefined;
  BlogDetail: { id: string; slug: string };
  PrivacyPolicy: undefined;
  CancellationAndModification: undefined;
  ReplacementRefund: undefined;
  TermOfServices: undefined;
  IntellectualPropertyClaim: undefined;
  ContactUs: undefined;
  HelpCenter: undefined;
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
export type PrivacyPolicyNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PrivacyPolicy"
>;
export type CancellationAndModificationNavigationProp =
  NativeStackNavigationProp<RootStackParamList, "CancellationAndModification">;
export type ReplacementRefundNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ReplacementRefund"
>;
export type TermOfServicesNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "TermOfServices"
>;
export type IntellectualPropertyClaimNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "IntellectualPropertyClaim"
>;
export type ContactUsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ContactUs"
>;
export type HelpCenterNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HelpCenter"
>;
