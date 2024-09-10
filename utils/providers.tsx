import { MediaQueryProvider } from "@/contexts/MediaQueryContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { DefaultTheme } from "@/theme";
import { ThemeProvider } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider value={DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MediaQueryProvider>
            <RootSiblingParent>{children}</RootSiblingParent>
          </MediaQueryProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
