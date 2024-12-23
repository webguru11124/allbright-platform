import { useRef } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import config from "@/config";
import BusinessCard from "@/features/BusinessCard";

import RecommendConnect from "./RecommendConnect";
import AlgoliaSearch from "./RecommendConnect/InstantSearch";
import Searchbox from "./Searchbox";

const HitComponent = ({ hit }: { hit: any }) => {
  return <BusinessCard member={hit} />;
};

export default function Connect() {
  const listRef = useRef<FlatList>(null);

  function scrollToTop() {
    listRef.current?.scrollToOffset({ animated: false, offset: 0 });
  }

  return (
    <SafeAreaView style={styles.root}>
      <AlgoliaSearch index={config.ALGOLIA_SEARCH.CONNECT_INDEX}>
        <>
          <View style={styles.searchContainer}>
            <Searchbox
              onChange={scrollToTop}
              containerStyle={styles.searchboxContainer}
            />
          </View>
          {/* <PendingConnections fromMe={false} />
          <PendingConnections fromMe={false} />
          <AcceptedConnections/> */}
          <RecommendConnect hitComponent={HitComponent} />
        </>
      </AlgoliaSearch>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 30,
  },
  searchContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  searchboxContainer: {
    width: 300,
  },
});
