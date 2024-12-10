import { Slot } from "expo-router";

import IsAuthenticated from "@/components/IsAuthenticated";

export default function Layout() {
  return (
    <IsAuthenticated>
      <Slot />
    </IsAuthenticated>
  );
}
