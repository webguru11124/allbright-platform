import HeaderBackButton from "@/components/HeaderBackButton";
import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function Layout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: "Sign up",
        headerLeft: () => <HeaderBackButton />,
      }}
    />
  );
}
