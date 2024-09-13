import RegisterForm from "@/forms/RegisterForm";
import styled from "styled-components/native";
import LoginLink from "../partials/LoginLink";

const Register = () => {
  return (
    <Main>
      <FormContainer>
        <RegisterForm />
        <LoginLink />
      </FormContainer>
    </Main>
  );
};

export default Register;

const Main = styled.View`
  flex: 1;
`;

const FormContainer = styled.View`
  padding: 30px 10px 0 10px;
  flex: 1;
  justify-content: flex-start;
`;
