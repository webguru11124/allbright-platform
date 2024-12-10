import { MaterialIcons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { Platform, Pressable, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { RootSiblingPortal } from "react-native-root-siblings";

import { CM } from "@/components/Typography";
import { Metrics } from "@/constants/Metrics";
import useTheme from "@/hooks/useTheme";

type Props = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type: "success" | "danger" | "warning" | "info";
  message: string;
};

const Toast = ({ style, textStyle, message, type }: Props): React.ReactElement | null => {
  const [show, setShow] = useState(true);
  const theme = useTheme();
  const backgroundColor = useMemo(() => theme.colors.alert[type], [theme.colors.alert, type]);
  const color = useMemo(() => {
    switch (type) {
      case "info":
      case "warning":
        return theme.colors.txt.dark;
      case "danger":
      case "success":
      default:
        return theme.colors.txt.light;
    }
  }, [theme.colors.txt.dark, theme.colors.txt.light, type]);

  return show ? (
    <RootSiblingPortal>
      <View style={[styles.root, { backgroundColor: backgroundColor }, style]}>
        <View style={[styles.main, StyleSheet.absoluteFill]}>
          <CM style={[{ color: color }, textStyle]}>{message}</CM>
        </View>
        <Pressable
          style={[styles.closeIcon]}
          onPress={() => setShow(false)}>
          <MaterialIcons
            name="close"
            size={24}
            color={color}
          />
        </Pressable>
      </View>
    </RootSiblingPortal>
  ) : null;
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 5,
    ...Platform.select({
      ios: {
        position: "absolute",
        top: 10,
        left: 100,
        right: 100,
        height: 100,
        backgroundColor: "rgba(255, 255, 0, 1)",
      },
      android: {
        position: "absolute",
        top: 10,
        left: 100,
        right: 100,
        height: 100,
        backgroundColor: "rgba(255, 255, 0, 1)",
      },
      default: {
        position: "absolute",
        top: Metrics.navbar.height + 10,
        left: "20%",
        right: "20%",
        height: 60,
        backgroundColor: "rgba(255, 255, 0, 1)",
      },
    }),
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default Toast;
