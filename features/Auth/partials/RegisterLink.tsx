import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import { CS } from "@/components/Typography";

const RegisterLink = () => {
  return (
    <View style={[styles.linkContainer]}>
      <CS>Don't have an account? </CS>
      <Link
        href="/register"
        asChild>
        <Pressable>
          <CS style={[styles.csUnderlined]}>Register</CS>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },
  csUnderlined: { textDecorationLine: "underline" },
});

export default RegisterLink;
