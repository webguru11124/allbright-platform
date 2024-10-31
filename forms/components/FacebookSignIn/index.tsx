import React from "react";
import styled from "styled-components/native";

import Button from "@/forms/components/Button";

const FacebookSignIn = ({ onPress }: { onPress: GestureEvent }) => {
  return <StyledButton onPress={onPress}>Sign in with Facebook</StyledButton>;
};

const StyledButton = styled(Button)`
  margin-vertical: 8px;
  width: 100%;
`;

export default FacebookSignIn;
