import { StyleSheet, View } from "react-native";

import RegisterLink from "@/features/Auth/partials/RegisterLink";
import LoginForm from "@/forms/LoginForm";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

const LoginMobile = ({ theme }: Props) => {
  return (
    <View style={[styles.main]}>
      <View style={[styles.formContainer, { backgroundColor: theme.colors.baseColor }]}>
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
    alignItems: "flex-start",
    maxWidth: 360,
    marginTop: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default withTheme(LoginMobile);
