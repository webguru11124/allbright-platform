import { GestureResponderEvent, MouseEvent } from "react-native";
import { DefaultTheme } from "@/theme";

declare global {
  type GestureEvent = (event: GestureResponderEvent) => void;
  type MyMouseEvent = (event: MouseEvent) => void;
  type Theme = typeof DefaultTheme;
  type ScreenSize = "mobile" | "tablet" | "laptop" | "desktop";
  type MediaQuery = {
    screenSize: ScreenSize;
    maxWidth: (val: number) => boolean;
    minWidth: (val: number) => boolean;
  };
  type ClientError = {
    type: "danger" | "warning";
    message: string;
  };
}
