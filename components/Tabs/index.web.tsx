import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import { H5 } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type TabContainerStyle = Pick<ViewStyle, "borderColor"> & { height?: number; displayVerticalWidth?: number };

type TabItemDistribution = "full-width-equally-spaced" | "tab-start-left" | "tab-start-right";
type TabItemContainerStyle = Pick<ViewStyle, "borderColor"> & { height?: number; distribution?: TabItemDistribution };

type TabItemTextStyle = StyleProp<TextStyle> & { height?: number };

type Data = {
  component: React.ReactNode;
  key: string;
  name: string;
};

type Props = {
  data: Data[];
  tabContainerStyle?: TabContainerStyle;
  tabItemContainerStyle?: TabItemContainerStyle;
  tabItemTextStyle?: TabItemTextStyle;
  theme: Theme;
};

const Tabs = ({ data, tabContainerStyle, tabItemContainerStyle, tabItemTextStyle, theme }: Props) => {
  return (
    <View style={[styles.tabContainer, { backgroundColor: theme.colors.background }, tabContainerStyle]}>
      <View style={[styles.tabItemContainer, tabItemContainerStyle]}>
        {data.map((item) => {
          return (
            <H5
              style={[styles.tabItemText, tabItemTextStyle]}
              key={item.key}>
              {item.name}
            </H5>
          );
        })}
      </View>
      <View>
        {data.map((item) => {
          return <View key={item.key}>{item.component}</View>;
        })}
      </View>
    </View>
  );
};

export default withTheme(Tabs);

const styles = StyleSheet.create({
  tabContainer: {},
  tabItemContainer: {
    flexDirection: "row",
  },
  tabItemText: {},
});
