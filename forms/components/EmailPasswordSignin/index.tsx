import { Image } from "expo-image";
import React from "react";
import styled from "styled-components/native";

import Button from "@/forms/components/Button";

const EmailPasswordSignin = ({ onPress }: { onPress: GestureEvent }) => {
  return (
    <StyledButton onPress={onPress}>
      <VerticalCenter>
        <AllBrightIcon source={require("@/assets/images/icon.png")} />
        Sign in with Email and Password
      </VerticalCenter>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: 396px;
  height: 45px;
  margin-bottom: 8px;
  border-radius: 4px;
  text-align: center;
`;

const AllBrightIcon = styled(Image)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const VerticalCenter = styled.View`
  position: absolute;
  top: 0;
  left: -150;
  right: 0;
  bottom: 0;
  width: 300px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default EmailPasswordSignin;
