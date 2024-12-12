import ProfileMobile from "@/features/Account/Profile/Profile_Mobile";
import { FormProps } from "@/forms/types/forms.types";
import withTheme from "@/hocs/withTheme";
import { UserModel } from "@/types/user";

type Props = {
  theme: Theme;
  user: Partial<UserModel> | undefined;
  formProps: FormProps;
};

const Profile = ({ theme, user, formProps }: Props) => (
  <ProfileMobile
    theme={theme}
    user={user}
    formProps={formProps}
  />
);

export default withTheme(Profile);
