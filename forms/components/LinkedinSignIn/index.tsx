import MaterialIcons from "@expo/vector-icons/FontAwesome";
import React from "react";
import styled from "styled-components/native";

import Button from "@/forms/components/Button";

const LinkedInSignin = ({ onPress }: { onPress: GestureEvent }) => {
  return (
    <StyledButton onPress={onPress}>
      <VerticalCenter>
        <FacebookIcon
          name={"linkedin-square"}
          size={24}
          color={"white"}
        />
        Sign in with LinkedIn
      </VerticalCenter>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: 396px;
  height: 45px;
  margin-top: 8px;
  background-color: #0077b5;
  border-radius: 4px;
  text-align: center;
`;

const VerticalCenter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FacebookIcon = styled(MaterialIcons)`
  margin-right: 10px;
`;

export default LinkedInSignin;
