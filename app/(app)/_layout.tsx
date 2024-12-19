import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import useRootLayout from "@/hooks/useRootLayout";

export default function Layout() {
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
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
