import { View } from "react-native";

import Profile from "@/features/Account/Profile";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 1 }}
        nativeID="profile-1">
        <Profile />
      </View>
    </View>
  );
}
