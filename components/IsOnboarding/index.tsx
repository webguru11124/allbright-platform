import { router, usePathname } from "expo-router";
import React, { useEffect } from "react";

import { useUserContext } from "@/contexts/UserContext";

type Props = {
  children: React.ReactNode;
};

const IsOnboarding = (props: Props) => {
  const { user } = useUserContext();
  const pathname = usePathname();

  useEffect(() => {
    if (Boolean(user?.agreedToPledge) === false && pathname !== "/account") router.navigate("onboarding/welcome");
  }, [pathname, user?.agreedToPledge]);

  return props.children;
};

export default IsOnboarding;
