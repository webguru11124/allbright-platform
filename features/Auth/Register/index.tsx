import styled from "styled-components/native";
import RegisterForm from "@/forms/RegisterForm";

const Register = () => {
  return (
    <FormContainer>
      <RegisterForm />
    </FormContainer>
  );
};

export default Register;

const FormContainer = styled.View`
  padding: 30px 10px 0 10px;
  flex: 1;
  justify-content: flex-start;
`;
