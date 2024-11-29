import React from "react";

import { UserContext } from "@/contexts/UserContext";
import NavigationBar from "@/features/Navbar/NavigationBar";
import { UserModel } from "@/types/user";

const NavigationBarContainer = () => {
  const { user } = React.useContext<{
    user: Partial<UserModel> | undefined;
    refetch: Function;
  }>(UserContext);

  return <NavigationBar user={user} />;
};

export default NavigationBarContainer;
