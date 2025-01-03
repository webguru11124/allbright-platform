import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import { CS } from "@/components/Typography";

const LoginLink = () => {
  return (
    <View style={[styles.linkContainer]}>
      <CS>Already have an account? </CS>
      <Link
        href="/login"
        asChild>
        <Pressable>
          <CS style={[styles.csUnderlined]}>Login</CS>
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

export default LoginLink;
