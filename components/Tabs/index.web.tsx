import { useContext, useMemo, useState } from "react";

import { TabBodyItemStyle } from "@/components/Tabs/partials/TabBodyItem";
import { TabItemStyle, TabItemTextStyle } from "@/components/Tabs/partials/TabItem";
import Tabs, { Data, TabBodyContainerStyle, TabContainerStyle, TabItemContainerStyle } from "@/components/Tabs/Tabs";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import withTheme from "@/hocs/withTheme";

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
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const [activeTab, setActiveTab] = useState<number>(0);

  const distribution: "space-between" | "flex-start" | "flex-end" = useMemo(() => {
    switch (tabItemContainerStyle?.distribution) {
      case "full-width-equally-spaced":
        return "space-between";
      case "tab-start-right":
        return "flex-end";
      case "tab-start-left":
      default:
        return "flex-start";
    }
  }, [tabItemContainerStyle?.distribution]);

  const showVerticalTabItems: boolean = useMemo(
    () =>
      tabContainerStyle?.displayVerticalBreakpointWidth === undefined
        ? false
        : currentWidth > 0 && maxWidth(tabContainerStyle?.displayVerticalBreakpointWidth),
    [currentWidth, maxWidth, tabContainerStyle?.displayVerticalBreakpointWidth]
  );

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
