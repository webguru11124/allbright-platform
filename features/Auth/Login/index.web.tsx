import styled, { css } from "styled-components/native";

import { CM } from "@/components/Typography";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import { useContext } from "react";

type StyleProps = {
  maxWidth: (val: number) => boolean;
};

const Login = () => {
  const { maxWidth } = useContext<MediaQuery>(MediaQueryContext);

  return (
    <Main>
      <Section maxWidth={maxWidth}>
        <ImageContainer maxWidth={maxWidth}>
          <StyledImage
            source={require("@/assets/images/auth/login-image.png")}
            resizeMode="contain"
            maxWidth={maxWidth}
          />
        </ImageContainer>
        <ButtonContainer maxWidth={maxWidth}>
          <CM>Lorem Ipsum Dolor</CM>
        </ButtonContainer>
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
    `}
`;

const StyledImage = styled.Image<StyleProps>``;

const ButtonContainer = styled.View<StyleProps>`
  background: #fff;
  width: 50%;
  height: 100%;

  ${(props) =>
    props.maxWidth(BREAKPOINT_TABLET) &&
    css`
      width: 100%;
      height: 80%;
      background-color: white;
      opacity: 0.75;
      z-index: 10;
    `}
`;

export default Login;
