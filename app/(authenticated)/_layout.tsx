import { Slot } from "expo-router";

import { AuthenticatedProviders } from "@/utils/providers";

export default function Layout() {
  return (
    <AuthenticatedProviders>
      <Slot />
    </AuthenticatedProviders>
  );
}
