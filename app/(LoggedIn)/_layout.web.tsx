import { Slot } from "expo-router";
import Navbar from "@/features/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Slot />
    </>
  );
}
