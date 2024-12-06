import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};
const Main = ({ style, children }: Props) => <View style={[styles.root, style]}>{children}</View>;

const styles = StyleSheet.create({
  root: {
    width: 300,
    height: 260,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "yellow",
    shadowColor: "#ddd",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default Main;
