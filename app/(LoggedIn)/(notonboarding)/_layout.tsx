import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import IsOnboarding from "@/components/IsOnboarding";

export default function Layout() {
  return (
    <IsOnboarding>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerStatusBarHeight: 0,
            headerStyle: {
              backgroundColor: "papayawhip",
            },
            headerTitleStyle: {
              marginTop: 0,
              padding: 0,
            },
          }}
        />
      </GestureHandlerRootView>
    </IsOnboarding>
  );
}
