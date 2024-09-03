import HeaderBackButton from "@/components/HeaderBackButton";
import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";

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
        headerTitle: "Sign up",
        headerLeft: () => <HeaderBackButton />,
      }}
    />
  );
}
