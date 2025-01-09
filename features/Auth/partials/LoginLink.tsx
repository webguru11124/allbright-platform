import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

const LoginLink = ({ theme }: Props) => {
  return (
    <View style={[styles.linkContainer]}>
      <CS style={[{ color: theme.colors.txt.dark }]}>Already have an account? </CS>
      <Link
        href="/login"
        asChild>
        <Pressable>
          <CS style={[styles.csUnderlined, { color: theme.colors.txt.dark }]}>Login</CS>
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

export default withTheme(LoginLink);
