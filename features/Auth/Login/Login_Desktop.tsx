import { Image, StyleSheet, View } from "react-native";

import RegisterLink from "@/features/Auth/partials/RegisterLink";
import LoginForm from "@/forms/LoginForm";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

const LoginDesktop = ({ theme }: Props) => (
  <View style={[styles.main]}>
    <View style={[styles.section]}>
      <View style={[styles.imageContainer]}>
        <Image
          style={[styles.image]}
          source={require("@/assets/images/auth/login-image.png")}
          resizeMode="cover"
        />
      </View>
      <View style={[styles.formContainer, { backgroundColor: theme.colors.baseColor }]}>
        <LoginForm />
        <RegisterLink />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    height: "80%",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#17171750",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  imageContainer: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  formContainer: {
    backgroundColor: "transparent",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
});

export default withTheme(LoginDesktop);
