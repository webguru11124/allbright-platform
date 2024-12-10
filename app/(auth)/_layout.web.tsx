import { Slot } from "expo-router";

import IsAuthenticated from "@/components/IsAuthenticated";
import Header from "@/features/Auth/partials/Header";

export default function Layout() {
  return (
    <IsAuthenticated>
      <Header />
      <Slot />
    </IsAuthenticated>
  );
}
