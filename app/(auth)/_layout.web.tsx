import { Slot } from "expo-router";

import IsAuthenticated from "@/components/IsAuthenticated";
import Header from "@/features/Auth/partials/Header";
import Providers from "@/utils/providers";

export default function Layout() {
  return (
    <IsAuthenticated>
      <Providers>
        <Header />
        <Slot />
      </Providers>
    </IsAuthenticated>
  );
}
