import React, { useContext } from "react";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import withTheme from "@/hocs/withTheme";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

import RecommendedConnectDesktop from "./RecommendConnect_Desktop";
import RecommendConnectMobile from "./RecommendConnect_Mobile";

type Props = {
  theme: Theme;
  hitComponent: React.ComponentType<any>;
};

const RecommendConnect = ({ hitComponent }: Props) => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return showCompactDisplay ? (
    <RecommendConnectMobile hitComponent={hitComponent} />
  ) : (
    <RecommendedConnectDesktop hitComponent={hitComponent} />
  );
};

export default withTheme(RecommendConnect);
