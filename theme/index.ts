"use strict";

import {
  DarkTheme as NativeDarkTheme,
  DefaultTheme as NativeDefaultTheme,
} from "@react-navigation/native";

const alertColors = {
  success: "#00605C",
  danger: "#EB5757",
  warning: "#fff3cd",
  info: "#cff4fc",
};

export const DefaultTheme = {
  ...NativeDefaultTheme,
  name: "light",
  colors: {
    alert: { ...alertColors },
    primary: "rgb(50, 150, 50)",
    secondary: "rgb(255, 150, 50)",
    inactive: "rgb(150,150,150)",
    background: "#F9F4F0",
    inputs: {
      background: "#FFF",
      text: "#414143",
      border: "rgb(199, 199, 204)",
      placeholder: "rgb(150,150,150)",
    },
    button: {
      primary: "#FFF",
      background: "#00605C",
    },
    txt: {
      primo: "#DADCE1",
      placeholder: "#DADCE180",
    },
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    headerText: "rgb(50, 100, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
    error: "rgb(255, 0, 0)",
  },
};

export const DarkTheme = {
  ...NativeDarkTheme,
  headerText: NativeDarkTheme.colors.text,
  name: "dark",
  colors: {
    ...NativeDarkTheme.colors,
    alert: { ...alertColors },
    secondary: "rgb(0, 250, 50)",
    inactive: "rgb(221,221,221)",
    background: "#bbb",
    inputs: {
      background: "#FFF",
      text: "#414143",
      border: "rgb(199, 199, 204)",
      placeholder: "rgb(150,150,150)",
    },
    button: {
      primary: "#FFF",
      background: "#00605C",
    },
    txt: {
      primo: "#414143",
      placeholder: "#41414380",
    },
    headerText: "rgb(255, 255, 255)",
  },
};
