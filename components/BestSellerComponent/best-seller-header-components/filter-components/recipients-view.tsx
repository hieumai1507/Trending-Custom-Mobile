// recipients-view.tsx
import { COMMON } from "@/constants/textConstant";
import { recipients } from "@/data/filter-data";
import React from "react";
import { View } from "react-native";
import { ActionButtons } from "./action-button";
import { CategoryGrid } from "./category-grid";
import { ViewHeader } from "./view-header";

interface RecipientsViewProps {
  selectedRecipients: number[];
  onRecipientSelect: (id: number) => void;
  onBack: () => void;
}

export function RecipientsView({
  selectedRecipients,
  onRecipientSelect,
  onBack,
}: RecipientsViewProps) {
  return (
    <View className="mt-4">
      <ViewHeader title="Recipients" onBack={onBack} />
      <View className=" p-4">
        <CategoryGrid
          items={recipients}
          selectedIds={selectedRecipients}
          onSelect={onRecipientSelect}
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
