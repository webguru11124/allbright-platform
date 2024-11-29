/* eslint-disable import/export */
import { ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { userEvent } from "@testing-library/react-native";
import { render as renderFunc } from "expo-router/testing-library";
import { DateTime } from "luxon";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";
import { ReactTestInstance } from "react-test-renderer";

import { MediaQueryProvider } from "@/contexts/MediaQueryContext";
import { DefaultTheme, PaperDefaultTheme } from "@/theme";

export const fireBlurEvent = async (element: ReactTestInstance, text: string) => {
  const user = userEvent.setup();
  await user.paste(element, text);
};

export const convertDateToInputString = (date: Date, locale: string = "en-GB"): string => {
  return DateTime.fromJSDate(date).setLocale(locale).toFormat("dd/MM/yyyy");
};

export const parseDateString = (dateString: string, locale: string = "en-GB"): Date => {
  return DateTime.fromFormat(dateString, "dd/MM/yyyy", { locale }).toJSDate();
};

const client = new QueryClient();

export const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={client}>
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

export const customRender = async (element: React.ReactElement) => {
  return renderFunc(element, { wrapper: TestProviders });
};

export * from "expo-router/testing-library";

export { customRender as render };
