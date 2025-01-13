import React from "react";

import withTheme from "@/hocs/withTheme";

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
  showCompact: boolean;
};

const MemberListView = <T,>({
  items,
  renderComponent,
  isHorizontal,
  loadMore,
  isLastPage,
  hasShowMoreButton = true,
  showCompact,
}: Props<T>) =>
  showCompact ? (
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

export default withTheme(MemberListView);
