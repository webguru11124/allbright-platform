import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label?: string;
  onPress: GestureEvent;
  color?: string;
  size?: number;
};

export default function IconButton({
  icon,
  label,
  onPress,
  color = "#fff",
  size = 24,
}: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={size} color={color} />
      {label && <Text style={styles.iconButtonLabel}>{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
