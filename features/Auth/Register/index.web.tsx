import React, { useContext } from "react";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import RegisterDesktop from "@/features/Auth/Register/Register_Desktop";
import RegisterMobile from "@/features/Auth/Register/Register_Mobile";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

const Register = () => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return showCompactDisplay ? <RegisterMobile /> : <RegisterDesktop />;
};

export default Register;
