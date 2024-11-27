import { router, usePathname } from "expo-router";
import React, { useEffect } from "react";

import { getToken } from "@/utils/token";

type Props = {
  children: React.ReactNode;
};

const authenticationPaths = ["/", "/register", "/login"];

const IsAuthenticated = (props: Props) => {
  const pathname = usePathname();
  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (Boolean(token) === false) {
        authenticationPaths.includes(pathname) === false &&
          router.navigate("/");
      } else {
        router.navigate("/home");
      }
    };

    checkToken();
  }, [pathname]);

  return props.children;
};

export default IsAuthenticated;
