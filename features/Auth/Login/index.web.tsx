import { Image } from "react-native";
import styled from "styled-components/native";

const Login = () => {
  return (
    <Main>
      <Section>
        <ImageContainer>
          <Image
            source={require("@/assets/images/auth/login-image.png")}
            resizeMode="contain"
            style={{ height: "100%" }}
          />
        </ImageContainer>
        <ButtonContainer></ButtonContainer>
      </Section>
    </Main>
  );
};

const Main = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Section = styled.View`
  height: 80%;
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 200px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.View`
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ButtonContainer = styled.View`
  background: #fff;
  width: 50%;
  height: 100%;
`;

export default Login;
