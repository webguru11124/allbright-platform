import { router } from "expo-router";
import React, { useContext, useEffect } from "react";

import { UserContext } from "@/contexts/UserContext";

type Props = {
  children: React.ReactNode;
};

const IsOnboarding = (props: Props) => {
  const { agreedToPledge, refetch } = useContext<any>(UserContext);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (Boolean(agreedToPledge) === false)
      router.navigate("onboarding/welcome");
  }, [agreedToPledge]);

  return props.children;
};

export default IsOnboarding;
