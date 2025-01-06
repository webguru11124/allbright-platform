import React from "react";
import { useInfiniteHits } from "react-instantsearch-core";
import { ScrollView, StyleSheet, View } from "react-native";

const CARD_MARGIN = 40;

type Props = {
  hitComponent: React.ComponentType<any>;
};

function RecommendedConnectDesktop({ hitComponent: Hit, ...props }: Props) {
  const { items, isLastPage, showMore } = useInfiniteHits({
    ...props,
    escapeHTML: false,
  });

  return (
    <ScrollView
      style={styles.scrollView}
      onScroll={({ nativeEvent }) => {
        const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
        const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

        if (isEndReached && !isLastPage) {
          showMore();
        }
      }}
      scrollEventThrottle={400}>
      <View style={styles.container}>
        {items.map((item) => (
          <View
            key={item.objectID}
            style={styles.cardWrapper}>
            <Hit hit={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: CARD_MARGIN,
  },
  cardWrapper: {
    justifyContent: "center",
    marginVertical: CARD_MARGIN / 2,
    marginHorizontal: CARD_MARGIN / 2,
    borderRadius: 8,
  },
});

export default RecommendedConnectDesktop;
