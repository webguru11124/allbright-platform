import useRegisterForm from "../hooks/useRegisterForm";
import RegisterForm from "./RegisterForm";
import registerSchema from "./registerSchema";

export const RegisterFormContainer = ({ ...rest }) => {
  const props = useRegisterForm(registerSchema);
  return (
    <RegisterForm
      {...props}
      {...rest}
    />
  );
};

export default RegisterFormContainer;
