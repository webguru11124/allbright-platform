import MaterialIcons from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Button from "@/forms/components/Button";
import withTheme from "@/hocs/withTheme";

type Props = {
  onPress: GestureEvent;
  theme: Theme;
  isSignin: boolean;
};

const LinkedInSignin = ({ theme, onPress, isSignin }: Props) => {
  return (
    <Button
      style={[
        styles.button,
        { backgroundColor: theme.colors.button.linkedinSignIn, width: Platform.OS !== "web" ? 304 : 396 },
      ]}
      onPress={onPress}>
      <View style={[styles.vertialCenter]}>
        <MaterialIcons
          style={[styles.icon]}
          name={"linkedin-square"}
          size={24}
          color={theme.colors.txt.light}
        />
        <Text style={{ color: theme.colors.txt.light, fontWeight: 500 }}>
          {isSignin ? "Sign in" : "Sign up"} in with LinkedIn
        </Text>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 45,
    marginTop: 8,
    backgroundColor: "transparent",
    borderRadius: 4,
  },
  vertialCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default withTheme(LinkedInSignin);
