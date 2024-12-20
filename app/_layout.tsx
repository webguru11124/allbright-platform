import { ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router, Slot, usePathname } from "expo-router";
import Toast from "react-native-toast-message";

import { MediaQueryProvider } from "@/contexts/MediaQueryContext";
import { DefaultTheme } from "@/theme";
import { auth } from "@/utils/client/firebase";
import { onAuthStateChanged } from "@/utils/client/FirebaseAuthClient";

const client = new QueryClient();

const authenticationPaths = ["/", "/register", "/login"];

export default function Root() {
  const pathname = usePathname();

  onAuthStateChanged(auth, (fbUser) => {
    if (fbUser) {
      authenticationPaths.includes(pathname) === true && router.navigate("/home");
    } else {
      authenticationPaths.includes(pathname) === false && router.navigate("/");
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
