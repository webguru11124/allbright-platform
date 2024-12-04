import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import TabBodyItem, { TabBodyItemStyle } from "@/features/Tabs/partials/TabBodyItem";
import TabItem, { TabItemStyle, TabItemTextStyle } from "@/features/Tabs/partials/TabItem";
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

export type TabContainerStyle = Pick<ViewStyle, "backgroundColor"> & {
  height?: number;
  displayVerticalBreakpointWidth?: typeof BREAKPOINT_LAPTOP | typeof BREAKPOINT_TABLET | typeof BREAKPOINT_MOBILE;
};

export type TabItemDistribution = "full-width-equally-spaced" | "tab-start-left" | "tab-start-right";
export type TabItemContainerStyle = Pick<ViewStyle, "backgroundColor"> & {
  height?: number;
  distribution?: TabItemDistribution;
};

export type TabBodyContainerStyle = StyleProp<ViewStyle>;

export type Data = {
  component: React.ReactNode;
  key: string;
  name: string;
};

type Props = {
  data: Data[];
  tabContainerStyle?: TabContainerStyle;
  tabItemContainerStyle?: TabItemContainerStyle;
  tabItemStyle?: TabItemStyle;
  tabItemTextStyle?: TabItemTextStyle;
  tabBodyContainerStyle?: TabBodyContainerStyle;
  tabBodyItemStyle?: TabBodyItemStyle;
  distribution: "space-between" | "flex-start" | "flex-end";
  activeTab: number;
  setActiveTab: Function;
  showVerticalTabItems: boolean;
  theme: Theme;
};

const Tabs = ({
  data,
  tabContainerStyle,
  tabItemContainerStyle,
  tabItemStyle,
  tabItemTextStyle,
  tabBodyContainerStyle,
  tabBodyItemStyle,
  distribution,
  activeTab,
  setActiveTab,
  showVerticalTabItems,
  theme,
}: Props) => (
  <View style={[styles.tabContainer, { backgroundColor: theme.colors.background }, tabContainerStyle]}>
    <View
      style={[
        styles.tabItemContainer,
        { justifyContent: distribution, flexDirection: showVerticalTabItems ? "column" : "row" },
        tabItemContainerStyle,
      ]}>
      {data.map((item, index) => (
        <TabItem
          tabItemStyle={tabItemStyle}
          tabItemTextStyle={tabItemTextStyle}
          name={item.name}
          onPress={() => setActiveTab(index)}
          active={activeTab === index}
          theme={theme}
          key={item.key}
        />
      ))}
    </View>
    <View style={[styles.tabBodyContainer, tabBodyContainerStyle]}>
      {data.map((item, index) => (
        <TabBodyItem
          tabBodyItemStyle={tabBodyItemStyle}
          active={activeTab === index}
          component={item.component}
          key={item.key}
        />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  tabContainer: {
    flexBasis: "auto",
    flexShrink: 1,
  },
  tabItemContainer: {
    flexDirection: "row",
    marginTop: 5,
    borderBottomWidth: 1,
  },
  tabBodyContainer: {
    flex: 1,
  },
});

export default Tabs;
