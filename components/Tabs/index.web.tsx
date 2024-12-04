import { useContext, useMemo, useState } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import TabItem, { TabItemStyle, TabItemTextStyle } from "@/components/Tabs/partials/TabItem";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import withTheme from "@/hocs/withTheme";
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

type TabContainerStyle = Pick<ViewStyle, "backgroundColor"> & {
  height?: number;
  displayVerticalBreakpointWidth?: typeof BREAKPOINT_LAPTOP | typeof BREAKPOINT_TABLET | typeof BREAKPOINT_MOBILE;
};

type TabItemDistribution = "full-width-equally-spaced" | "tab-start-left" | "tab-start-right";
type TabItemContainerStyle = Pick<ViewStyle, "backgroundColor"> & {
  height?: number;
  distribution?: TabItemDistribution;
};

type TabBodyContainerStyle = StyleProp<ViewStyle>;

type TabBodyItemStyle = StyleProp<ViewStyle>;

type Data = {
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
  theme: Theme;
};

const Tabs = ({ data, tabContainerStyle, tabItemContainerStyle, tabItemStyle, tabItemTextStyle, theme }: Props) => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);
  const [activeTab, setActiveTab] = useState<number>(0);
  const distribution: "space-between" | "flex-start" | "flex-end" = useMemo(() => {
    switch (tabItemContainerStyle?.distribution) {
      case "full-width-equally-spaced":
        return "space-between";
      case "tab-start-right":
        return "flex-end";
      case "tab-start-left":
      default:
        return "flex-start";
    }
  }, [tabItemContainerStyle?.distribution]);
  const showVerticalTabItems: boolean = useMemo(
    () =>
      tabContainerStyle?.displayVerticalBreakpointWidth === undefined
        ? false
        : currentWidth > 0 && maxWidth(tabContainerStyle?.displayVerticalBreakpointWidth),
    [currentWidth, maxWidth, tabContainerStyle?.displayVerticalBreakpointWidth]
  );

  return (
    <View style={[styles.tabContainer, { backgroundColor: theme.colors.background }, tabContainerStyle]}>
      <View
        style={[
          styles.tabItemContainer,
          { justifyContent: distribution, flexDirection: showVerticalTabItems ? "column" : "row" },
          tabItemContainerStyle,
        ]}>
        {data.map((item, index) => {
          return (
            <TabItem
              tabItemStyle={tabItemStyle}
              tabItemTextStyle={tabItemTextStyle}
              key={item.key}
              name={item.name}
              onPress={() => setActiveTab(index)}
              active={activeTab === index}
              theme={theme}
            />
          );
        })}
      </View>
      <View style={[styles.tabBodyContainer]}>
        {data.map((item, index) => {
          return (
            <View
              style={[styles.tabBodyItem, { display: activeTab === index ? "flex" : "none" }]}
              key={item.key}>
              {item.component}
            </View>
          );
        })}
      </View>
    </View>
  );
};

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
  tabBodyItem: {
    flex: 1,
  },
});

export default withTheme(Tabs);
