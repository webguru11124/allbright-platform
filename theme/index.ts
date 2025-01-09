"use strict";

import { DarkTheme as NativeDarkTheme, DefaultTheme as NativeDefaultTheme } from "@react-navigation/native";
import { Platform } from "react-native";
import { MD2DarkTheme as DarkPaperTheme, MD2LightTheme as DefaultPaperTheme } from "react-native-paper";

const alertColors = {
  success: "rgb(50, 150, 50)",
  danger: "#EB5757",
  warning: "#fff3cd",
  info: "#cff4fc",
};

export const recommendationColor = {
  article: "#FFD869",
  connection: "#3A7D6D",
  course: "#DE8466",
  event: "#61A356",
  group: "#7D4282",
  mentorship: "#414143",
  programme: "#555C9A",
  btColor: "rgb(228, 230, 235)",
  btBgColor: "rgb(58, 59, 61)",
  textColor: "rgb(73, 101, 140)",
};

export const PaperDefaultTheme = {
  ...Platform.select({
    native: {
      ...DefaultPaperTheme,
      colors: {
        ...DefaultPaperTheme.colors,
        primary: recommendationColor.textColor,
        placeholder: "rgb(73,101,140)",
      },
    },
  }),
};

export const PaperDarkTheme = {
  ...DarkPaperTheme,
};

export const DefaultTheme = {
  ...NativeDefaultTheme,
  name: "light",
  colors: {
    baseColor: "#FFF",
    alert: { ...alertColors },
    primary: "rgb(50, 150, 50)",
    secondary: "rgb(255, 150, 50)",
    inactive: "rgb(150,150,150)",
    background: "#F9F4F0",
    lightBackground: "#FFFBF9",
    overlay: "#F2E7DF",
    pill: "#C8E8E5",
    inputs: {
      background: "#FFF",
      text: "#414143",
      border: "rgb(199, 199, 204)",
      placeholder: "rgb(150,150,150)",
    },
    button: {
      primary: "#FFF",
      background: "#00605C",
      googleSignIn: "#4285f4",
      facebookSignin: "#5890ff",
      linkedinSignIn: "#0077b5",
    },
    txt: {
      primary: "#DADCE1",
      secondary: "#414143",
      placeholder: "#DADCE180",
      dark: "#000000",
      light: "#FFFFFF",
      subtitle: "#00605C",
    },
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
    error: "rgb(255, 0, 0)",
  },
};

export const DarkTheme = {
  ...NativeDarkTheme,
  name: "dark",
  colors: {
    ...NativeDarkTheme.colors,
    baseColor: "#222831",
    alert: { ...alertColors },
    secondary: "rgb(0, 250, 50)",
    inactive: "rgb(221,221,221)",
    background: "#31363F",
    lightBackground: "#ddd",
    overlay: "#ccc",
    pill: "#C8E8E5",
    inputs: {
      background: "#EEEEEE",
      text: "#414143",
      border: "rgb(199, 199, 204)",
      placeholder: "rgb(150,150,150)",
    },
    button: {
      primary: "#000",
      background: "#00605C",
      googleSignIn: "#4285f4",
      facebookSignin: "#5890ff",
      linkedinSignIn: "#0077b5",
    },
    txt: {
      primary: "#76ABAE",
      secondary: "#EEEEEE",
      placeholder: "#41414380",
      dark: "#000",
      light: "#FFFFFF",
      subtitle: "#00605C",
    },
    headerText: "rgb(255, 255, 255)",
  },
};
