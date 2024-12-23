import React from "react";
import { useInfiniteHits } from "react-instantsearch-core";
import { FlatList, StyleSheet, View } from "react-native";

type Props = {
  hitComponent: React.ComponentType<any>;
};

function RecommendConnectMobile({ hitComponent: Hit, ...props }: Props) {
  const { items, isLastPage, showMore } = useInfiniteHits({
    ...props,
    escapeHTML: false,
  });

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.objectID}
      onEndReached={() => {
        if (!isLastPage) {
          showMore();
        }
      }}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Hit hit={item} />
        </View>
      )}
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
});
export default RecommendConnectMobile;
