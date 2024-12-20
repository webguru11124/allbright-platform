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
`;

const FormContainer = styled.View`
  padding: 30px 10px 0 10px;
  justify-content: flex-start;
`;
