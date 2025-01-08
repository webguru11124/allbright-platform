import React, { useContext } from "react";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import withTheme from "@/hocs/withTheme";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

import MemberListViewDesktop from "./MemberListView_Desktop";
import MemberListViewMobile from "./MemberListView_Mobile";

type Props<T> = {
  theme: Theme;
  items: T[];
  renderComponent: React.ComponentType<{ item: T }>;
  loadMore: () => void;
  isLastPage: boolean;
  hasShowMoreButton?: boolean;
  isHorizontal?: boolean;
};

const MemberListView = <T,>({
  items,
  renderComponent,
  isHorizontal,
  loadMore,
  isLastPage,
  hasShowMoreButton = true,
}: Props<T>) => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return showCompactDisplay ? (
    <MemberListViewMobile
      items={items}
      renderComponent={renderComponent}
      loadMore={loadMore}
      isLastPage={isLastPage}
      hasShowMoreButton={hasShowMoreButton}
    />
  ) : (
    <MemberListViewDesktop
      items={items}
      renderComponent={renderComponent}
      loadMore={loadMore}
      isLastPage={isLastPage}
      isHorizontal={isHorizontal}
      hasShowMoreButton={hasShowMoreButton}
    />
  );
};

export default withTheme(MemberListView);
