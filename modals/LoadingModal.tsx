import { View, Modal, ActivityIndicator } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global";
import { TextComponent } from "@/components/common";
import { appColors } from "@/constants/appColors";
interface Props {
  visible: boolean;
  message?: string;
}
const LoadingModal = (props: Props) => {
  const { visible, message } = props;
  return (
    <Modal
      visible={visible}
      style={[globalStyles.container, { flex: 1 }]}
      transparent
      statusBarTranslucent
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator color={appColors.white} />
        <TextComponent text="Loading" flex={0} color={appColors.white} />
      </View>
    </Modal>
  );
};

export default LoadingModal;
