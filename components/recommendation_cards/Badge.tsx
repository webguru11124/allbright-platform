import { StyleSheet } from "react-native";

import { CS } from "../Typography";

type BadgeProps = {
  colour: string;
  text: string;
  textColour?: string;
};

const Badge = (props: BadgeProps) => {
  const styles = StyleSheet.create({
    badge: {
      position: "absolute",
      left: 10,
      top: 0,
      backgroundColor: props.colour,
      paddingHorizontal: 8,
      paddingVertical: 6,
      fontWeight: 700,
    },
  });

  return (
    <CS style={styles.badge} color={props.textColour}>
      {props.text}
    </CS>
  );
};

export default Badge;
