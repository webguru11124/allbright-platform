import { useContext, useMemo, useState } from "react";
import { Pressable, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import { H5 } from "@/components/Typography";
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

type TabItemStyle = StyleProp<ViewStyle> & { minTabItemWidth?: number };

type TabItemTextStyle = StyleProp<TextStyle> & { height?: number };

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
  const { maxWidth } = useContext<MediaQuery>(MediaQueryContext);
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
  const showVerticalTabItems: boolean = useMemo(() => {
    if (tabContainerStyle?.displayVerticalBreakpointWidth === undefined) {
      return false;
    } else {
      return maxWidth(tabContainerStyle?.displayVerticalBreakpointWidth);
    }
  }, [maxWidth, tabContainerStyle?.displayVerticalBreakpointWidth]);

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
            <Pressable
              style={[
                styles.tabItem,
                { borderColor: theme.colors.border, borderWidth: 1, minWidth: tabItemStyle?.minTabItemWidth ?? "auto" },
                tabItemStyle,
              ]}
              key={item.key}
              onPress={() => setActiveTab(index)}>
              <H5
                style={[
                  styles.tabItemText,
                  {
                    color: activeTab === index ? theme.colors.text : theme.colors.inactive,
                    fontWeight: activeTab === index ? 800 : 400,
                  },
                  tabItemTextStyle,
                ]}>
                {item.name}
              </H5>
            </Pressable>
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

export default withTheme(Tabs);

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
  tabBodyContainer: {
    flex: 1,
  },
  tabBodyItem: {
    flex: 1,
  },
});
