import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { Image } from "react-native";
import { categories, Category } from "@/data/category-slider";
import { MaterialIcons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <View style={styles.categoryCard}>
      <Image source={{ uri: category.imageUrl }} style={styles.categoryImage} />
      <Text style={styles.categoryLabel}>{category.label}</Text>
    </View>
  );
};
const CategorySlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    setScrollPosition(event.nativeEvent.contentOffset.x);
  };

  const scrollLeft = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: Math.max(scrollPosition - width * 0.8, 0),
        animated: true,
      });
    }
  };

  const scrollRight = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: scrollPosition + width * 0.8,
        animated: true,
      });
    }
  };
  return (
    <View style={styles.categoryContainer}>
      {/* Nút Scroll Left */}
      <TouchableOpacity style={styles.scrollButtonLeft} onPress={scrollLeft}>
        <Text style={styles.scrollButtonText}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </Text>
      </TouchableOpacity>

      {/* ScrollView chứa Category */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={width * 0.8}
        decelerationRate="fast"
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ScrollView>

      {/* Nút Scroll Right */}
      <TouchableOpacity style={styles.scrollButtonRight} onPress={scrollRight}>
        <Text style={styles.scrollButtonText}>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategorySlider;
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 10,
    backgroundColor: "#e9f5f1",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  scrollButtonLeft: {
    position: "absolute",
    left: 10,
    zIndex: 10,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 5,
    elevation: 3,
    opacity: 0.8,
  },
  scrollButtonRight: {
    position: "absolute",
    right: 10,
    zIndex: 10,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 5,
    elevation: 3,
    opacity: 0.8,
  },
  scrollButtonText: {
    fontSize: 24,
    fontWeight: "medium",
    textAlign: "center",
  },
  categoryCard: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    marginHorizontal: 10,
    marginTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImage: {
    flex: 1,
    width: 170,
    height: 170,
    resizeMode: "contain",
    borderRadius: 8,
    borderBottomRightRadius: "none",
    borderBottomLeftRadius: "none",
  },
  categoryLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
