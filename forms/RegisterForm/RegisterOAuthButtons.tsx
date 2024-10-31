import React from "react";
import styled from "styled-components/native";

import EmailPasswordSignIn from "@/forms/components/EmailPasswordSignin";
import FacebookSignIn from "@/forms/components/FacebookSignIn";
import GoogleSignIn from "@/forms/components/GoogleSignIn";
import LinkedInSignIn from "@/forms/components/LinkedinSignIn";

interface Props {
  onEmailPasswordSignUp: () => void;
  onGoogleSignUp: () => void;
  onFacebookSignUp: () => void;
  onLinkedInSignUp: () => void;
}

export const RegisterOAuthButtons = (props: Props) => {
  const handleEmailPasswordSignUp = () => {
    // Handle email/password sign-in logic here
    props.onEmailPasswordSignUp();
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign-in logic here
    props.onGoogleSignUp();
  };

  const handleFacebookSignUp = () => {
    // Handle Facebook sign-in logic here
    props.onFacebookSignUp();
  };

  const handleLinkedInSignUp = () => {
    // Handle LinkedIn sign-in logic here
    props.onLinkedInSignUp();
  };

  return (
    <Container>
      <EmailPasswordSignIn onPress={handleEmailPasswordSignUp} />
      <GoogleSignIn handleToken={handleGoogleSignUp} />
      <FacebookSignIn onPress={handleFacebookSignUp} />
      <LinkedInSignIn onPress={handleLinkedInSignUp} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export default RegisterOAuthButtons;
