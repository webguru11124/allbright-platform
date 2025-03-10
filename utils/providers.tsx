import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";

import AppContextProvider from "@/contexts/AppContextProvider";
import { ConnecionsProvider } from "@/contexts/ConnectionContext";
import { MediaQueryProvider } from "@/contexts/MediaQueryContext";
import { UserProvider } from "@/contexts/UserContext";
import { PaperDarkTheme } from "@/theme";

type Props = {
  children: React.ReactNode;
};
const client = new QueryClient();

export const AppProviders = ({ children }: Props) => {
  return (
    <AppContextProvider>
      <QueryClientProvider client={client}>
        <MediaQueryProvider>{children}</MediaQueryProvider>
      </QueryClientProvider>
    </AppContextProvider>
  );
};

export const AuthenticatedProviders = ({ children }: Props) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <UserProvider>
      <ConnecionsProvider>
        <PaperProvider
          theme={PaperDarkTheme}
          settings={{
            rippleEffectEnabled: false,
          }}>
          <RootSiblingParent>{children}</RootSiblingParent>
        </PaperProvider>
      </ConnecionsProvider>
    </UserProvider>
  </GestureHandlerRootView>
);

const Providers = ({ children }: Props) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContextProvider>
        <QueryClientProvider client={client}>
          <UserProvider>
            <ConnecionsProvider>
              <MediaQueryProvider>
                <PaperProvider
                  theme={PaperDarkTheme}
                  settings={{
                    rippleEffectEnabled: false,
                  }}>
                  <RootSiblingParent>{children}</RootSiblingParent>
                </PaperProvider>
              </MediaQueryProvider>
            </ConnecionsProvider>
          </UserProvider>
        </QueryClientProvider>
      </AppContextProvider>
    </GestureHandlerRootView>
  );
};

export default Providers;
