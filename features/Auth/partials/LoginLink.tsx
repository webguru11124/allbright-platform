import { Link } from "expo-router";
import { Pressable } from "react-native";
import styled from "styled-components/native";

import { CS } from "@/components/Typography";

const LoginLink = () => {
  return (
    <LinkContainer>
      <CS>Already have an account? </CS>
      <Link
        href="/login"
        asChild>
        <Pressable>
          <CsUnderlined>Login</CsUnderlined>
        </Pressable>
      </Link>
    </LinkContainer>
  );
};

export default LoginLink;

const LinkContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const CsUnderlined = styled(CS)`
  text-decoration: underline;
`;
