"use strict";

import {
  DarkTheme as NativeDarkTheme,
  DefaultTheme as NativeDefaultTheme,
} from "@react-navigation/native";

const defaultColors = {
  success: "rgb(209 231 221)",
  danger: "#f8d7da",
  warning: "#fff3cd",
  info: "#cff4fc",
};

export const colors = {
  teal: "#00605C", // All primary buttons and CTAs
  charcoal: "#414143", // All text (light mode)
  plusLime: "#E3E989", // Anything relating to Paid Digital
  errorRed: "#EB5757", // Text on error messages or icons
  white: "#FFFFFF",
  black: "#000000",
  turquoise: "#06BDB6", // Accents that don't have text over the top
  academyOrange: "#d68b76", // Accents that don't have text over the top
};

export const dark = {
  bg: {
    base: "#181A1B", // musselBase
    card: "#242627", // musselCard
    overlay: "#3A3B3D", // musselOverlay
    msg: { me: colors.teal, em: "#B7ADA6" },
    info: "#5A159E",
  },
  txt: {
    primo: "#DADCE1",
    placeholder: "#DADCE180",
  },
  colors: {
    pillTeal: "#8DE2E2", // Selected state for pills
    freeBanana: "#F8C528", // Anything promoting the Free platform
    ...colors,
  },
  isDark: true,
};

export const light = {
  bg: {
    base: "#F9F4F0", // shellBase
    card: "#FFFFFF", // shellCard
    overlay: "#F2E7DF", // shellOverlay
    msg: { me: colors.teal, em: "#F3E9E2" },
    info: "#E5D7F2",
  },
  txt: {
    primo: colors.charcoal,
    placeholder: colors.charcoal + "80",
  },
  colors: {
    pillTeal: "#C8E8E5", // Selected state for pills
    freeBanana: "#F9DC81", // Anything promoting the Free platform
    ...colors,
  },
  isDark: false,
};

export const DefaultTheme = {
  ...NativeDefaultTheme,
  name: "light",
  colors: {
    ...defaultColors,
    primary: "rgb(50, 150, 50)",
    secondary: "rgb(255, 150, 50)",
    inactive: "rgb(150,150,150)",
    background: "#F9F4F0",
    inputs: {
      background: "transparent",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      placeholder: "rgb(150,150,150)",
    },
    button: {
      primary: "#00605C",
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
  error: "rgb(255, 0, 0)",
  colors: {
    ...NativeDarkTheme.colors,
    ...defaultColors,
    secondary: "rgb(0, 250, 50)",
    inactive: "rgb(221,221,221)",
    background: "#bbb",
    inputs: {
      background: "transparent",
      text: "rgb(255,255,255)",
      border: "rgb(199, 199, 204)",
      placeholder: "rgb(150,150,150)",
    },
    button: {
      primary: "#00605C",
    },
    txt: {
      primo: colors.charcoal,
      placeholder: colors.charcoal + "80",
    },
    headerText: "rgb(255, 255, 255)",
  },
};
