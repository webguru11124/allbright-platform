import React from "react";

import SettingsMobile from "@/features/Settings/Settings_Mobile";

type Props = {
  isDarkTheme: boolean;
};

const Settings = ({ isDarkTheme }: Props) => {
  console.log(isDarkTheme);
  return <SettingsMobile />;
};

export default Settings;
