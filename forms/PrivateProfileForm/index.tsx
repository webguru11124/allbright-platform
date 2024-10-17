import usePrivateProfileForm from "@/forms/hooks/usePrivateProfileForm";
import PrivateProfileForm from "@/forms/PrivateProfileForm/PrivateProfileForm";
import privateProfileSchema from "@/forms/PrivateProfileForm/privateProfileSchema";

export const PrivateProfileFormContainer = ({ ...rest }) => {
  const props = usePrivateProfileForm(privateProfileSchema);
  return (
    <PrivateProfileForm
      {...props}
      {...rest}
    />
  );
};

export default PrivateProfileFormContainer;
