import { Slot } from "expo-router";

import Header from "@/features/Auth/partials/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Slot />
    </>
  );
}
