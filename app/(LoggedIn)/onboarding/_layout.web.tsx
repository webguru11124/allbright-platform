import { Stack } from "expo-router";

import useRedirectIfOnboarding from "@/hooks/useRedirectIfOnboarding";

export default function RootLayout() {
  useRedirectIfOnboarding();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
