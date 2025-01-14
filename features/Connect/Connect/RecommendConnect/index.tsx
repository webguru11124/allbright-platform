import { useInfiniteHits } from "react-instantsearch-core";

import BusinessCard from "@/features/BusinessCard";
import MemberListView from "@/features/Connect/components/MemberListView";

type Props = {
  showCompact: boolean;
};

function RecommendConnect({ showCompact }: Props) {
  const { items, isLastPage, showMore } = useInfiniteHits({
    escapeHTML: false,
  });

  return (
    <MemberListView
      items={items}
      renderComponent={({ item }: { item: any }) => <BusinessCard member={item} />}
      loadMore={showMore}
      isLastPage={isLastPage}
      showCompact={showCompact}
    />
  );
}

export default RecommendConnect;
