import React, { useContext } from "react";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import SettingsDesktop from "@/features/Settings/Settings_Desktop";
import SettingsMobile from "@/features/Settings/Settings_Mobile";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

const Settings = () => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return showCompactDisplay ? <SettingsMobile /> : <SettingsDesktop />;
};

export default Settings;
