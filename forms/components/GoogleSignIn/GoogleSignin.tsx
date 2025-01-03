import MaterialIcons from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { CM } from "@/components/Typography";
import Button from "@/forms/components/Button";
import withTheme from "@/hocs/withTheme";

const GoogleSignIn = ({
  onPress,
  loading,
  isSignin,
  theme,
}: {
  onPress: GestureEvent;
  loading: boolean;
  isSignin: boolean;
  theme: Theme;
}) => {
  return (
    <Button
      style={[
        styles.button,
        { backgroundColor: theme.colors.button.googleSignIn, width: Platform.OS !== "web" ? 304 : 396 },
      ]}
      onPress={onPress}
      isLoading={loading}>
      <View style={[styles.vertialCenter]}>
        <MaterialIcons
          style={[styles.googleIcon]}
          name={"google"}
          size={24}
          color={theme.colors.txt.light}
        />
        <CM style={{ color: theme.colors.txt.light }}>
          {isSignin ? "Sign in" : "Sign up"} with <Text style={[styles.bold]}>Google</Text>
        </CM>
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
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  googleIcon: {
    marginRight: 10,
  },
  bold: {
    fontWeight: 800,
  },
});

export default withTheme(GoogleSignIn);
