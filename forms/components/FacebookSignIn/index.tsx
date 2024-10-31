import MaterialIcons from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import Button from "@/forms/components/Button";

const FacebookSignIn = ({ onPress }: { onPress: GestureEvent }) => {
  return (
    <StyledButton onPress={onPress}>
      <VerticalCenter>
        <FacebookIcon
          name={"facebook-square"}
          size={24}
          color={"white"}
        />
        <Text>
          Login with <Bold>Facebook</Bold>
        </Text>
      </VerticalCenter>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: 304px;
  height: 45px;
  margin-top: 8px;
  background-color: #5890ff;
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

const Bold = styled.Text`
  font-weight: 800;
`;

export default FacebookSignIn;
