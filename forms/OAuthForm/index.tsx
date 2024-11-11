import React from "react";
import styled from "styled-components/native";

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
    <Container>
      {isSignup && <EmailPasswordSignIn onPress={handleEmailPasswordSignUp} />}
      <GoogleSignIn
        isSignin={!isSignup}
        handleToken={googleLogin}
      />
      <FacebookSignIn
        isSignin={!isSignup}
        onPress={facebookLogin}
      />
      <LinkedInSignIn
        isSignin={!isSignup}
        onPress={linkedinLogin}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export default OAuthForm;
