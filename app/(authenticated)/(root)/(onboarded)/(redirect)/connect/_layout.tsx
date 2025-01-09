import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

import useTheme from "@/hooks/useTheme";

export default function TabLayout() {
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: theme.colors.background,
        tabBarInactiveBackgroundColor: theme.colors.background,
        tabBarActiveTintColor: theme.colors.txt.dark,
        tabBarInactiveTintColor: theme.colors.txt.dark + "50",
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Connect",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="hub"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="find_a_mentor"
        options={{
          title: "Find a Mentor",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="school"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="your_mentorship"
        options={{
          title: "Your Mentorship",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="people-alt"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
