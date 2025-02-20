import React, { ReactNode } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  useWindowDimensions,
} from "react-native";
import { ChevronDownIcon } from "lucide-react-native";
import { footerData } from "@/data/footer-data";
import { useNavigation } from "expo-router";
import { HomeStackNavigationProp } from "@/navigators/RootStackParamList";
interface FooterSectionProps {
  title: string;
  children: ReactNode;
}
interface NavLinkProps {
  title: string;
  url: string;
}
const trendingCustomLogo = require("@/assets/images/splash-logo.png");
const dmcaProtectedImage = require("@/assets/images/dmca-protected.png");
const Footer = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const navigation = useNavigation<HomeStackNavigationProp>();

  const FooterSection = ({ title, children }: FooterSectionProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <View className="mb-4 bg-[white]">
        <TouchableOpacity
          className="flex flex-row items-center justify-between"
          onPress={() => setIsOpen(!isOpen)}
        >
          <Text className="text-gray-700 font-semibold text-xl">{title}</Text>
          <ChevronDownIcon className="w-5 h-5 text-gray-700" />
        </TouchableOpacity>
        {isOpen && <View className="mt-2 space-y-1">{children}</View>}
      </View>
    );
  };

  const NavLink = ({ title, url }: NavLinkProps) => (
    <TouchableOpacity onPress={() => navigation.navigate(url)}>
      <Text className="text-gray-500 py-1 text-lg">{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="bg-white py-8 px-4">
      <View className=" inset-0 bg-white bg-opacity-80 flex items-center justify-center ">
        <View className="bg-white rounded-lg p-6 w-[95%]">
          <Text className="text-4xl font-bold text-gray-800 mb-2 text-center">
            {footerData.newsletter.title1}
          </Text>
          <Text className="text-4xl font-bold text-gray-800 mb-2 text-center">
            {footerData.newsletter.title2}
          </Text>
          <Text className="text-gray-600 mb-4 text-left py-4 text-lg">
            {footerData.newsletter.description}
          </Text>
          <TextInput
            placeholder={footerData.newsletter.firstNamePlaceholder}
            className="border rounded-lg p-3 mb-4 text-gray-700 text-lg"
          />
          <TextInput
            placeholder={footerData.newsletter.emailPlaceholder}
            className="border rounded-lg p-3 mb-4 text-gray-700 text-lg"
          />
          <TouchableOpacity className="bg-red-600 py-3 rounded-lg">
            <Text className="text-white font-medium text-center text-2xl">
              {footerData.newsletter.buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="block">
        {footerData.footerSections.map((section, index) => (
          <FooterSection key={index} title={section.title}>
            {section.links.map((link, linkIndex) => (
              <NavLink key={linkIndex} title={link.title} url={link.url} />
            ))}
          </FooterSection>
        ))}
      </View>
      <View className=" mt-6">
        {/* Contact Info */}
        <View className="items-center">
          <Image
            source={trendingCustomLogo}
            className="w-36 h-12 object-contain"
          />
        </View>
        <View className="text-left">
          <Text className="text-gray-700 mt-4 text-lg font-bold">
            Get in touch?
          </Text>
          {footerData.contactInfo.map((item, index) => (
            <Text key={index} className="text-gray-600 text-base">
              <Text className="font-bold">{item.label}</Text>
              {item.value}
            </Text>
          ))}
        </View>

        {/* social contact */}
        <View className="flex-row space-x-4 mt-4 pb-4 gap-2 items-center justify-center border-b border-gray-100">
          {footerData.socialLinks.map((social, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => Linking.openURL(social.url)}
            >
              <social.icon />
            </TouchableOpacity>
          ))}
        </View>
        {/* certification */}
        <View className="justify-center items-center ">
          <Image
            source={dmcaProtectedImage}
            className="w-30 h-8 object-contain mt-3"
          />
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Image
              source={require("@/assets/images/TrustPilot.png")}
              className="my-3"
              style={{
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <Text className="text-gray-700 font-semibold text-lg">
            Trusted by more than 2M+ customers
          </Text>
          {/* payment method */}
          <View className="flex-row space-x-4 mt-4 gap-2 items-center justify-center">
            {footerData.paymentMethods.map((PaymentMethod, index) => (
              <PaymentMethod key={index} />
            ))}
          </View>
          <Text className="text-gray-400 mt-6 text-[18px] text-center">
            {footerData.copyrightText}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
