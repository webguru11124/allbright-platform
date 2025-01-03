import { StyleSheet, View } from "react-native";

import RegisterLink from "@/features/Auth/partials/RegisterLink";
import LoginForm from "@/forms/LoginForm";

const LoginMobile = () => {
  return (
    <View style={[styles.main]}>
      <View style={[styles.formContainer]}>
        <LoginForm />
      </View>
      <RegisterLink />
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
  formContainer: {
    flex: 1,
    maxWidth: 360,
    paddingTop: 30,
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },
});

export default LoginMobile;
