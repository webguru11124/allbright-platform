import { View } from "react-native";

import AccountSettings from "@/features/Account/AccountSettings";
import ContactUs from "@/features/Account/ContactUs";
import Membership from "@/features/Account/Membership";
import Profile from "@/features/Account/Profile";
import Tabs from "@/features/Tabs/index.web";

const tabs = [
  {
    name: "Profile",
    component: <Profile />,
    key: "profile",
  },
  {
    name: "Account Settings",
    component: <AccountSettings />,
    key: "account_settings",
  },
  {
    name: "Membership",
    component: <Membership />,
    key: "membership",
  },
  {
    name: "Contact Us",
    component: <ContactUs />,
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
