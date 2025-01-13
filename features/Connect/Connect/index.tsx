import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import config from "@/config";
import { ConnecionsProvider } from "@/contexts/ConnectionContext";
import BusinessCard from "@/features/BusinessCard";

import MyConnections from "./MyConnections";
import RecommendConnect from "./RecommendConnect";
import AlgoliaSearch from "./RecommendConnect/InstantSearch";
import Searchbox from "./Searchbox";
import { ConnectionField } from "./type";

const ConnectionFilters = {
  Sent: (elm: ConnectionField) => elm.isMyRequest && elm.state === "PENDING",
  Received: (elm: ConnectionField) => !elm.isMyRequest && elm.state === "PENDING",
  Accepted: (elm: ConnectionField) => elm.state === "ACCEPTED",
};

export default function Connect() {
  return (
    <SafeAreaView style={styles.root}>
      <AlgoliaSearch index={config.ALGOLIA_SEARCH.CONNECT_INDEX}>
        <>
          <ConnecionsProvider>
            <View style={styles.searchContainer}>
              <Searchbox containerStyle={styles.searchboxContainer} />
            </View>
            <MyConnections
              filterFunc={ConnectionFilters.Sent}
              title="Sent connections"
              datacy="sent-connections-members"
            />
            <MyConnections
              filterFunc={ConnectionFilters.Received}
              title="Received connections"
              datacy="received-connections-members"
            />
            <MyConnections
              filterFunc={ConnectionFilters.Accepted}
              title="My connections"
              datacy="accepted-connections-members"
            />
            <View style={styles.recommendContainer}>
            <RecommendConnect />
            </View>
          </ConnecionsProvider>
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
  recommendContainer: {
    alignItems: "center",
  }
});
