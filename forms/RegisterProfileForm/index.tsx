import useRegisterProfileForm from "@/forms/hooks/useRegisterProfileForm";

import RegisterProfileForm from "./RegisterProfileForm";
import registerProfileSchema from "./registerProfileSchema";

export const RegisterFormContainer = ({ ...rest }) => {
  const props = useRegisterProfileForm(registerProfileSchema);
  return (
    <RegisterProfileForm
      {...props}
      {...rest}
    />
  );
};

export default RegisterFormContainer;
