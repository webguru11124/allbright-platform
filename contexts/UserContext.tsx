import { createContext } from "react";

import { useUserProfile } from "@/hooks/resources/useUserProfile";

export const UserContext = createContext<User>({} as User);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { data } = useUserProfile();

  return (
    <UserContext.Provider value={data as unknown as User}>
      {children}
    </UserContext.Provider>
  );
};
