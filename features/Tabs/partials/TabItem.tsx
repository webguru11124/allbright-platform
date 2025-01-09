import { useRef } from "react";
import { Animated, Easing, Pressable, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import { H6 } from "@/components/Typography";

export type TabItemStyle = StyleProp<ViewStyle> & { minTabItemWidth?: number };

export type TabItemTextStyle = StyleProp<TextStyle> & { height?: number };

type Props = {
  tabItemStyle?: TabItemStyle;
  tabItemTextStyle?: TabItemTextStyle;
  name: string;
  onPress: GestureEvent;
  active: boolean;
  theme: Theme;
};

const TabItem = ({ tabItemStyle, tabItemTextStyle, name, onPress, active, theme }: Props) => {
  const widthAnim = useRef(new Animated.Value(0)).current;
  const ANIMATION_DURATION = 250;

  const onHoverIn = () => {
    Animated.timing(widthAnim, {
      toValue: 100,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.linear),
    }).start();
  };

  const onHoverOut = () => {
    Animated.timing(widthAnim, {
      toValue: 0,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  return (
    <Pressable
      style={[
        styles.tabItem,
        { borderColor: theme.colors.border, borderWidth: 1, minWidth: tabItemStyle?.minTabItemWidth ?? "auto" },
        tabItemStyle,
      ]}
      onPress={onPress}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}>
      <View style={styles.tabItemContainer}>
        <View style={styles.tabItemAnimatedWidth}>
          <H6
            style={[
              styles.tabItemText,
              {
                color: active ? theme.colors.inputs.text : theme.colors.inactive,
                fontWeight: active ? 800 : 400,
              },
              tabItemTextStyle,
            ]}>
            {name}
          </H6>
          <Animated.View
            style={[
              {
                height: 2,
                backgroundColor: "black",
                marginTop: 3,
                width: widthAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
                alignSelf: "flex-start",
              },
            ]}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 3,
    paddingTop: 5,
    paddingHorizontal: 10,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  tabItemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabItemAnimatedWidth: {
    alignSelf: "flex-start",
  },
  tabItemText: {
    fontWeight: 400,
  },
});

export default TabItem;
