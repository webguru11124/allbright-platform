import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};
const ImageWrap = ({ style, children }: Props) => <View style={[styles.root, style]}>{children}</View>;

const styles = StyleSheet.create({
  root: {
    height: 70,
    width: 70,
    position: "absolute",
    top: 20,
    right: 20,
    borderRadius: 0.5,
    overflow: "hidden",
  },
});

export default ImageWrap;
