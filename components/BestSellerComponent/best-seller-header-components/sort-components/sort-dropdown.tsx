import { Check, ChevronsUpDown } from "lucide-react-native"; // Cài đặt: npm install lucide-react-native
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "New", value: "new" },
  { label: "Price low to high", value: "price-asc" },
  { label: "Price high to low", value: "price-desc" },
];

interface SortDropdownProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function SortDropdown({ value, onValueChange }: SortDropdownProps) {
  const selectedOption = sortOptions.find((option) => option.value === value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { width } = useWindowDimensions();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleOptionSelect = (selectedValue: string) => {
    onValueChange(selectedValue);
    setIsDropdownOpen(false);
  };

  const buttonWidth = width * 0.45;

  return (
    <View className="relative">
      <TouchableOpacity
        className="flex-row justify-between items-center p-3 border border-gray-300 rounded-md bg-white"
        style={{ width: buttonWidth }}
        onPress={toggleDropdown}
      >
        <Text className="text-gray-700 text-lg">{selectedOption?.label}</Text>
        <ChevronsUpDown className="ml-2 w-5 h-5 text-gray-500" />
      </TouchableOpacity>

      {isDropdownOpen && (
        <View
          className="absolute top-full right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50"
          style={{ width: buttonWidth }}
        >
          {sortOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              className="flex-row justify-between items-center p-3 border-b border-gray-200"
              onPress={() => handleOptionSelect(option.value)}
            >
              <Text className="text-gray-700 text-base">{option.label}</Text>
              {value === option.value && (
                <Check className="w-5 h-5 text-blue-500" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
