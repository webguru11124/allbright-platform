import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "@react-navigation/native";
import React, { createContext, useCallback, useEffect, useState } from "react";

import { DefaultTheme } from "@/theme";

const THEME_KEY = "Settings:Theme";
const initContext = { theme: DefaultTheme, setTheme: null };

export const AppContext = createContext<{
  theme: typeof DefaultTheme;
  setTheme: Function | null;
  //Dispatch<SetStateAction<typeof DefaultTheme>> | null;
}>(initContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState(DefaultTheme);

  const setTheme = async (theme: Theme) => {
    await storeTheme(theme);
    setCurrentTheme(theme);
  };

  const storeTheme = async (value: Theme) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(THEME_KEY, jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  const getTheme = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(THEME_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
    }
  };

  const init = useCallback(async () => {
    const theme = (await getTheme()) || DefaultTheme;
    setCurrentTheme(theme);
  }, []);

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider value={{ theme: currentTheme, setTheme: setTheme }}>
      <ThemeProvider value={currentTheme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
