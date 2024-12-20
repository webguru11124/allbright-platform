import styled from "styled-components/native";

import RegisterLink from "@/features/Auth/partials/RegisterLink";
import LoginForm from "@/forms/LoginForm";

const LoginMobile = () => {
  return (
    <Main>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <RegisterLink />
    </Main>
  );
};

export default LoginMobile;

const Main = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

const FormContainer = styled.View`
  flex: 1;
  max-width: 360px;
  padding: 30px 10px 0 10px;
  align-items: flex-start;
`;
