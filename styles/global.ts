import { appInfo } from "./../constants/appInfos";
import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  text: {
    fontFamily: fonts.Lt,
    fontSize: 14,
    color: appColors.text,
  },
  button: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 56,
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  section: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
