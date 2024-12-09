import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
};
const TapMeTriangle = ({ style }: Props) => <View style={[styles.root, style]} />;

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: -7.5,
    right: -32.5,
    height: 0,
    width: 0,
    borderLeftColor: "transparent",
    borderLeftWidth: 50,
    borderRightColor: "transparent",
    borderRightWidth: 50,
    borderBottomColor: "transparent",
    borderBottomWidth: 50,
    transform: [{ rotate: "45deg" }],
  },
});

export default TapMeTriangle;
