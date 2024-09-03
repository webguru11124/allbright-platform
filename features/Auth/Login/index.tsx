import styled from "styled-components/native";
import LoginForm from "@/forms/LoginForm";

const Login = () => {
  return (
    <FormContainer>
      <LoginForm />
    </FormContainer>
  );
};

export default Login;

const FormContainer = styled.View`
  padding: 30px 10px 0 10px;
  flex: 1;
  justify-content: flex-start;
`;
