import { useRef } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import config from "@/config";
import BusinessCard from "@/features/BusinessCard";

import AlgoliaSearch from "./AlgoriaSearchProvider";
import { MutualConnections } from "./MutualConnections";
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
    <View>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <AlgoliaSearch index={config.ALGOLIA_SEARCH.CONNECT_INDEX}>
            <>
              <Searchbox onChange={scrollToTop} />
              <MutualConnections hitComponent={HitComponent} />
            </>
          </AlgoliaSearch>
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#252b33",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
  },
});
