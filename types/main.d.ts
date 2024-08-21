import { GestureResponderEvent } from "react-native";

declare global {
  type GestureEvent = (event: GestureResponderEvent) => void;
}
