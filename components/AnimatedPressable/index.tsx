import React, { useRef } from "react";
import { Animated, Pressable, StyleProp, StyleSheet, View, ViewProps } from "react-native";

type ExtraProps = {
  backgroundColor?: string;
};

type Props = {
  type?: "scaleOnHover";
  onPress: GestureEvent;
  containerStyle?: StyleProp<LayoutProps & ExtraProps>;
  pressableStyle?: StyleProp<LayoutProps & ExtraProps>;
  children?: React.ReactNode;
  testID?: string;
};

const AnimatedPressable = ({ type, containerStyle, pressableStyle, children, onPress, testID }: Props) => {
  switch (type) {
    case "scaleOnHover":
      return (
        <ScaleOnHoverPressable
          onPress={onPress}
          containerStyle={containerStyle}
          pressableStyle={pressableStyle}
          testID={testID}>
          {children}
        </ScaleOnHoverPressable>
      );
    default:
      return (
        <View style={[containerStyle as ViewProps]}>
          <Pressable
            testID={testID}
            style={[pressableStyle as ViewProps]}
            onPress={onPress}>
            {children}
          </Pressable>
        </View>
      );
  }
};

const ScaleOnHoverPressable = ({ containerStyle, pressableStyle, onPress, testID, children }: Omit<Props, "type">) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const scaleUp = () => {
    Animated.timing(scaleValue, {
      toValue: 1.1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const scaleDown = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View style={[styles.scaleOnHoverContainer, containerStyle, { transform: [{ scale: scaleValue }] }]}>
      <Pressable
        style={[styles.scaleOnHoverPressable, pressableStyle]}
        onPress={onPress}
        onHoverIn={scaleUp}
        onHoverOut={scaleDown}
        testID={testID}>
        {children}
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  scaleOnHoverContainer: {
    width: 50,
    height: 50,
  },
  scaleOnHoverPressable: {
    width: "100%",
    height: "100%",
  },
});

export default AnimatedPressable;
