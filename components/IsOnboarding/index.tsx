import { router } from "expo-router";
import React, { useContext, useEffect } from "react";

import { UserContext } from "@/contexts/UserContext";
import { UserModel } from "@/types/user";

type Props = {
  children: React.ReactNode;
};

const IsOnboarding = (props: Props) => {
  const { user } = useContext<{
    user: Partial<UserModel> | undefined;
    refetch: Function;
  }>(UserContext);

  useEffect(() => {
    if (Boolean(user?.agreedToPledge) === false) router.navigate("onboarding/welcome");
  }, [user?.agreedToPledge]);

  return props.children;
};

export default IsOnboarding;
