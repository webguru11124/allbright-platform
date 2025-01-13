import { useInfiniteHits } from "react-instantsearch-core";
import { View } from "react-native";

import BusinessCard from "@/features/BusinessCard";
import MemberListView from "@/features/Connect/components/MemberListView";

function RecommendConnect() {
  const { items, isLastPage, showMore } = useInfiniteHits({
    escapeHTML: false,
  });

  return (
    <View style={{ alignItems: "center" }}>
      <MemberListView
        items={items}
        renderComponent={({ item }: { item: any }) => <BusinessCard member={item} />}
        loadMore={showMore}
        isLastPage={isLastPage}
      />
    </View>
  );
}

export default RecommendConnect;
