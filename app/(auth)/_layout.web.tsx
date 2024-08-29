import { ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import { MediaQueryProvider } from "@/contexts/MediaQueryContext";

import Header from "@/features/Auth/partials/Header";
import { DefaultTheme } from "@/theme";

export default function Layout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <MediaQueryProvider>
        <Header />
        <Slot />
      </MediaQueryProvider>
    </ThemeProvider>
  );
}
