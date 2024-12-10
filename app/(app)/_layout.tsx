import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import IsAuthenticated from "@/components/IsAuthenticated";
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
    <IsAuthenticated>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </IsAuthenticated>
  );
}
