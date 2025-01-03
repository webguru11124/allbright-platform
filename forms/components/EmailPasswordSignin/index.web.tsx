import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "@/forms/components/Button";
import withTheme from "@/hocs/withTheme";

type Props = {
  onPress: GestureEvent;
  theme: Theme;
};

const EmailPasswordSignin = ({ theme, onPress }: Props) => {
  return (
    <Button
      style={[styles.button]}
      onPress={onPress}>
      <View style={[styles.imageContainer]}>
        <Image
          style={[styles.image]}
          source={require("@/assets/images/icon.png")}
        />
        <Text style={{ color: theme.colors.txt.light, fontWeight: 700 }}>Sign up with Email and Password</Text>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 396,
    height: 45,
    borderRadius: 4,
    marginBottom: 8,
  },
  imageContainer: {
    width: "100%",
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
