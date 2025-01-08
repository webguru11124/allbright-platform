import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "@/forms/components/Button";

const CARD_MARGIN = 40;

type Props<T> = {
  items: T[];
  renderComponent: React.ComponentType<{ item: T }>;
  loadMore: () => void;
  hasShowMoreButton?: boolean;
  isLastPage: boolean;
};

function MemberListViewDesktop<T>({
  items,
  renderComponent: RenderComponent,
  loadMore,
  hasShowMoreButton = true,
  isLastPage,
}: Props<T>) {
  return (
    <ScrollView
      style={styles.scrollView}
      onScroll={({ nativeEvent }) => {
        const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
        const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

        if (isEndReached && !hasShowMoreButton && !isLastPage) {
          loadMore();
        }
      }}
      scrollEventThrottle={400}>
      <View style={styles.container}>
        {items.map((item: any) => (
          <View
            key={item.id || item.objectID}
            style={styles.cardWrapper}>
            <RenderComponent item={item} />
          </View>
        ))}
      </View>
      {hasShowMoreButton && !isLastPage && (
        <View style={styles.buttonContainer}>
          <Button
            onPress={loadMore}
            style={{ width: 300 }}>
            Show More
          </Button>
        </View>
      )}
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
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default MemberListViewDesktop;
