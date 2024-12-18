import { Slot } from "expo-router";

import Session from "@/features/Session";

export default function Layout() {
  return (
    <Session>
      <Slot />
    </Session>
  );
}
