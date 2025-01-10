import { router, Slot, usePathname } from "expo-router";
import Toast from "react-native-toast-message";

import { auth } from "@/utils/client/firebase";
import { onAuthStateChanged } from "@/utils/client/FirebaseAuthClient";
import { AppProviders } from "@/utils/providers";

const authenticationPaths = ["/", "/register", "/login"];

export default function RootLayout() {
  const pathname = usePathname();

  onAuthStateChanged(auth, (fbUser) => {
    if (fbUser) {
      authenticationPaths.includes(pathname) === true && router.navigate("/home");
    } else {
      authenticationPaths.includes(pathname) === false && router.navigate("/");
    }
  });

  return (
    <AppProviders>
      <Slot />
      <Toast />
    </AppProviders>
  );
}
