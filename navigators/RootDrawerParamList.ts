import { DrawerNavigationProp } from "@react-navigation/drawer";

export type DrawerParamList = {
  Home: undefined;
  BestSellers: undefined;
  Blogs: undefined;
  Wishlist: undefined;
  Cart: undefined;
  Profile: undefined;
};
export type DrawerNavProp = DrawerNavigationProp<DrawerParamList>;
