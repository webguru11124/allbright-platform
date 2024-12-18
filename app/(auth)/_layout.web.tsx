import { Slot } from "expo-router";

import Header from "@/features/Auth/partials/Header";
import Session from "@/features/Session";

export default function Layout() {
  return (
    <Session>
      <Header />
      <Slot />
    </Session>
  );
}
