import { createContext } from "react";

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

  return (
    <UserContext.Provider value={{ user: data, refetch }}>
      {children}
    </UserContext.Provider>
  );
};
