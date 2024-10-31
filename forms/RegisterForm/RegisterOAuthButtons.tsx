import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import Button from "@/forms/components/Button";
import GoogleSignIn from "@/forms/components/GoogleSignIn";

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
      <StyledButton onPress={handleEmailPasswordSignUp}>
        Sign in with Email/Password
      </StyledButton>

      <GoogleSignIn handleToken={handleGoogleSignUp} />

      <StyledButton onPress={handleFacebookSignUp}>
        Sign in with Facebook
      </StyledButton>

      <StyledButton onPress={handleLinkedInSignUp}>
        Sign in with LinkedIn
      </StyledButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const StyledButton = styled(Button)`
  margin-vertical: 8px;
  width: 100%;
`;

export default RegisterOAuthButtons;
