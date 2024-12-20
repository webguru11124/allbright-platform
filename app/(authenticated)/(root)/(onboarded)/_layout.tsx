import { Slot } from "expo-router";

import useRedirectIfOnboarding from "@/hooks/useRedirectIfOnboarding";

export default function Layout() {
  useRedirectIfOnboarding();
  return <Slot />;
}
