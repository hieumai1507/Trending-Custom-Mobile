import { appInfo } from "@/constants/appInfos";
import React from "react";
import { Image, View } from "react-native";
import BlogSection from "./blog-section";
import CategorySlider from "./category-slider";
import { MediaLogos } from "./media-logos";
import ReviewCarousel from "./reviews-carousel";
import SectionProduct from "./section-product";
import SellingPointSection from "./selling-point";
import ShopCategories from "./shop-categories";
import PromoBanner from "./promo-banner";

const MainContentHome = () => {
  return (
    <View>
      <CategorySlider />
      {/* banner */}
      <View className="items-center mt-8">
        <Image
          source={{
            uri: "https://trendingcustom.com/cdn/shop/files/Group_35142_bbc22819-f760-438d-aabb-3ee4f1aafb73.png?v=1737710439&width=700",
          }}
          className="object-contain w-[380px] h-[485px] rounded-[2px]"
        />
      </View>
      <SectionProduct />
      {/* promo banner */}
      <PromoBanner />
      <ShopCategories />
      <SectionProduct giftOfCouple />
      <ReviewCarousel />
      <SellingPointSection />
      <MediaLogos />
      <BlogSection />
    </View>
  );
};

export default MainContentHome;
