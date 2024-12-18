import { Slot } from "expo-router";

import Navbar from "@/features/Navbar";
import Session from "@/features/Session";

export default function Layout() {
  return (
    <Session>
      <Navbar />
      <Slot />
    </Session>
  );
}
