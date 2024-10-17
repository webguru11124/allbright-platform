import { Slot } from "expo-router";

import IsAuthenticated from "@/components/IsAuthenticated";
import Navbar from "@/features/Navbar";
import Providers from "@/utils/providers";

export default function Layout() {
  return (
    <IsAuthenticated>
      <Providers>
        <Navbar />
        <Slot />
      </Providers>
    </IsAuthenticated>
  );
}
