import { View } from "react-native";

import Placeholder from "@/components/Placeholder";
import Tabs from "@/components/Tabs/index.web";

const tabs = [
  {
    name: "Profile",
    component: (
      <Placeholder
        style={{ backgroundColor: "purple" }}
        textStyle={{ color: "white" }}
        placeholderText="Profile"
      />
    ),
    key: "profile",
  },
  {
    name: "Account Settings",
    component: (
      <Placeholder
        style={{ backgroundColor: "green" }}
        textStyle={{ color: "white" }}
        placeholderText="Account Settings"
      />
    ),
    key: "account_settings",
  },
  {
    name: "Membership",
    component: (
      <Placeholder
        style={{ backgroundColor: "red" }}
        textStyle={{ color: "white" }}
        placeholderText="Membership"
      />
    ),
    key: "membership",
  },
  {
    name: "Contact Us",
    component: (
      <Placeholder
        style={{ backgroundColor: "blue" }}
        textStyle={{ color: "orange" }}
        placeholderText="Contact Us"
      />
    ),
    key: "contact_us",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        data={tabs}
        tabContainerStyle={{ height: 500, displayVerticalBreakpointWidth: 480 }}
        tabItemContainerStyle={{ distribution: "tab-start-left" }}
        tabItemStyle={{ minTabItemWidth: 100 }}
        tabItemTextStyle={{}}
        tabBodyContainerStyle={{}}
        tabBodyItemStyle={{}}
      />
    </View>
  );
}
