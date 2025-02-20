// components/filter/products-view.tsx
import { COMMON } from "@/constants/textConstant";
import { productTypes } from "@/data/filter-data";
import React from "react";
import { View } from "react-native";
import { ActionButtons } from "./action-button";
import { CategoryGrid } from "./category-grid";
import { ViewHeader } from "./view-header";

interface ProductsViewProps {
  selectedProducts: number[];
  onProductSelect: (id: number) => void;
  onBack: () => void;
}

export function ProductsView({
  selectedProducts,
  onProductSelect,
  onBack,
}: ProductsViewProps) {
  return (
    <View className="mt-4">
      <ViewHeader title="Product types" onBack={onBack} />

      <View className=" p-4">
        <CategoryGrid
          items={productTypes}
          selectedIds={selectedProducts}
          onSelect={onProductSelect}
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
