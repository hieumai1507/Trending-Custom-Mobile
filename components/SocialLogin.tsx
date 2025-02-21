import Facebook from "@/assets/svg/FacebookConvert";
import Google from "@/assets/svg/GoogleConvert";
import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import { COMMON } from "@/constants/textConstant";
import React from "react";
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "./common";

export default function SocialLogin() {
  return (
    <SectionComponent>
      <TextComponent
        text="OR"
        color={appColors.gray4}
        fontSize={16}
        font={fonts["Plus-Medium"]}
        styles={{
          textAlign: "center",
        }}
      />
      <SpaceComponent height={16} />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text={COMMON.GOOGLE}
        textFont={fonts["Plus-Regular"]}
        iconFlex="left"
        icon={<Google />}
      />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text={COMMON.FACEBOOK}
        iconFlex="left"
        textFont={fonts["Plus-Regular"]}
        icon={<Facebook />}
      />
    </SectionComponent>
  );
}
