import { router } from "expo-router";
import React, { useContext } from "react";

import { UserContext } from "@/contexts/UserContext";

type Props = {
  children: React.ReactNode;
};

const IsOnboarding = (props: Props) => {
  const { agreedToPledge } = useContext<User>(UserContext);

  React.useEffect(() => {
    if (agreedToPledge === false) router.navigate("onboarding/welcome");
  }, [agreedToPledge]);

  return props.children;
};

export default IsOnboarding;
