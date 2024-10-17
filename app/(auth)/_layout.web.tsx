import { Slot } from "expo-router";

import Header from "@/features/Auth/partials/Header";
import Providers from "@/utils/providers";

export default function Layout() {
  return (
    <Providers>
      <Header />
      <Slot />
    </Providers>
  );
}
