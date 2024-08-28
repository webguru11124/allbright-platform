import { Slot } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";

import { DefaultTheme } from "@/theme";
import Header from "@/features/Auth/partials/Header";

export default function Layout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Header />
      <Slot />
    </ThemeProvider>
  );
}
