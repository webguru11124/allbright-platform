import React, { useContext } from "react";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import ProfileDesktop from "@/features/Account/Profile/Profile_Desktop";
import ProfileMobile from "@/features/Account/Profile/Profile_Mobile";
import { FormProps } from "@/forms/types/forms.types";
import withTheme from "@/hocs/withTheme";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import { UserModel } from "@/types/user";

type Props = {
  theme: Theme;
  user: Partial<UserModel> | undefined;
  formProps: FormProps;
};

const Profile = ({ theme, user, formProps }: Props) => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showAsSingleColumn = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return showAsSingleColumn ? (
    <ProfileMobile
      theme={theme}
      user={user}
      formProps={formProps}
    />
  ) : (
    <ProfileDesktop
      theme={theme}
      user={user}
      formProps={formProps}
    />
  );
};

export default withTheme(Profile);
