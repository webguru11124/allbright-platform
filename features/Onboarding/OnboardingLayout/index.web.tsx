import { router } from "expo-router";
import { Suspense } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import HeaderBackButton from "@/components/HeaderBackButton";
import Loading from "@/components/Loading";

interface Props {
  children: React.ReactNode;
}

export const OnboadingPageLayout = ({ children }: Props) => {
  return (
    <ScrollView style={[styles.main]}>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.headerBackButtonContainer]}>
          <HeaderBackButton
            onBackPress={() => {
              router.back();
            }}
          />
        </View>
        <View style={[styles.contentWrap]}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 20,
  },
  contentWrap: {
    flex: 1,
    width: "100%",
    maxWidth: 640,
    gap: 10,
  },
  headerBackButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
});
