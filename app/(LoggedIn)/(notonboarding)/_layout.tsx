import { Slot } from "expo-router";

import IsOnboarding from "@/components/IsOnboarding";

export default function Layout() {
    return (
        <IsOnboarding>
            <Slot />
        </IsOnboarding>
    );
}
