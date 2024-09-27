import React from "react";

import AppStart from "./AppStart";
import useAppStart from "./hooks/useAppStart";

export const AppStartContainer = ({ ...rest }) => {
  const props = useAppStart();
  return (
    <AppStart
      {...props}
      {...rest}
    />
  );
};

export default AppStartContainer;
