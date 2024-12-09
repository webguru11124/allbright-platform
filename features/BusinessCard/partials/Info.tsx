import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};
const Info = ({ style, children }: Props) => <View style={[styles.root, style]}>{children}</View>;

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    flexDirection: "column",
    zIndex: 2,
    bottom: 0,
    ...Platform.select({
      ios: {
        paddingHorizontal: 20,
      },
      android: {
        paddingHorizontal: 20,
      },
      default: {
        paddingHorizontal: 0,
      },
    }),
  },
});

export default Info;
