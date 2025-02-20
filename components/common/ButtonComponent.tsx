import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import { globalStyles } from "@/styles/global";
import React, { ReactNode } from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import TextComponent from "./TextComponent";
interface Props {
  icon?: ReactNode;
  text: string;
  type?: "primary" | "text" | "link";
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: "right" | "left";
  disable?: boolean;
}
const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textStyles,
    textFont,
    onPress,
    iconFlex,
    disable,
  } = props;
  return type === "primary" ? (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        disabled={disable}
        onPress={onPress}
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color
              ? color
              : disable
              ? appColors.gray4
              : appColors.primary,
            marginBottom: 17,
            width: "90%",
          },
          styles,
        ]}
      >
        {icon && iconFlex === "left" && icon}
        <TextComponent
          text={text}
          color={textColor ?? appColors.white}
          styles={[
            textStyles,
            { marginLeft: icon ? 12 : 0, textAlign: "center" },
          ]}
          flex={icon && iconFlex === "right" ? 1 : 0}
          font={textFont ?? fonts["Plus-Medium"]}
        />
        {icon && iconFlex === "right" && icon}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        text={text}
        color={type === "link" ? appColors.primary : appColors.text}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
