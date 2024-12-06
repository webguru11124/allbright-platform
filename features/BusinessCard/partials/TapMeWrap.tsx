import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};
const TapMeWrap = ({ style, children }: Props) => <View style={[styles.root, style]}>{children}</View>;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: 50,
    width: 100,
    paddingBottom: 8,
    position: "absolute",
    top: -20,
    right: -6,
    zIndex: 2,
    transform: [{ rotate: "45deg" }],
  },
});

export default TapMeWrap;
