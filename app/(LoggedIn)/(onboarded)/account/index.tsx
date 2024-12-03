import { View } from "react-native";

import Placeholder from "@/components/Placeholder";

export default function Index() {
  return (
    <View style={{ flex: 1, alignContent: "space-between", justifyContent: "space-between" }}>
      <View
        style={{ minHeight: 100 }}
        nativeID="profile-1">
        <Placeholder
          style={{ backgroundColor: "purple" }}
          textStyle={{ color: "white" }}
          placeholderText="Profile 1"
        />
      </View>
      <View
        style={{ minHeight: 100 }}
        nativeID="profile-2">
        <Placeholder
          style={{ backgroundColor: "green" }}
          textStyle={{ color: "white" }}
          placeholderText="Profile 2"
        />
      </View>
      <View
        style={{ minHeight: 100 }}
        nativeID="profile-3">
        <Placeholder
          style={{ backgroundColor: "red" }}
          textStyle={{ color: "white" }}
          placeholderText="Profile 3"
        />
      </View>
    </View>
  );
}
