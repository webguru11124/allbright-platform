import { Pressable, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { H5 } from "@/components/Typography";

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
  return (
    <Pressable
      style={[
        styles.tabItem,
        { borderColor: theme.colors.border, borderWidth: 1, minWidth: tabItemStyle?.minTabItemWidth ?? "auto" },
        tabItemStyle,
      ]}
      onPress={onPress}>
      <H5
        style={[
          styles.tabItemText,
          {
            color: active ? theme.colors.text : theme.colors.inactive,
            fontWeight: active ? 800 : 400,
          },
          tabItemTextStyle,
        ]}>
        {name}
      </H5>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 3,
    paddingHorizontal: 3,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  tabItemText: {
    fontWeight: 400,
  },
});

export default TabItem;
