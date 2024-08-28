import React from "react";

import useTheme from "@/hooks/useTheme";

const withTheme = (WrappedComponent: React.FC<any>) => {
  const WC = ({ ...rest }) => {
    const theme: Theme = useTheme();

    return <WrappedComponent theme={theme} {...rest} />;
  };

  WC.displayName = WrappedComponent.displayName;
  return WC;
};

export default withTheme;
