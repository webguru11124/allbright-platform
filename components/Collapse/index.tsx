import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { CL } from "@/components/Typography";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Collapse({ title, children }: Props) {
  const [isVisible, setIsVisible] = React.useState(true);
  const animatedHeight = React.useRef(new Animated.Value(1)).current;

  function toggleVisibility() {
    Animated.timing(animatedHeight, {
      toValue: isVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsVisible(!isVisible);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={toggleVisibility}>
        <CL>{title}</CL>
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
    padding: 20,
  },
});
