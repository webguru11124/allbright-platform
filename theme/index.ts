"use strict";

import { DefaultTheme } from "@react-navigation/native";

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

export const NavLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: light.bg.base,
    card: light.bg.card,
    border: light.bg.overlay,
  },
};

export const NavDark = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: dark.bg.base,
    card: dark.bg.card,
    border: dark.bg.overlay,
  },
};
