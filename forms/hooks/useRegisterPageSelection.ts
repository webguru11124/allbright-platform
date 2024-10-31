import React from "react";

type viewMode = "EMAIL_PASSWORD" | "OAUTH_BUTTONS";

const useRegisterPageSelection = (): [viewMode, (mode: viewMode) => void] => {
  const [mode, setMode] = React.useState<viewMode>("OAUTH_BUTTONS");
  return [mode, setMode];
};
export default useRegisterPageSelection;
