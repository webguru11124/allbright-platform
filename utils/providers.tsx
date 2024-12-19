import { ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";

import { MediaQueryProvider } from "@/contexts/MediaQueryContext";
import { UserProvider } from "@/contexts/UserContext";
import { DefaultTheme, PaperDefaultTheme } from "@/theme";

type Props = {
  children: React.ReactNode;
};
const client = new QueryClient();

export const AppProviders = ({ children }: Props) => (
  <QueryClientProvider client={client}>
    <ThemeProvider value={DefaultTheme}>
      <MediaQueryProvider>{children}</MediaQueryProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export const AuthenticatedProviders = ({ children }: Props) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <UserProvider>
      <PaperProvider
        theme={PaperDefaultTheme}
        settings={{
          rippleEffectEnabled: false,
        }}>
        <RootSiblingParent>{children}</RootSiblingParent>
      </PaperProvider>
    </UserProvider>
  </GestureHandlerRootView>
);

const Providers = ({ children }: Props) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={client}>
        <ThemeProvider value={DefaultTheme}>
          <UserProvider>
            <MediaQueryProvider>
              <PaperProvider
                theme={PaperDefaultTheme}
                settings={{
                  rippleEffectEnabled: false,
                }}>
                <RootSiblingParent>{children}</RootSiblingParent>
              </PaperProvider>
            </MediaQueryProvider>
          </UserProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default Providers;
