import { Slot } from "expo-router";

import IsOnboarding from "@/components/IsOnboarding";
import Navbar from "@/features/Navbar";

export default function Layout() {
  return (
    <IsOnboarding>
      <Navbar />
      <Slot />
    </IsOnboarding>
  );
}
