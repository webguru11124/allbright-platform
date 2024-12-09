import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};
const Header = ({ style, children }: Props) => <View style={[styles.root, style]}>{children}</View>;

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    gap: 10,
    width: "70%",
  },
});

export default Header;
