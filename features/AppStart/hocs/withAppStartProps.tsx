import React from "react";

import { Props as AppStartProps } from "@/features/AppStart";
import useAppStart from "@/features/AppStart/hooks/useAppStart";

const withAppStartProps = (WrappedComponent: React.FC<AppStartProps>) => {
  const WC = ({ ...rest }) => {
    const props = useAppStart();

    return <WrappedComponent {...props} {...rest} />;
  };

  WC.displayName = "AppStart";
  return WC;
};

export default withAppStartProps;
