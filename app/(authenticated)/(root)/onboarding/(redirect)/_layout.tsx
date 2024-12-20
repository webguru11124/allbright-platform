import { router, Stack } from "expo-router";
import { useContext } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import HeaderBackButton from "@/components/HeaderBackButton";
import { CS } from "@/components/Typography";
import { UserContext } from "@/contexts/UserContext";
import useTheme from "@/hooks/useTheme";

export default function Layout() {
  const { user } = useContext(UserContext);
  const theme = useTheme();

  return (
    <>
      {user?.agreedToPledge && (
        <View style={styles.pressableContainer}>
          <Pressable onPress={() => router.replace("home")}>
            <CS style={{ textDecorationLine: "underline" }}>Go to home page</CS>
          </Pressable>
        </View>
      )}
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerShadowVisible: false,
          headerTintColor: theme.colors.primary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: "Onboarding",
          headerLeft: () => <HeaderBackButton />,
        }}>
        <Stack.Screen
          name="welcome/index"
          options={{ headerLeft: undefined }}
        />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  pressableContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
});
