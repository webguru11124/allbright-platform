import { GestureResponderEvent, MouseEvent } from "react-native";

import { DefaultTheme } from "@/theme";

import { LayoutProps as LayoutPropsType } from "./shared/LayoutProps";

declare global {
  type LayoutProps = LayoutPropsType;
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
