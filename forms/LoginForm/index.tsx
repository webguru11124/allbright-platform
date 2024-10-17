import useLoginForm from "@/forms/hooks/useLoginForm";

import LoginForm from "./LoginForm";
import loginSchema from "./loginSchema";

export const LoginFormContainer = ({ ...rest }) => {
  const props = useLoginForm(loginSchema);

  return (
    <LoginForm
      {...props}
      {...rest}
    />
  );
};

export default LoginFormContainer;
