import Navbar from "@/features/Navbar";
import { Slot } from "expo-router";

import Providers from "@/utils/providers";

export default function Layout() {
  return (
    <Providers>
      <Navbar />
      <Slot />
    </Providers>
  );
}
