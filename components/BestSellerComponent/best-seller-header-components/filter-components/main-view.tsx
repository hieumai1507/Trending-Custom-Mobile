import { COMMON } from "@/constants/textConstant";
import { occasions, recipients } from "@/data/filter-data";
import { CustomPriceRange } from "@/types/filters-type";
import { ChevronDown, ChevronRight } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ActionButtons } from "./action-button";
import { CategoryGrid } from "./category-grid";
import { PriceSection } from "./price-section";
import { SectionHeader } from "./section-header";
import { ShippingSection } from "./shipping-section";

interface MainViewProps {
  selectedOccasions: number[];
  selectedRecipients: number[];
  expandedOccasions: boolean;
  expandedRecipients: boolean;
  selectedPrice: string;
  customPriceRange: CustomPriceRange;
  selectedShipping: string[];

  onOccasionSelect: (id: number) => void;
  onRecipientSelect: (id: number) => void;
  onExpandOccasions: () => void;
  onExpandRecipients: () => void;
  onViewOccasions: () => void;
  onViewRecipients: () => void;
  onViewProducts: () => void;
  onPriceChange: (value: string) => void;
  onCustomPriceChange: (field: "low" | "high", value: string) => void;
  onPriceInputFocus: () => void;
  onShippingChange: (value: string) => void;
  onClose: () => void;
}

export function MainView({
  selectedOccasions,
  selectedRecipients,
  expandedOccasions,
  expandedRecipients,
  selectedPrice,
  customPriceRange,
  selectedShipping,
  onOccasionSelect,
  onRecipientSelect,
  onExpandOccasions,
  onExpandRecipients,
  onViewOccasions,
  onViewRecipients,
  onViewProducts,
  onPriceChange,
  onCustomPriceChange,
  onPriceInputFocus,
  onShippingChange,
  onClose,
}: MainViewProps) {
  return (
    <View className="mt-2">
      <View className="p-4">
        <View className="mb-6">
          <SectionHeader title={COMMON.FILTERS} />
          <View className="mb-4">
            <Text className="text-2xl font-bold mb-2">
              {COMMON.FILTER_BY_PRODUCT}
            </Text>
            <TouchableOpacity
              className="flex-row items-center justify-between py-3 px-4 rounded-lg border border-gray-300 bg-gray-50"
              onPress={onViewProducts}
            >
              <Text className="text-lg">{COMMON.ALL_PRODUCTS}</Text>
              <ChevronRight size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-6">
          <SectionHeader title="Occasions" count={selectedOccasions.length} />
          <CategoryGrid
            items={occasions}
            selectedIds={selectedOccasions}
            onSelect={onOccasionSelect}
            limit={expandedOccasions ? undefined : 6}
          />
          <TouchableOpacity
            className="flex-row items-center mb-2"
            onPress={expandedOccasions ? onViewOccasions : onExpandOccasions}
          >
            <Text className="text-base text-gray-500 items-center">
              {expandedOccasions ? COMMON.SEE_ALL : COMMON.SEE_MORE}
            </Text>
            <ChevronDown size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <View className="mb-6">
          <SectionHeader title="Recipients" count={selectedRecipients.length} />
          <CategoryGrid
            items={recipients}
            selectedIds={selectedRecipients}
            onSelect={onRecipientSelect}
            limit={expandedRecipients ? undefined : 6}
          />
          <TouchableOpacity
            className="flex-row items-center mb-2"
            onPress={expandedRecipients ? onViewRecipients : onExpandRecipients}
          >
            <Text className="text-base text-gray-500 items-center">
              {expandedRecipients ? COMMON.SEE_ALL : COMMON.SEE_MORE}
            </Text>
            <ChevronDown size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <PriceSection
          selectedPrice={selectedPrice}
          customPriceRange={customPriceRange}
          onPriceChange={onPriceChange}
          onCustomPriceChange={onCustomPriceChange}
          onPriceInputFocus={onPriceInputFocus}
        />
        <ShippingSection
          selectedShipping={selectedShipping}
          onShippingChange={onShippingChange}
        />
      </View>
      <ActionButtons onCancel={onClose} onApply={onClose} />
    </View>
  );
}
