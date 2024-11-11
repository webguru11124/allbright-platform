import useRegisterForm from "@/forms/hooks/useRegisterForm";
import useRegisterPageSelection from "@/forms/hooks/useRegisterPageSelection";
import OAuthForm from "@/forms/OAuthForm";

import RegisterForm from "./RegisterForm";
import registerSchema from "./registerSchema";

export const RegisterFormContainer = ({ ...rest }) => {
  const props = useRegisterForm(registerSchema);
  const [mode, setMode] = useRegisterPageSelection();

  if (mode === "EMAIL_PASSWORD") {
    return (
      <RegisterForm
        {...props}
        {...rest}
        onBackPress={() => {
          setMode("OAUTH_BUTTONS");
        }}
      />
    );
  } else if (mode === "OAUTH_BUTTONS") {
    return (
      <OAuthForm
        onEmailPasswordSignUp={() => {
          setMode("EMAIL_PASSWORD");
        }}
      />
    );
  }
};

export default RegisterFormContainer;
