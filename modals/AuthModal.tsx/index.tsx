import {
  ButtonComponent,
  InputComponent,
  SectionComponent,
  TextComponent,
} from "@/components/common";
import SocialLogin from "@/components/SocialLogin";
import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import { X } from "lucide-react-native";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Modal from "react-native-modal";

interface AuthModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isVisible, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      className="rounded-lg"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-center items-center"
        >
          <View className="bg-white rounded-2xl p-5 w-full max-w-lg mx-auto">
            <ScrollView showsVerticalScrollIndicator={false}>
              <SectionComponent>
                {/* Header */}
                <View className="p-4">
                  <TouchableOpacity onPress={onClose} className="">
                    <X size={24} color="black" />
                  </TouchableOpacity>
                  <View className="flex-row justify-between items-center">
                    <View>
                      <TextComponent
                        text={isSignUp ? "Create your account" : "Sign in"}
                        styles={{
                          fontSize: 20,
                        }}
                      />
                      {isSignUp ? (
                        <TextComponent
                          text="Registration is easy."
                          styles={{
                            color: appColors.gray,
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </View>
                    {/* Switch Login/Signup */}
                    <TouchableOpacity
                      onPress={() => setIsSignUp(!isSignUp)}
                      className="mt-4"
                    >
                      <ButtonComponent
                        text={isSignUp ? "Sign in" : "Sign Up Now"}
                        type="primary"
                        color={appColors.white}
                        textColor={appColors.text}
                        onPress={() => setIsSignUp(!isSignUp)}
                        styles={{
                          width: "auto",
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Form */}
                <View className="mt-4">
                  <Text className="text-gray-700 mt-3 pb-2 font-bold">
                    Email Address
                    {isSignUp ? <Text className="text-[#f13c20]">*</Text> : ""}
                  </Text>
                  <InputComponent
                    value={email}
                    onChange={(val) => setEmail(val)}
                    placeholder="Enter Email"
                    allowClear
                  />
                  {isSignUp && (
                    <>
                      <Text className="text-gray-700 mt-3 pb-2 font-bold">
                        First Name
                        {isSignUp ? (
                          <Text className="text-[#f13c20]">*</Text>
                        ) : (
                          ""
                        )}
                      </Text>
                      <InputComponent
                        value={firstName}
                        onChange={(val) => setFirstName(val)}
                        placeholder="Enter first name"
                        allowClear
                      />

                      <Text className="text-gray-700 mt-3 pb-2 font-bold">
                        Last Name
                        {isSignUp ? (
                          <Text className="text-[#f13c20]">*</Text>
                        ) : (
                          ""
                        )}
                      </Text>
                      <InputComponent
                        value={lastName}
                        onChange={(val) => setLastName(val)}
                        placeholder="Enter last name"
                        allowClear
                      />
                    </>
                  )}

                  <Text className="text-gray-700 mt-3 pb-2 font-bold">
                    Password
                    {isSignUp ? <Text className="text-[#f13c20]">*</Text> : ""}
                  </Text>
                  <InputComponent
                    value={password}
                    onChange={(val) => setPassword(val)}
                    placeholder="Password"
                    allowClear
                    isPassword
                  />

                  <ButtonComponent
                    text={isSignUp ? "Sign Up" : "Sign In"}
                    type="primary"
                  />
                </View>

                {/* Social Login */}
                <SocialLogin />

                <TextComponent
                  text="By clicking Sign in or Continue with Google, Facebook, you agree to Trendingcustom Terms of Use and Privacy Policy. Trendingcustom may send you communications; you may change your preferences in your account settings. We'll never post without your permission."
                  styles={{
                    color: "#6e6d7a",
                    fontFamily: fonts["Plus-Regular"],
                    fontSize: 15,
                  }}
                />
              </SectionComponent>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AuthModal;
