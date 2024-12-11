import { View } from "react-native";

import Connect from "@/features/Connect/Connect";
import FindMentor from "@/features/Connect/FindMentor";
import YourMentorship from "@/features/Connect/Mentorship";
import Tabs from "@/features/Tabs/index.web";
import useTheme from "@/hooks/useTheme";

const tabs = [
  {
    name: "Connect",
    component: <Connect />,
    key: "connect",
  },
  {
    name: "Find a Mentor",
    component: <FindMentor />,
    key: "find_a_mentor",
  },
  {
    name: "Membership",
    component: <YourMentorship />,
    key: "your_mentorship",
  },
];

export default function Index() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        data={tabs}
        tabContainerStyle={{ flex: 1, displayVerticalBreakpointWidth: 480 }}
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
