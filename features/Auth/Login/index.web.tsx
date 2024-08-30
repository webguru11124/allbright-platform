import { useContext } from "react";
import { Image } from "react-native";
import styled, { css } from "styled-components/native";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import LoginForm from "@/features/Auth/Login/forms/LoginForm";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

type StyleProps = {
  maxWidth: (val: number) => boolean;
};

const Login = () => {
  const { maxWidth } = useContext<MediaQuery>(MediaQueryContext);

  return (
    <Main>
      <Section maxWidth={maxWidth}>
        <ImageContainer maxWidth={maxWidth}>
          <Image
            source={require("@/assets/images/auth/login-image.png")}
            resizeMode="contain"
            blurRadius={maxWidth(BREAKPOINT_TABLET) ? 10 : 0}
          />
        </ImageContainer>
        <FormContainer maxWidth={maxWidth}>
          <LoginForm />
        </FormContainer>
      </Section>
    </Main>
  );
};

const Main = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Section = styled.View<StyleProps>`
  height: 80%;
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 30px #17171750;

  ${(props) =>
    props.maxWidth(BREAKPOINT_TABLET) &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      width: 90%;
      height: 100%;
      padding: 10px 0;
    `}
`;

const ImageContainer = styled.View<StyleProps>`
  position: relative;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.maxWidth(BREAKPOINT_TABLET) &&
    css`
      height: 80%;
      width: 100%;
      position: absolute;
      bottom: 0;
      top: 20px;
    `}
`;

const FormContainer = styled.View<StyleProps>`
  background: #eee;
  width: 50%;
  height: 100%;
  justify-content: center;
  padding: 20px;

  ${(props) =>
    props.maxWidth(BREAKPOINT_TABLET) &&
    css`
      position: absolute;
      top: 20px;
      bottom: 0;
      width: 100%;
      height: 80%;
      background-color: transparent;
      z-index: 1;
    `}
`;

export default Login;
