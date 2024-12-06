import AccountProfileForm from "@/forms/AccountProfileForm/AccountProfileForm";
import accountProfileSchema from "@/forms/AccountProfileForm/accountProfileSchema";
import useAccountProfileForm from "@/forms/hooks/useAccountProfileForm";

export const AccountProfileFormContainer = ({ ...rest }) => {
  const props = useAccountProfileForm(accountProfileSchema);
  return (
    <AccountProfileForm
      {...props}
      {...rest}
    />
  );
};

export default AccountProfileFormContainer;
