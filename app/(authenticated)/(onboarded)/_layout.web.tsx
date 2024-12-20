import { Slot } from "expo-router";

import Navbar from "@/features/Navbar";
import useRedirectIfOnboarding from "@/hooks/useRedirectIfOnboarding";

export default function Layout() {
  useRedirectIfOnboarding();
  return (
    <>
      <Navbar />
      <Slot />
    </>
  );
}
