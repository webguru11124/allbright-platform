import React from "react";

import { useUserContext } from "@/contexts/UserContext";
import NavigationBar from "@/features/Navbar/NavigationBar";

const NavigationBarContainer = () => {
  const { user } = useUserContext();

  return <NavigationBar user={user} />;
};

export default NavigationBarContainer;
