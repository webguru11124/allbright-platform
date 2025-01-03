import MaterialIcons from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Button from "@/forms/components/Button";
import withTheme from "@/hocs/withTheme";

const FacebookSignIn = ({
  onPress,
  loading,
  isSignin,
  theme,
}: {
  onPress: GestureEvent;
  isSignin: boolean;
  loading: boolean;
  theme: Theme;
}) => {
  return (
    <Button
      style={[
        styles.button,
        { backgroundColor: theme.colors.button.facebookSignin, width: Platform.OS !== "web" ? 304 : 396 },
      ]}
      onPress={onPress}
      isLoading={loading}>
      <View style={[styles.vertialCenter]}>
        <MaterialIcons
          style={[styles.icon]}
          name={"facebook-square"}
          size={24}
          color={theme.colors.txt.light}
        />
        <Text style={{ color: theme.colors.txt.light, fontWeight: 500 }}>
          {isSignin ? "Sign in" : "Sign up"} with <Text style={[styles.bold]}>Facebook</Text>
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
    height: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  bold: {
    fontWeight: 800,
  },
});

export default withTheme(FacebookSignIn);
