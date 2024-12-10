import { Slot } from "expo-router";
import Toast from "react-native-toast-message";

import Providers from "@/utils/providers";

export default function RootLayout() {
  return (
    <Providers>
      <Slot />
      <Toast />
    </Providers>
  );
}
