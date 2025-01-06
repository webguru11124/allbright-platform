import React from "react";
import { Animated, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import Space from "@/components/Space";
import { CXL, H2 } from "@/components/Typography";
import BackgroundImageMasonry from "@/features/AppStart/partials/BackgroundImageMasonry";
import EntryButtons from "@/features/AppStart/partials/EntryButtons";
import { AppStartProps } from "@/features/AppStart/types";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

const AppStart = ({ store, nameAnim, animY, NOTCH, heightOffset, minWidth }: AppStartProps) => (
  <View style={[styles.main]}>
    <View style={[styles.section]}>
      <SafeAreaView style={[styles.container]}>
        <StatusBar
          animated={true}
          hidden={true}
        />
        <BackgroundImageMasonry
          store={store}
          heightOffset={minWidth(BREAKPOINT_TABLET) ? heightOffset : -5}
        />
        <View style={[styles.blurWrapper]}>
          <Space height={NOTCH ? 15 : 50} />
          <Animated.View style={{ opacity: nameAnim, transform: [{ translateY: animY }] }}>
            <H2 style={{ textAlign: "center" }}>Welcome to AllBright.</H2>
            <Space height={10} />
            <CXL style={{ textAlign: "center" }}>
              A professional community for
              {"\n"} smart-minded women
            </CXL>
            {minWidth(BREAKPOINT_TABLET) === false && (
              <>
                <Space height={100} />
                <View style={[styles.subContainer, { marginBottom: 0 }]}>
                  <EntryButtons nameAnim={nameAnim} />
                </View>
              </>
            )}
          </Animated.View>
        </View>
      </SafeAreaView>
    </View>
    {minWidth(BREAKPOINT_TABLET) && (
      <View style={[styles.section]}>
        <View style={[styles.subContainer, { marginBottom: NOTCH ? 10 : 20 }]}>
          <EntryButtons nameAnim={nameAnim} />
        </View>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
  },
  section: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  subContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
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
