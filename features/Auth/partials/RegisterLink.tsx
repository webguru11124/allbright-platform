import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

const RegisterLink = ({ theme }: Props) => {
  return (
    <View style={[styles.linkContainer]}>
      <CS style={[{ color: theme.colors.txt.dark }]}>Don't have an account? </CS>
      <Link
        href="/register"
        asChild>
        <Pressable>
          <CS style={[styles.csUnderlined, { color: theme.colors.txt.dark }]}>Register</CS>
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

export default withTheme(RegisterLink);
