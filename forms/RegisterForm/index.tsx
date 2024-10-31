import useRegisterForm from "@/forms/hooks/useRegisterForm";
import useRegisterPageSelection from "@/forms/hooks/useRegisterPageSelection";

import RegisterForm from "./RegisterForm";
import RegisterOAuthButtons from "./RegisterOAuthButtons";
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
      <RegisterOAuthButtons
        onEmailPasswordSignUp={() => setMode("EMAIL_PASSWORD")}
        onGoogleSignUp={() => console.log("Google sign-up")}
        onFacebookSignUp={() => console.log("Facebook sign-up")}
        onLinkedInSignUp={() => console.log("LinkedIn sign-up")}
      />
    );
  }
};

export default RegisterFormContainer;
