import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Recommendations",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="recommend"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="community_feed"
        options={{
          title: "Community Feed",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="people"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
