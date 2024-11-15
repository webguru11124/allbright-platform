import MaterialIcons from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Platform, Text } from "react-native";
import styled from "styled-components/native";

import Button from "@/forms/components/Button";

const FacebookSignIn = ({
  onPress,
  loading,
  isSignin,
}: {
  onPress: GestureEvent;
  isSignin: boolean;
  loading: boolean;
}) => {
  return (
    <StyledButton
      onPress={onPress}
      isLoading={loading}>
      <VerticalCenter>
        <FacebookIcon
          name={"facebook-square"}
          size={24}
          color={"white"}
        />
        <Text>
          {isSignin ? "Sign in" : "Sign up"} with <Bold>Facebook</Bold>
        </Text>
      </VerticalCenter>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: ${Platform.OS !== "web" ? "304px" : "396px"};
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
