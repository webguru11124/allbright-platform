import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Button from "@/forms/components/Button";

type Props<T> = {
  items: T[];
  renderComponent: React.ComponentType<{ item: T }>;
  loadMore: () => void;
  hasShowMoreButton?: boolean;
  isLastPage: boolean;
};

function MemberListViewMobile<T>({
  items,
  renderComponent: RenderComponent,
  loadMore,
  hasShowMoreButton = true,
  isLastPage,
}: Props<T>) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item: any) => item.id || item.objectID}
      onEndReached={() => {
        if (!hasShowMoreButton && !isLastPage) {
          loadMore();
        }
      }}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <RenderComponent item={item} />
        </View>
      )}
      ListFooterComponent={
        hasShowMoreButton && !isLastPage ? (
          <View style={styles.buttonContainer}>
            <Button
              onPress={loadMore}
              style={{ width: 300 }}>
              Show More
            </Button>
          </View>
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  item: {
    padding: 18,
  },
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
export default MemberListViewMobile;
