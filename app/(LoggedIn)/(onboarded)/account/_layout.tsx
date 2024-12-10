import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

import useTheme from "@/hooks/useTheme";

export default function TabLayout() {
  const theme = useTheme();
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.primary }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="account-circle"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account_settings"
        options={{
          title: "Account Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="manage-accounts"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="membership"
        options={{
          title: "Membership",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="badge"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact_us"
        options={{
          title: "Contact Us",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="contact-support"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          title: "Logout",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="logout"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
