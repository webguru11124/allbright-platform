import React from "react";
import { DimensionValue, Pressable, StyleSheet, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type Props = {
  frontComponent: React.ReactNode;
  backComponent: React.ReactNode;
  width: DimensionValue | undefined;
  height: DimensionValue | undefined;
};

export default function FlipCard({ frontComponent, backComponent, width, height }: Props) {
  const rotate = useSharedValue(0);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 500 }),
        },
      ],
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 500 }),
        },
      ],
    };
  });

  const handleFlip = () => {
    rotate.value = rotate.value ? 0 : 1;
  };

  return (
    <View style={[styles.container, { height: height, width: width }]}>
      <Pressable
        onPress={() => handleFlip()}
        style={[styles.cardFrontBody, styles.card]}>
        <Animated.View
          style={[styles.cardFrontBody, { height: height, width: width }, styles.card, frontAnimatedStyle]}>
          {frontComponent}
        </Animated.View>
        <Animated.View style={[styles.cardBackBody, { height: height, width: width }, styles.card, backAnimatedStyle]}>
          {backComponent}
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  cardFrontBody: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  cardBackBody: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  card: {
    position: "absolute",
    backfaceVisibility: "hidden",
  },
});
