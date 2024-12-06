import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};
const InfoSection = ({ style, children }: Props) => <View style={[styles.root, style]}>{children}</View>;

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    justifyContent: "center",
    height: 60,
  },
});

export default InfoSection;
