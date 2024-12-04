import { TabBodyItemStyle } from "@/components/Tabs/partials/TabBodyItem";
import { TabItemStyle, TabItemTextStyle } from "@/components/Tabs/partials/TabItem";
import Tabs, { Data, TabBodyContainerStyle, TabContainerStyle, TabItemContainerStyle } from "@/components/Tabs/Tabs";
import withTheme from "@/hocs/withTheme";

import useTabs from "./hooks/useTabs";

type Props = {
  data: Data[];
  tabContainerStyle?: TabContainerStyle;
  tabItemContainerStyle?: TabItemContainerStyle;
  tabItemStyle?: TabItemStyle;
  tabItemTextStyle?: TabItemTextStyle;
  tabBodyContainerStyle?: TabBodyContainerStyle;
  tabBodyItemStyle?: TabBodyItemStyle;
  theme: Theme;
};

const TabContainer = ({
  data,
  tabContainerStyle,
  tabItemContainerStyle,
  tabItemStyle,
  tabItemTextStyle,
  tabBodyContainerStyle,
  tabBodyItemStyle,
  theme,
}: Props) => {
  const { activeTab, setActiveTab, distribution, showVerticalTabItems } = useTabs({
    tabContainerStyle,
    tabItemContainerStyle,
  });

  return (
    <Tabs
      data={data}
      tabContainerStyle={tabContainerStyle}
      tabItemContainerStyle={tabItemContainerStyle}
      tabItemStyle={tabItemStyle}
      tabItemTextStyle={tabItemTextStyle}
      tabBodyContainerStyle={tabBodyContainerStyle}
      tabBodyItemStyle={tabBodyItemStyle}
      distribution={distribution}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      showVerticalTabItems={showVerticalTabItems}
      theme={theme}
    />
  );
};

export default withTheme(TabContainer);
