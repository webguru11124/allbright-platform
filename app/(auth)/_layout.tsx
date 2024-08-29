import { ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";

import { DefaultTheme } from "@/theme";

export default function Layout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Slot />
    </ThemeProvider>
  );
}
