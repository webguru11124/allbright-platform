import { Slot } from "expo-router";

import IsAuthenticated from "@/components/IsAuthenticated";
import Providers from "@/utils/providers";

export default function Layout() {
  return (
    <IsAuthenticated>
      <Providers>
        <Slot />
      </Providers>
    </IsAuthenticated>
  );
}
