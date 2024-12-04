import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export type TabBodyItemStyle = StyleProp<ViewStyle>;

type Props = {
  active: boolean;
  component: React.ReactNode;
  tabBodyItemStyle?: TabBodyItemStyle;
};

const TabBodyItem = ({ active, component, tabBodyItemStyle }: Props) => {
  return <View style={[styles.tabBodyItem, tabBodyItemStyle, { display: active ? "flex" : "none" }]}>{component}</View>;
};

const styles = StyleSheet.create({
  tabBodyItem: {
    flex: 1,
  },
});

export default TabBodyItem;
