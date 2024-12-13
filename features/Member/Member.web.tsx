import React, { useContext } from "react";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import withTheme from "@/hocs/withTheme";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import { UserModel } from "@/types/user";

import MemberDesktop from "./Member_Desktop";
import MemberMobile from "./Member_Mobile";

type Props = {
  theme: Theme;
  user: UserModel;
};

const Member = ({ user, theme }: Props) => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return showCompactDisplay ? (
    <MemberMobile
      user={user}
      theme={theme}
    />
  ) : (
    <MemberDesktop
      user={user}
      theme={theme}
    />
  );
};

export default withTheme(Member);
