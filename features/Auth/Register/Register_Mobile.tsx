import styled from "styled-components/native";

import LoginLink from "@/features/Auth/partials/LoginLink";
import RegisterForm from "@/forms/RegisterForm";

const RegisterMobile = () => {
  return (
    <Main>
      <FormContainer>
        <RegisterForm />
        <LoginLink />
      </FormContainer>
    </Main>
  );
};

export default RegisterMobile;

const Main = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

const FormContainer = styled.View`
  flex: 1;
  min-width: 360px;
  padding: 30px 10px 0 10px;
  justify-content: flex-start;
`;
