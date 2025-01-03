import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

import { CM } from "@/components/Typography";
import Button from "@/forms/components/Button";
import withTheme from "@/hocs/withTheme";

type Props = {
  onPress: GestureEvent;
  theme: Theme;
};

const EmailPasswordSignin = ({ onPress, theme }: Props) => {
  return (
    <Button
      style={[styles.button]}
      onPress={onPress}>
      <View style={[styles.imageContainer]}>
        <Image
          style={[styles.image]}
          source={require("@/assets/images/icon.png")}
        />
        <CM style={{ color: theme.colors.txt.light, fontWeight: 700 }}>Sign up with Email and Password</CM>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 304,
    height: 45,
    borderRadius: 4,
  },
  imageContainer: {
    width: "100%",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});

export default withTheme(EmailPasswordSignin);
