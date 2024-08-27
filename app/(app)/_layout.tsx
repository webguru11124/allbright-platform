import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import useRootLayout from "@/hooks/useRootLayout";
import { DefaultTheme } from "@/theme";
import { ThemeProvider } from "@react-navigation/native";

export default function RootLayout() {
  const [loaded, error] = useRootLayout();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </ThemeProvider>
  );
}
