import styled from "styled-components/native";

import LoginLink from "@/features/Auth/partials/LoginLink";
import RegisterForm from "@/forms/RegisterForm";

const RegisterDesktop = () => (
  <Main>
    <Section>
      <ImageContainer>
        <StyledImage
          source={require("@/assets/images/auth/login-image.png")}
          resizeMode="cover"
        />
      </ImageContainer>
      <FormContainer>
        <RegisterForm />
        <LoginLink />
      </FormContainer>
    </Section>
  </Main>
);

const Main = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Section = styled.View`
  height: 90%;
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 30px #17171750;
`;

const ImageContainer = styled.View`
  position: relative;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledImage = styled.Image`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;

const FormContainer = styled.View`
  background: #eee;
  width: 50%;
  height: 100%;
  justify-content: center;
  padding: 20px;
`;

export default RegisterDesktop;
