import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const Row = ({ style, children }: Props) => <View style={[styles.row, style]}>{children}</View>;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default Row;
