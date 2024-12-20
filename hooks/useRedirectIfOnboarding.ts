import { router, usePathname } from "expo-router";
import { useContext, useEffect, useMemo } from "react";

import { UserContext } from "@/contexts/UserContext";

const useRedirectIfOnboarding = () => {
  const { user } = useContext(UserContext);
  const pathname = usePathname();

  const isOnboarding = useMemo(
    () => user && Boolean(user?.agreedToPledge) === false && pathname !== "/account",
    [pathname, user]
  );

  useEffect(() => {
    if (isOnboarding) {
      router.replace("/onboarding/welcome");
    }
  }, [isOnboarding]);
};

export default useRedirectIfOnboarding;
