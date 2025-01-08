import { useInfiniteHits } from "react-instantsearch-core";

import BusinessCard from "@/features/BusinessCard";
import MemberListView from "@/features/Connect/components/MemberListView";

function RecommendConnect() {
  const { items, isLastPage, showMore } = useInfiniteHits({
    escapeHTML: false,
  });

  return (
    <MemberListView
      items={items}
      renderComponent={({ item }: { item: any }) => (
        <BusinessCard
          member={item}
          isStatic
        />
      )}
      loadMore={showMore}
      isLastPage={isLastPage}
    />
  );
}

export default RecommendConnect;
