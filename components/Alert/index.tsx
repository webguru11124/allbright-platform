import React from "react";
import Toast from "react-native-root-toast";
import { StyleSheet } from "react-native";

type Props = {
  visible: boolean;
  children: React.ReactNode;
  onPress: GestureEvent;
};

const Alert = ({ visible, children, onPress }: Props) => {
  return (
    <Toast
      position={10}
      shadow={true}
      animation={true}
      onPress={onPress}
      containerStyle={styles.container}
      textStyle={styles.text}
      opacity={1}
      visible={visible}>
      {children}
    </Toast>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    minWidth: "80%",
  },
  text: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 50,
  },
});

export default Alert;
