import React from "react";

import useAppStart from "@/features/AppStart/hooks/useAppStart";
import { AppStartProps } from "@/features/AppStart/types";

const withAppStartProps = (WrappedComponent: React.FC<AppStartProps>) => {
  const WC = ({ ...rest }) => {
    const props = useAppStart();

    return (
      <WrappedComponent
        {...props}
        {...rest}
      />
    );
  };

  WC.displayName = WrappedComponent.displayName;
  return WC;
};

export default withAppStartProps;
