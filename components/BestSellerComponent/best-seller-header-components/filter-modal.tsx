import { COMMON } from "@/constants/textConstant";
import React, { useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import Modal from "react-native-modal";
import { MainView } from "./filter-components/main-view";
import { OccasionsView } from "./filter-components/occasions-view";
import { ProductsView } from "./filter-components/products-view";
import { RecipientsView } from "./filter-components/recipients-view";
import { appInfo } from "@/constants/appInfos";

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export function FilterModal({ isVisible, onClose }: FilterModalProps) {
  const [view, setView] = useState<
    "main" | "products" | "occasions" | "recipients"
  >("main");
  const [selectedPrice, setSelectedPrice] = useState("any");
  const [selectedOccasions, setSelectedOccasions] = useState<number[]>([]);
  const [selectedRecipients, setSelectedRecipients] = useState<number[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [expandedOccasions, setExpandedOccasions] = useState(false);
  const [expandedRecipients, setExpandedRecipients] = useState(false);
  const [customPriceRange, setCustomPriceRange] = useState({
    low: "",
    high: "",
  });
  const [selectedShipping, setSelectedShipping] = useState<string[]>([]);
  const screenWidth = Dimensions.get("window").width;

  const handleSelect = (
    setter: React.Dispatch<React.SetStateAction<number[]>>,
    id: number
  ) => {
    setter((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleCustomPriceChange = (field: "low" | "high", value: string) => {
    setCustomPriceRange((prev) => ({ ...prev, [field]: value }));
    if (selectedPrice !== "custom") setSelectedPrice("custom");
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="left"
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      style={{
        justifyContent: "flex-start",
        margin: 0,
        maxWidth: appInfo.sizes.WIDTH * 0.85,
        maxHeight: appInfo.sizes.HEIGHT,
      }}
    >
      <ScrollView className="bg-white w-[90vw] p-0 rounded-tr-lg rounded-br-lg shadow-lg">
        {view === "main" && (
          <MainView
            selectedOccasions={selectedOccasions}
            selectedRecipients={selectedRecipients}
            expandedOccasions={expandedOccasions}
            expandedRecipients={expandedRecipients}
            selectedPrice={selectedPrice}
            customPriceRange={customPriceRange}
            selectedShipping={selectedShipping}
            onOccasionSelect={(id) => handleSelect(setSelectedOccasions, id)}
            onRecipientSelect={(id) => handleSelect(setSelectedRecipients, id)}
            onExpandOccasions={() => setExpandedOccasions(true)}
            onExpandRecipients={() => setExpandedRecipients(true)}
            onViewOccasions={() => setView("occasions")}
            onViewRecipients={() => setView("recipients")}
            onViewProducts={() => setView("products")}
            onPriceChange={setSelectedPrice}
            onCustomPriceChange={handleCustomPriceChange}
            onPriceInputFocus={() => setSelectedPrice("custom")}
            onShippingChange={(value) =>
              setSelectedShipping((prev) =>
                prev.includes(value)
                  ? prev.filter((item) => item !== value)
                  : [...prev, value]
              )
            }
            onClose={onClose}
          />
        )}

        {view === COMMON.OCCASIONS && (
          <OccasionsView
            selectedOccasions={selectedOccasions}
            onOccasionSelect={(id) => handleSelect(setSelectedOccasions, id)}
            onBack={() => setView("main")}
          />
        )}

        {view === COMMON.RECIPIENTS && (
          <RecipientsView
            selectedRecipients={selectedRecipients}
            onRecipientSelect={(id) => handleSelect(setSelectedRecipients, id)}
            onBack={() => setView("main")}
          />
        )}

        {view === COMMON.PRODUCTS && (
          <ProductsView
            onBack={() => setView("main")}
            selectedProducts={selectedProducts}
            onProductSelect={(id) => handleSelect(setSelectedProducts, id)}
          />
        )}
      </ScrollView>
    </Modal>
  );
}
