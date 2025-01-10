import { ThemeProvider } from "@react-navigation/native";
import React, { createContext, Dispatch, SetStateAction, useState } from "react";

import { DefaultTheme } from "@/theme";

const initContext = { theme: DefaultTheme, setTheme: null };

export const AppContext = createContext<{
  theme: typeof DefaultTheme;
  setTheme: Dispatch<SetStateAction<typeof DefaultTheme>> | null;
}>(initContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(DefaultTheme);

  return (
    <AppContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <ThemeProvider value={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
