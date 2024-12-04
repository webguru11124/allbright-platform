import { useContext, useMemo, useState } from "react";

import { TabContainerStyle, TabItemContainerStyle } from "@/components/Tabs/Tabs";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";

type Props = {
  tabContainerStyle?: TabContainerStyle;
  tabItemContainerStyle?: TabItemContainerStyle;
};

const useTabs = ({ tabContainerStyle, tabItemContainerStyle }: Props) => {
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

  return { activeTab, setActiveTab, distribution, showVerticalTabItems };
};

export default useTabs;
