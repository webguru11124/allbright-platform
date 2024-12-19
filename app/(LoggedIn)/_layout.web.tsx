import { Slot } from "expo-router";

import Navbar from "@/features/Navbar";
import { AuthenticatedProviders } from "@/utils/providers";

export default function Layout() {
  return (
    <AuthenticatedProviders>
      <Navbar />
      <Slot />
    </AuthenticatedProviders>
  );
}
