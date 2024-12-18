import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import Session from "@/features/Session";
import useRootLayout from "@/hooks/useRootLayout";

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
    <Session>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </Session>
  );
}
