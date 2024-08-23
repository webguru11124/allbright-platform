import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const NOTCH = DeviceInfo.hasNotch();
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const IS_8 = WIDTH === 375 && HEIGHT === 667;
const SCALE = NOTCH ? 1.2 : 1;

export const STORE = NOTCH
  ? [
      { img: "FB", xyc: [42, 5, 80 * SCALE] },
      { img: "FC", xyc: [78, 12, 50 * SCALE] },
      { img: "FD", xyc: [18, 15, 60 * SCALE] },
      { img: "FE", xyc: [4, 27, 70 * SCALE] },
      { img: "FF", xyc: [37, 26, 55 * SCALE] },
      { img: "FG", xyc: [82, 28, 45 * SCALE] },
      { img: "FH", xyc: [4, 9, 40 * SCALE] },
      { img: "FI", xyc: [62, 21, 65 * SCALE] },
      // ------------------------------------------------
      { img: "FJ", xyc: [78, 58, 70 * SCALE] },
      { img: "GA", xyc: [72, 74, 65 * SCALE] },
      { img: "GB", xyc: [55, 61, 65 * SCALE] },
      { img: "GF", xyc: [36, 76, 80 * SCALE] },
      { img: "GE", xyc: [32, 65, 50 * SCALE] },
      { img: "GG", xyc: [5, 59, 65 * SCALE] },
      { img: "GD", xyc: [11, 75, 50 * SCALE] },
    ]
  : IS_8
    ? [
        { img: "FB", xyc: [42, 5, 80 * SCALE] },
        { img: "FC", xyc: [78, 12, 50 * SCALE] },
        { img: "FD", xyc: [18, 15, 60 * SCALE] },
        { img: "FE", xyc: [4, 27, 70 * SCALE] },
        { img: "FF", xyc: [37, 26, 55 * SCALE] },
        { img: "FG", xyc: [82, 28, 45 * SCALE] },
        { img: "FH", xyc: [4, 9, 40 * SCALE] },
        { img: "FI", xyc: [62, 21, 65 * SCALE] },
        // ------------------------------------------------
        { img: "FJ", xyc: [78, 58, 70 * SCALE] },
        { img: "GA", xyc: [72, 74, 65 * SCALE] },
        { img: "GB", xyc: [55, 61, 65 * SCALE] },
        { img: "GF", xyc: [45, 74, 60 * SCALE] },
        { img: "GE", xyc: [32, 65, 50 * SCALE] },
        { img: "GG", xyc: [5, 59, 65 * SCALE] },
        { img: "GD", xyc: [11, 75, 50 * SCALE] },
      ]
    : [
        { img: "FB", xyc: [42, 5, 80 * SCALE] },
        { img: "FC", xyc: [78, 12, 50 * SCALE] },
        { img: "FD", xyc: [18, 15, 60 * SCALE] },
        { img: "FE", xyc: [4, 27, 70 * SCALE] },
        { img: "FF", xyc: [37, 26, 55 * SCALE] },
        { img: "FG", xyc: [82, 28, 45 * SCALE] },
        { img: "FH", xyc: [4, 9, 40 * SCALE] },
        { img: "FI", xyc: [62, 21, 65 * SCALE] },
        // ------------------------------------------------
        { img: "FJ", xyc: [78, 58, 70 * SCALE] },
        { img: "GA", xyc: [72, 74, 65 * SCALE] },
        { img: "GB", xyc: [55, 61, 65 * SCALE] },
        { img: "GF", xyc: [36, 74, 80 * SCALE] },
        { img: "GE", xyc: [32, 65, 50 * SCALE] },
        { img: "GG", xyc: [5, 59, 65 * SCALE] },
        { img: "GD", xyc: [11, 75, 50 * SCALE] },
      ];
