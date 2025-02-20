import { COMMON } from "@/constants/textConstant";
import { occasions } from "@/data/filter-data";
import React from "react";
import { View } from "react-native";
import { ActionButtons } from "./action-button";
import { CategoryGrid } from "./category-grid";
import { ViewHeader } from "./view-header";

interface OccasionsViewProps {
  selectedOccasions: number[];
  onOccasionSelect: (id: number) => void;
  onBack: () => void;
}

export function OccasionsView({
  selectedOccasions,
  onOccasionSelect,
  onBack,
}: OccasionsViewProps) {
  return (
    <View className="mt-4">
      <ViewHeader title="Occasions" onBack={onBack} />
      <View className="p-4">
        <CategoryGrid
          items={occasions}
          selectedIds={selectedOccasions}
          onSelect={onOccasionSelect}
        />
      </View>
      <ActionButtons
        onCancel={onBack}
        onApply={onBack}
        cancelText={COMMON.BACK}
      />
    </View>
  );
}
