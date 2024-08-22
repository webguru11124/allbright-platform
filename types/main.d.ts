import { GestureResponderEvent } from "react-native";
import * as DefaultTheme from "@/theme";

declare global {
  type GestureEvent = (event: GestureResponderEvent) => void;
  type Theme = typeof DefaultTheme;
}
