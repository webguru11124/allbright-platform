import { ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";

import { MediaQueryProvider } from "@/contexts/MediaQueryContext";
import { DefaultTheme, PaperDefaultTheme } from "@/theme";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider value={DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MediaQueryProvider>
            <PaperProvider
              theme={PaperDefaultTheme}
              settings={{
                rippleEffectEnabled: false,
              }}>
              <RootSiblingParent>{children}</RootSiblingParent>
            </PaperProvider>
          </MediaQueryProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
