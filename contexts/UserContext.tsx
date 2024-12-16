import React, { createContext, useContext } from "react";

import { useUserGoals } from "@/hooks/resources/useUserGoals";
import { useUserProfile } from "@/hooks/resources/useUserProfile";
import { UserModel } from "@/types/user";

const initContext = { user: undefined, refetch: () => {} };

export const UserContext = createContext<{
  user: Partial<UserModel> | undefined;
  refetch: Function;
}>(initContext);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { data, refetch: refetchProfile } = useUserProfile();
  const { careerGoals, refetch: refetchGoals } = useUserGoals();

  const refetch = React.useCallback(async () => {
    await refetchProfile();
    await refetchGoals();
  }, [refetchProfile, refetchGoals]);

  React.useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = React.useMemo(() => ({ user: { ...data, careerGoals }, refetch }), [data, careerGoals, refetch]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used within a UserProvider");
  return context;
};
