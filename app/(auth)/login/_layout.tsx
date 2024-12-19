import { Stack } from "expo-router";

import HeaderBackButton from "@/components/HeaderBackButton";
import useTheme from "@/hooks/useTheme";

export default function Layout() {
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
        headerTitle: "Login",
        headerLeft: () => <HeaderBackButton />,
      }}
    />
  );
}
