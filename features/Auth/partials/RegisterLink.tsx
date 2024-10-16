import { Link } from "expo-router";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import { CS } from "@/components/Typography";

const RegisterLink = () => {
  return (
    <LinkContainer>
      <CS>Don't have an account? </CS>
      <Link
        href="/register"
        asChild>
        <Pressable>
          <CsUnderlined>Register</CsUnderlined>
        </Pressable>
      </Link>
    </LinkContainer>
  );
};

export default RegisterLink;

const LinkContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const CsUnderlined = styled(CS)`
  text-decoration: underline;
`;
