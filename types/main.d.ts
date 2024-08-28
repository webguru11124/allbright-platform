import { GestureResponderEvent, MouseEvent } from "react-native";
import { DefaultTheme } from "@/theme";

declare global {
  type GestureEvent = (event: GestureResponderEvent) => void;
  type MyMouseEvent = (event: MouseEvent) => void;
  type Theme = typeof DefaultTheme;
}
