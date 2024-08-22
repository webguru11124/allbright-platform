import { Stack } from "expo-router";
import { LogBox } from "react-native";

LogBox.ignoreLogs([/Animated: `useNativeDriver`.*/]);

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
