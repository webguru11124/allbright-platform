import { Slot } from "expo-router";
import NavigationBar from "@/components/navigation/NavigationBar";

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <Slot />
    </>
  );
}
