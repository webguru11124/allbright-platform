import { GestureResponderEvent, MouseEvent } from "react-native";

import { DefaultTheme } from "@/theme";

declare global {
  type GestureEvent = (event: GestureResponderEvent) => void;
  type MyMouseEvent = (event: MouseEvent) => void;
  type SyntheticEvent = (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  type Theme = typeof DefaultTheme;
  type ScreenSize = "mobile" | "tablet" | "laptop" | "desktop";
  type MediaQuery = {
    screenSize: ScreenSize;
    currentWidth: number;
    maxWidth: (val: number) => boolean;
    minWidth: (val: number) => boolean;
  };
  type ClientError = {
    type: "danger" | "warning";
    message: string;
  };
}
