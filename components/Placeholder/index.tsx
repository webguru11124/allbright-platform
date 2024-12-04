import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import { H3 } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = TextStyle & {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  placeholderText?: string;
  theme: Theme;
  testID?: string;
};

const Placeholder = ({ style, textStyle, placeholderText = "Placeholder", testID = "Placeholder", theme }: Props) => (
  <View
    style={[styles.container, { backgroundColor: theme.colors.secondary }, style]}
    testID={testID}>
    <H3 style={[{ color: theme.colors.inputs.text }, textStyle]}>{placeholderText}</H3>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withTheme(Placeholder);
