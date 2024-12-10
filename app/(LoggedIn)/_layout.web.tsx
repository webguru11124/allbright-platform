import { Slot } from "expo-router";

import IsAuthenticated from "@/components/IsAuthenticated";
import Navbar from "@/features/Navbar";

export default function Layout() {
  return (
    <IsAuthenticated>
      <Navbar />
      <Slot />
    </IsAuthenticated>
  );
}
