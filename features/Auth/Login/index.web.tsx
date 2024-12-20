import React, { useContext } from "react";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import LoginDesktop from "@/features/Auth/Login/Login_Desktop";
import LoginMobile from "@/features/Auth/Login/Login_Mobile";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

const Login = () => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return showCompactDisplay ? <LoginMobile /> : <LoginDesktop />;
};

export default Login;
