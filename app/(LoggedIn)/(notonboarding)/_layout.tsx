import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import IsOnboarding from "@/components/IsOnboarding";
import useTheme from "@/hooks/useTheme";

export default function Layout() {
  const theme = useTheme();
  return (
    <IsOnboarding>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerStatusBarHeight: 0,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerTintColor: theme.colors.primary,
            headerTitleStyle: {
              color: theme.colors.primary,
            },
          }}>
          <Drawer.Screen
            name="home"
            options={{
              drawerLabel: "Home",
              title: "Home",
            }}
          />
          <Drawer.Screen
            name="connect"
            options={{
              drawerLabel: "Connect",
              title: "Connect",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </IsOnboarding>
  );
}
