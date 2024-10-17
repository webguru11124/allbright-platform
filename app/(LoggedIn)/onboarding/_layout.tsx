import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";

import HeaderBackButton from "@/components/HeaderBackButton";

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
        headerTitle: "Onboarding",
        headerLeft: () => <HeaderBackButton />,
      }}
    />
  );
}
