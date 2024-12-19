import { Slot } from "expo-router";

import { AuthenticatedProviders } from "@/utils/providers";

export default function RootLayout() {
  return (
    <AuthenticatedProviders>
      <Slot />
    </AuthenticatedProviders>
  );
}
