import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ArrowDown } from "@/components/Icons"; // Import ArrowDown icon
import { CL, CM } from "@/components/Typography";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Collapse({ title, children }: Props) {
  const [isVisible, setIsVisible] = React.useState(true);
  const animatedHeight = React.useRef(new Animated.Value(1)).current;
  const rotateAnim = React.useRef(new Animated.Value(0)).current; // Animation value for rotation

  function toggleVisibility() {
    Animated.timing(animatedHeight, {
      toValue: isVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(rotateAnim, {
      toValue: isVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsVisible(!isVisible);
  }

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-90deg"],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={toggleVisibility}
        testID="collapse-header">
        <CM>{title}</CM>
        <Animated.View
          style={{ transform: [{ rotate }] }}
          testID={"arrow-icon"}>
          <ArrowDown color="black" />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View
        style={{
          height: animatedHeight.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300],
          }),
        }}>
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
});
