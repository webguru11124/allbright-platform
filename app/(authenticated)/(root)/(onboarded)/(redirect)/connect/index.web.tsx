import { View } from "react-native";

import Connect from "@/features/Connect/Connect";
import FindMentor from "@/features/Connect/FindMentor";
import YourMentorship from "@/features/Connect/Mentorship";
import Tabs from "@/features/Tabs/index.web";
import useTheme from "@/hooks/useTheme";
import { recommendationColor } from "@/theme";

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
          marginTop: 20,
          marginHorizontal: 20,
          marginBottom: 10,
          distribution: "tab-start-left",
          paddingHorizontal: 400,
          paddingVertical: 10,
          borderColor: theme.colors.inactive,
          backgroundColor: recommendationColor.subnav,
        }}
        tabItemStyle={{ borderWidth: 0 }}
        tabItemTextStyle={{ fontSize: 14, color: theme.colors.inputs.background }}
        tabBodyContainerStyle={{}}
        tabBodyItemStyle={{}}
      />
    </View>
  );
}
