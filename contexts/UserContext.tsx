import React, { createContext, useContext, useState } from "react";

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
  const { data, refetch } = useUserProfile();
  const [user, setUser] = useState<Partial<UserModel> | undefined>();

  React.useEffect(() => {
    setUser(data);
  }, [data]);

  React.useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UserContext.Provider value={{ user, refetch }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used within a UserProvider");
  return context;
};
