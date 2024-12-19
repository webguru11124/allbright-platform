import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";

import HeaderBackButton from "@/components/HeaderBackButton";
import useRedirectIfOnboarding from "@/hooks/useRedirectIfOnboarding";

export default function Layout() {
  useRedirectIfOnboarding();
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerShadowVisible: false,
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: "Onboarding",
        headerLeft: () => <HeaderBackButton />,
      }}>
      <Stack.Screen
        name="welcome/index"
        options={{ headerLeft: undefined }}
      />
    </Stack>
  );
}
