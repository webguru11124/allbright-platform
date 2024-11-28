import { router } from "expo-router";
import React, { useContext, useEffect } from "react";

import { UserContext } from "@/contexts/UserContext";

type Props = {
  children: React.ReactNode;
};

const IsOnboarding = (props: Props) => {
  const { user, refetch } = useContext<{
    user: User;
    refetch: Function;
  }>(UserContext);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (user?.agreedToPledge === false) router.navigate("onboarding/welcome");
  }, [user?.agreedToPledge]);

  return props.children;
};

export default IsOnboarding;
