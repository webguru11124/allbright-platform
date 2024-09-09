import { Stack } from "expo-router";

import HeaderBackButton from "@/components/HeaderBackButton";
import useTheme from "@/hooks/useTheme";

export default function RootLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
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
