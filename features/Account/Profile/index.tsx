import { useContext } from "react";

import { UserContext } from "@/contexts/UserContext";
import Profile from "@/features/Account/Profile/Profile";
import accountProfileSchema from "@/forms/AccountProfileForm/accountProfileSchema";
import useAccountProfileForm from "@/forms/hooks/useAccountProfileForm";
import { UserModel } from "@/types/user";

const ProfileContainer = () => {
  const { user } = useContext<{
    user: Partial<UserModel> | undefined;
    refetch: Function;
  }>(UserContext);
  const formProps = useAccountProfileForm(accountProfileSchema);

  return (
    <Profile
      user={user}
      formProps={formProps}
    />
  );
};

export default ProfileContainer;
