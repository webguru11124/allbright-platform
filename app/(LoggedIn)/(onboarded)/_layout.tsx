import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerContent } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import IsOnboarding from "@/components/IsOnboarding";
import { H4 } from "@/components/Typography";
import { UserContext } from "@/contexts/UserContext";
import TabImage from "@/features/Navbar/partials/TabImage";
import useTheme from "@/hooks/useTheme";
import { UserModel } from "@/types/user";

export default function Layout() {
  const { user } = React.useContext<{
    user: Partial<UserModel> | undefined;
    refetch: Function;
  }>(UserContext);
  const theme = useTheme();
  return (
    <IsOnboarding>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          drawerContent={(props) => {
            return (
              <>
                <View
                  style={{
                    backgroundColor: theme.colors.background,
                    padding: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}>
                  <TabImage
                    imageSrc={user?.imageSrc}
                    initials={(user?.firstName?.slice(0, 1) || "A") + (user?.lastName?.slice(0, 1) || "B")}
                  />
                  <H4 style={{ paddingLeft: 10 }}>{user?.name}</H4>
                </View>
                <DrawerContent {...props}></DrawerContent>
              </>
            );
          }}>
          <Drawer.Screen
            name="home"
            options={{
              drawerLabel: "Home",
              title: "Home",
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="home"
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.inactive}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="connect"
            options={{
              drawerLabel: "Connect",
              title: "Connect",
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="hub"
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.inactive}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="learning"
            options={{
              drawerLabel: "Learning",
              title: "Learning",
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="school"
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.inactive}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="events"
            options={{
              drawerLabel: "Events",
              title: "Events",
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="event"
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.inactive}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="groups"
            options={{
              drawerLabel: "Groups",
              title: "Groups",
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="people"
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.inactive}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="edit"
            options={{
              drawerLabel: "The AllBright Post",
              title: "The AllBright Post",
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="article"
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.inactive}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="account"
            options={{
              title: "Account",
              drawerItemStyle: { display: "none" },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </IsOnboarding>
  );
}
