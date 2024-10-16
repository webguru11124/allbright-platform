import { Slot } from "expo-router";
import Providers from "@/utils/providers";

export default function Layout() {
  return (
    <Providers>
      <Slot />
    </Providers>
  );
}
