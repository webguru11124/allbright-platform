import { View } from "react-native";

import AccountSettings from "@/features/Account/AccountSettings";
import ContactUs from "@/features/Account/ContactUs";
import Logout from "@/features/Account/Logout";
import Membership from "@/features/Account/Membership";
import Profile from "@/features/Account/Profile";
import Tabs from "@/features/Tabs/index.web";
import { BREAKPOINT_MOBILE } from "@/hooks/useMediaQuery";
import useTheme from "@/hooks/useTheme";

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
  {
    name: "Logout",
    component: <Logout />,
    key: "log_out",
  },
];

export default function Index() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        data={tabs}
        tabContainerStyle={{ flex: 1, displayVerticalBreakpointWidth: BREAKPOINT_MOBILE }}
        tabItemContainerStyle={{
          marginTop: 10,
          marginHorizontal: 20,
          paddingBottom: 10,
          distribution: "tab-start-left",
          borderColor: theme.colors.inactive,
        }}
        tabItemStyle={{ borderWidth: 0 }}
        tabItemTextStyle={{ fontSize: 14 }}
        tabBodyContainerStyle={{}}
        tabBodyItemStyle={{}}
      />
    </View>
  );
}
