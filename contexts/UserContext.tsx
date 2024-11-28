import { createContext } from "react";

import { useUserProfile } from "@/hooks/resources/useUserProfile";

const initContext = { ...({} as User) };

// TODO: Fix typescript issue
export const UserContext = createContext<any>(initContext);

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
