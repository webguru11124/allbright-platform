import React from "react";
import { StyleSheet, View } from "react-native";

import EmailPasswordSignIn from "@/forms/components/EmailPasswordSignin";
import FacebookSignIn from "@/forms/components/FacebookSignIn";
import GoogleSignIn from "@/forms/components/GoogleSignIn";
import LinkedInSignIn from "@/forms/components/LinkedinSignIn";
import useOAuthLogin from "@/forms/hooks/useOAuthLogin";

interface Props {
  onEmailPasswordSignUp?: () => void;
}

export const OAuthForm = (props: Props) => {
  const isSignup = !!props.onEmailPasswordSignUp;
  const { googleLogin, facebookLogin, linkedinLogin } = useOAuthLogin(isSignup);

  const handleEmailPasswordSignUp = () => {
    if (props.onEmailPasswordSignUp) props.onEmailPasswordSignUp();
  };

  return (
    <View style={[styles.container]}>
      {isSignup && <EmailPasswordSignIn onPress={handleEmailPasswordSignUp} />}
      <GoogleSignIn
        isSignin={!isSignup}
        handleToken={googleLogin}
      />
      <FacebookSignIn
        isSignin={!isSignup}
        handleToken={facebookLogin}
      />
      <LinkedInSignIn
        isSignin={!isSignup}
        onPress={linkedinLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OAuthForm;
