import React from "react";
import { StyleProp, StyleSheet, View, ViewProps } from "react-native";

type Props = {
  style?: StyleProp<LayoutProps & ViewProps>;
  children: React.ReactNode;
};

const Column = ({ style, children }: Props) => <View style={[styles.column, style]}>{children}</View>;

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
});

export default Column;
