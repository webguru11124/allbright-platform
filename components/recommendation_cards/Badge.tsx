import { StyleSheet, TextStyle, View } from "react-native";

import { CS } from "@/components/Typography";

type BadgeProps = {
  backgroundColor: string;
  color?: string;
  text: string;
};

const Badge = (props: BadgeProps) => {
  const style = styles(props);
  return (
    <View style={style.container}>
      <CS
        {...style.badge}
        testID="badge">
        {props.text}
      </CS>
    </View>
  );
};

const styles = (p: TextStyle) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      left: 10,
      top: 0,
      paddingHorizontal: 8,
      paddingVertical: 6,
      backgroundColor: p.backgroundColor,
    },
    badge: {
      fontWeight: 700,
      color: p.color,
    },
  });
export default Badge;
