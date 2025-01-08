import MemberListViewMobile from "./MemberListView_Mobile";

type Props<T> = {
  items: T[];
  renderComponent: React.ComponentType<{ item: T }>;
  loadMore: () => void;
  isLastPage: boolean;
  hasShowMoreButton?: boolean;
};

function MemberListView<T>({ items, renderComponent, loadMore, isLastPage, hasShowMoreButton = true }: Props<T>) {
  return (
    <MemberListViewMobile
      items={items}
      renderComponent={renderComponent}
      loadMore={loadMore}
      isLastPage={isLastPage}
      hasShowMoreButton={hasShowMoreButton}
    />
  );
}

export default MemberListView;
