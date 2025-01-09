import { StyleSheet, View } from "react-native";

import LoginLink from "@/features/Auth/partials/LoginLink";
import RegisterForm from "@/forms/RegisterForm";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

const RegisterMobile = ({ theme }: Props) => {
  return (
    <View style={[styles.main]}>
      <View style={[styles.formContainer, { backgroundColor: theme.colors.baseColor }]}>
        <RegisterForm />
      </View>
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
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 360,
    marginTop: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  linkContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
});

export default withTheme(RegisterMobile);
