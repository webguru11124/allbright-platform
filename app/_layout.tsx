import { ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router, Slot } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import Toast from "react-native-toast-message";

import { MediaQueryProvider } from "@/contexts/MediaQueryContext";
import { DefaultTheme } from "@/theme";
import { auth } from "@/utils/client/firebase";

const client = new QueryClient();

export default function RootLayout() {
  onAuthStateChanged(auth, (fbUser) => {
    if (fbUser) {
      router.navigate("/home");
    } else {
      router.navigate("/");
    }
  });

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider value={DefaultTheme}>
        <MediaQueryProvider>
          <Slot />
          <Toast />
        </MediaQueryProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
