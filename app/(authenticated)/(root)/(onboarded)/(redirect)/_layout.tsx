import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerContent } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { View } from "react-native";

import { H4 } from "@/components/Typography";
import { useUserContext } from "@/contexts/UserContext";
import TabImage from "@/features/Navbar/partials/TabImage";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

function Layout({ theme }: Props) {
  const { user } = useUserContext();
  return (
    <>
      <Drawer
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          headerTintColor: theme.colors.txt.secondary,
          headerStyle: {
            backgroundColor: theme.colors.baseColor,
          },
          drawerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
        drawerContent={(props) => {
          return (
            <>
              <View
                style={{
                  backgroundColor: theme.colors.background,
                  borderBottomColor: theme.colors.txt.dark + "50",
                  borderBottomWidth: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: 20,
                  paddingTop: 100,
                }}>
                <TabImage
                  imageSrc={user?.imageSrc}
                  initials={(user?.firstName?.slice(0, 1) || "A") + (user?.lastName?.slice(0, 1) || "B")}
                />
                <H4 style={{ color: theme.colors.txt.dark, paddingLeft: 10 }}>{user?.name}</H4>
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
            drawerLabelStyle: {
              color: theme.colors.txt.dark,
            },
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="home"
                size={size}
                color={theme.colors.txt.dark}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="connect"
          options={{
            drawerLabel: "Connect",
            title: "Connect",
            drawerLabelStyle: {
              color: theme.colors.txt.dark,
            },
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="hub"
                size={size}
                color={theme.colors.txt.dark}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="learning"
          options={{
            drawerLabel: "Learning",
            title: "Learning",
            drawerLabelStyle: {
              color: theme.colors.txt.dark,
            },
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="school"
                size={size}
                color={theme.colors.txt.dark}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="events"
          options={{
            drawerLabel: "Events",
            title: "Events",
            drawerLabelStyle: {
              color: theme.colors.txt.dark,
            },
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="event"
                size={size}
                color={theme.colors.txt.dark}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="groups"
          options={{
            drawerLabel: "Groups",
            title: "Groups",
            drawerLabelStyle: {
              color: theme.colors.txt.dark,
            },
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="people"
                size={size}
                color={theme.colors.txt.dark}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="edit"
          options={{
            drawerLabel: "The AllBright Post",
            title: "The AllBright Post",
            drawerLabelStyle: {
              color: theme.colors.txt.dark,
            },
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="article"
                size={size}
                color={theme.colors.txt.dark}
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
        <Drawer.Screen
          name="member/[userId]"
          options={{
            title: "Account",
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </>
  );
}

export default withTheme(Layout);
