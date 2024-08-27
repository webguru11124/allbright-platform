import { Slot } from "expo-router";
import Navbar from "@/features/Navbar";
import { ThemeProvider } from "@react-navigation/native";

import { DefaultTheme } from "@/theme";

export default function Layout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Navbar />
      <Slot />
    </ThemeProvider>
  );
}
