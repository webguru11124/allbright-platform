import { getToken } from "@/utils/token";
import React from "react";
import { router } from "expo-router";

type Props = {
  children: React.ReactNode;
};

const IsAuthenticated = (props: Props) => {
  React.useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (Boolean(token) === false) {
        router.navigate("/login");
      }
    };

    checkToken();
  }, []);

  return props.children;
};

export default IsAuthenticated;
