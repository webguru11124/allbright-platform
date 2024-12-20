import { Image } from "expo-image";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import Button from "@/forms/components/Button";

const EmailPasswordSignin = ({ onPress }: { onPress: GestureEvent }) => {
  return (
    <StyledButton onPress={onPress}>
      <AllBrightIcon source={require("@/assets/images/icon.png")} />
      <Text>Sign up with Email and Password</Text>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: 304px;
  height: 45px;
  margin-bottom: 8px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AllBrightIcon = styled(Image)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export default EmailPasswordSignin;
