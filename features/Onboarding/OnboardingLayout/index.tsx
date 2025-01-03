import { Suspense } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export const OnboadingPageLayout = ({ children }: Props) => {
  return (
    <View style={[styles.main]}>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.contentWrap]}>
          <Suspense
            fallback={
              <ActivityIndicator
                size={"large"}
                color={"#0000ff"}
                style={[styles.loading]}
              />
            }>
            {children}
          </Suspense>
        </View>
      </SafeAreaView>
    </View>
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
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
