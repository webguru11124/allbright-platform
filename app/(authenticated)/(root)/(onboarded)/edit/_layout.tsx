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
          title: "Connect",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="article"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
