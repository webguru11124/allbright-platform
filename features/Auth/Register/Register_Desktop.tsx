import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import LoginLink from "@/features/Auth/partials/LoginLink";
import RegisterForm from "@/forms/RegisterForm";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

const RegisterDesktop = ({ theme }: Props) => (
  <View style={[styles.main]}>
    <View style={[styles.section]}>
      <View style={[styles.imageContainer]}>
        <Image
          style={[StyleSheet.absoluteFill]}
          source={require("@/assets/images/auth/login-image.png")}
          contentFit="cover"
        />
      </View>
      <View style={[styles.formContainer, { backgroundColor: theme.colors.baseColor }]}>
        <RegisterForm />
        <LoginLink />
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
    height: "90%",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 30,
    shadowColor: "#17171750",
  },
  imageContainer: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  formContainer: {
    backgroundColor: "transparent",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
});

export default withTheme(RegisterDesktop);
