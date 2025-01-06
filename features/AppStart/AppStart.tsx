import React from "react";
import { Animated, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import Space from "@/components/Space";
import { CXL, H2 } from "@/components/Typography";
import BackgroundImageMasonry from "@/features/AppStart/partials/BackgroundImageMasonry";
import EntryButtons from "@/features/AppStart/partials/EntryButtons";
import { AppStartProps } from "@/features/AppStart/types";

export const AppStart = ({ store, nameAnim, animY, NOTCH, heightOffset }: AppStartProps) => (
  <SafeAreaView style={[styles.container]}>
    <StatusBar
      animated={true}
      hidden={true}
    />
    <BackgroundImageMasonry
      store={store}
      heightOffset={heightOffset}
    />
    <View style={[styles.blurWrapper]}>
      <Space height={NOTCH ? 15 : 50} />
      <Animated.View style={{ opacity: nameAnim, transform: [{ translateY: animY }] }}>
        <H2 style={{ textAlign: "center" }}>Welcome to AllBright.</H2>
        <Space height={10} />
        <CXL style={{ textAlign: "center" }}>A professional community for</CXL>
        <CXL style={{ textAlign: "center" }}>smart-minded women</CXL>
      </Animated.View>
      <View style={[styles.subContainer, { marginBottom: NOTCH ? 10 : 20 }]}>
        <EntryButtons nameAnim={nameAnim} />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  subContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 0,
    marginBottom: 0,
  },
  blurWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
});

export default AppStart;
