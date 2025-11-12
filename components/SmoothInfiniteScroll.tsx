import { StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect } from "react";
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const iconDataSets = {
  set1: [
    { emoji: "🍕", color: "#FFE5CC" },
    { emoji: "🍔", color: "#F4D03F" },
    { emoji: "🍟", color: "#F8D7DA" },
    { emoji: "🌮", color: "#D5EDDA" },
    { emoji: "🍗", color: "#FADBD8" },
  ],
  set2: [
    { emoji: "🎮", color: "#D1ECF1" },
    { emoji: "🎧", color: "#E2E3E5" },
    { emoji: "☕", color: "#F4D03F" },
    { emoji: "🍿", color: "#FFE5CC" },
    { emoji: "🥤", color: "#F8D7DA" },
  ],
  set3: [
    { emoji: "🍰", color: "#FADBD8" },
    { emoji: "🍦", color: "#D1ECF1" },
    { emoji: "🍪", color: "#FFE5CC" },
    { emoji: "🎲", color: "#D5EDDA" },
    { emoji: "🕹️", color: "#E2E3E5" },
  ],
};

const ITEM_HEIGHT = 160;
const SCROLL_SPEED = 20; // pixels per second
const GAP = 10; // gap between items from styles

interface SmoothInfiniteScrollProps {
  scrollDirection?: "up" | "down";
  iconSet?: "set1" | "set2" | "set3";
}

const SmoothInfiniteScroll: FC<SmoothInfiniteScrollProps> = ({
  iconSet = "set1",
  scrollDirection = "down",
}) => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();

  const scrollY = useSharedValue(0);

  const iconData = iconDataSets[iconSet];
  const items = [...iconData, ...iconData];
  const totalContentHeight = iconData.length * ITEM_HEIGHT;

  const totalWrapHeight = totalContentHeight + iconData.length * GAP;

  useEffect(() => {
    // Calculate duration based on SCROLL_SPEED and total distance
    const duration = (totalWrapHeight / SCROLL_SPEED) * 1000; // convert to milliseconds

    if (scrollDirection === "down") {
      // Start at 0, animate to totalWrapHeight
      scrollY.value = 0;
      scrollY.value = withRepeat(
        withTiming(totalWrapHeight, { duration }),
        -1, // infinite repeats
        false // don't reverse
      );
    } else {
      // Start at totalWrapHeight, animate to 0
      scrollY.value = totalWrapHeight;
      scrollY.value = withRepeat(
        withTiming(0, { duration }),
        -1, // infinite repeats
        false // don't reverse
      );
    }
  }, [scrollDirection, scrollY, totalWrapHeight]);

  useAnimatedReaction(
    () => scrollY.value,
    (y) => {
      if (scrollDirection === "down") {
        if (y >= totalContentHeight) {
          scrollY.value = 0;
          scrollTo(scrollViewRef, 0, 0, false);
        } else {
          scrollTo(scrollViewRef, 0, y, false);
        }
      } else {
        if (y <= 0) {
          scrollY.value = totalContentHeight;
          scrollTo(scrollViewRef, 0, totalContentHeight, false);
        } else {
          scrollTo(scrollViewRef, 0, y, false);
        }
      }
    }
  );

  useAnimatedReaction(
    () => scrollY.value,
    (y) => {
      if (scrollDirection === "down") {
        if (y >= totalContentHeight) {
          scrollY.value = 0;
          scrollTo(scrollViewRef, 0, 0, false);
        } else {
          scrollTo(scrollViewRef, 0, y, false);
        }
      } else {
        if (y <= 0) {
          scrollY.value = totalContentHeight;
          scrollTo(scrollViewRef, 0, totalContentHeight, false);
        } else {
          scrollTo(scrollViewRef, 0, y, false);
        }
      }
    }
  );

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {items.map((item, index) => (
        <View
          key={index}
          style={[styles.iconContainer, { backgroundColor: item.color }]}
        >
          <Text style={{ fontSize: 40 }}>{item.emoji}</Text>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default SmoothInfiniteScroll;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 20,
  },
  iconContainer: {
    width: 160,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5,
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
  },
});
