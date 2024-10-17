"use strict";

import {
  DarkTheme as NativeDarkTheme,
  DefaultTheme as NativeDefaultTheme,
} from "@react-navigation/native";
import {
  MD2DarkTheme as DarkPaperTheme,
  MD2LightTheme as DefaultPaperTheme,
} from "react-native-paper";

const colours = {
  teal: "#00605C", // All primary buttons and CTAs
  charcoal: "#414143", // All text
  charcoalMid: "#414143BB", // Placeholder text
  charcoalFaded: "#41414333", // Placeholder text
  plusLime: "#E3E989", // Anything relating to Paid Digital
  purple: "#E5D7F2", // Information banners or buttons
  errorRed: "#EB5757", // Text on error messages or icons
  errorYellow: "#ffc500", // Background of error blocks
  academyOrange: "#D68B76", // Bookmarks and free content in Academy
  mentorDarkBlue: "#135197", // Dark background for mentorship
  mentorLemon: "#EBE459", // Highlights for mentorship
  buntingBlue: "#16264E", // subnav
  deYorkGreen: "#9CCB95", // Recommendations: Event badge
  kimberlyPurple: "#8A70A4", // Recommendations: Academy badge
  myPink: "#D48585", // Recommendations: Opportunity badge
  tumbleweedBeige: "#E2B48A", // Recommendations: Membership badge

  lightShell: "#FFFBF9", //Highlighted backgrounds such as businessCard
  shell: "#F9F4F0", // All backgrounds of digital product
  shellOverlay: "#F2E7DF", // Overlays, containers or sections that differ from the main background
  shellGuideline: "#E3D2C6", // Divider lines and markings to denote pause, borders of cards
  shellHighlight: "#FFFBF8", // backgrounds within highlight blocks and sections
  white: "#FFFFFF",
  black: "#000000",

  turquoise: "#06BDB6", // Accents that don't have text over the top
  textTurquoise: "#59A39F", // Highlighted parts of text
  pillTeal: "#C8E8E5", // Selected state for pills
  pillTealHover: "#99C9C9", // Hover state for selected pills
  freeBanana: "#F9DC81", // Anything promoting the Free platform

  clubBlue: "#3C3F5F", // Navy blue used for Club app
  clubGold: "#DCCA8E", // Gold used for Club app accents
  corporateOrange: "#FFA471", // Orange used for corporate membership
  corporateGreen: "#0f3131", // Green used for corporate membership

  elevatePurple: "#52578B", // Purple used for Elevate
  elevateLightPurple: "#7880B8", // Light purple used for Elevate
  elevateHighlight: "#BBC3E3", // Purple used for Elevate highlights

  accelerateOrange: "#D88A73", // Orange used for Accelerate
  accelerateLightOrange: "#E69D85", // Light orange used for Accelerate
  accelerateHighlight: "#FFE1D8", // Orange used for Accelerate Highlights

  giftGreen: "#094543", // Green used for gifting
  giftDarkGreen: "#0E4C49", // Dark green used for gifting
  giftLightGreen: "#00605C", // light Green used for gifting
  moneyGold: "#D7BF7B", // Gold

  marketingYellow: "#FFD869", // Yellow used for homepage / marketing
  marketingNavy: "#222B59", // Navy used for homepage / marketing
  marketingBlue: "#5869AD", // Blue used for homepage / marketing
  marketingGreen: "#005651", // Green used for homepage / marketing
  marketingGreenDark: "#003525", // Green used for homepage / marketing
  marketingOrange: "#F5AC97", // Orange used for homepage / marketing
  marketingBeige: "#F0E3DB", // Beige used for homepage / marketing
  marketingMango: "#DE907E",
  marketingTeal: "#047572",
  marketingBusinessNavy: "#020A38",

  stepForwardNavy: "#1D1A33", // Navy used for Step Forward page
  stepForwardLilac: "#D5DEFC", // Lilac used for Step Forward page
  stepForwardOrange: "#E88A79", // Orange used for Step Forward page
  stepForwardBlue: "#2B1C68", // Blue used for Step Forward page

  plusColours: [
    "#50968D",
    "#617595",
    "#886BB7",
    "#834973",
    "#955C5C",
    "#D18D66",
    "#D3B137",
    "#6D8868",
  ],
};
const alertColors = {
  success: "#00605C",
  danger: "#EB5757",
  warning: "#fff3cd",
  info: "#cff4fc",
};
export const recommendationColour = {
  article: colours.marketingYellow,
  connection: "#3A7D6D",
  course: "#DE8466",
  event: "#61A356",
  group: "#7D4282",
  mentorship: colours.charcoal,
  programme: "#555C9A",
  btColor: "rgb(228, 230, 235)",
  btBgColor: "rgb(58, 59, 61)",
  textColor: "rgb(73, 101, 140)",
};

export const PaperDefaultTheme = {
  ...DefaultPaperTheme,
  colors: {
    ...DefaultPaperTheme.colors,
    primary: recommendationColour.textColor,
    placeholder: "rgb(73,101,140)",
    text: recommendationColour.textColor,
  },
};

export const PaperDarkTheme = {
  ...DarkPaperTheme,
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

export default colours;
