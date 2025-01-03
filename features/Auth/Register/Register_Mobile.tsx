import { StyleSheet, View } from "react-native";

import LoginLink from "@/features/Auth/partials/LoginLink";
import RegisterForm from "@/forms/RegisterForm";

const RegisterMobile = () => {
  return (
    <View style={[styles.main]}>
      <RegisterForm />
      <View style={[styles.linkContainer]}>
        <LoginLink />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },

  linkContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
});

export default RegisterMobile;
