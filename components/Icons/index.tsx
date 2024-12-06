import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

import colors from "@/theme";

type Props = SvgProps & {
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
};

export function IconCamera(props: Props) {
  return (
    <Svg
      viewBox="0 0 36 32"
      color={props.color ?? "rgba(65, 65, 67, 1)"}
      width={props.width ?? "20"}
      height={"20"}
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.75.25h10.5l3.203 3.5H32a3.51 3.51 0 013.5 3.5v21a3.51 3.51 0 01-3.5 3.5H4a3.51 3.51 0 01-3.5-3.5v-21A3.51 3.51 0 014 3.75h5.547L12.75.25zm12.163 7l-3.203-3.5h-7.42l-3.202 3.5H4v21h28v-21h-7.087zM18 12.5c2.887 0 5.25 2.363 5.25 5.25S20.887 23 18 23s-5.25-2.363-5.25-5.25S15.113 12.5 18 12.5zm-8.75 5.25C9.25 12.92 13.17 9 18 9s8.75 3.92 8.75 8.75S22.83 26.5 18 26.5s-8.75-3.92-8.75-8.75z"
        fill="currentColor"
      />
    </Svg>
  );
}
export function ArrowRight(props: Props) {
  return (
    <Svg
      width={props.width || "25"}
      height={props.height || "25"}
      viewBox="0 0 25 25"
      fill={props.fill || "none"}
      {...props}>
      <Path
        d="M12.5 4.5L11.09 5.91L16.67 11.5H4.5V13.5H16.67L11.09 19.09L12.5 20.5L20.5 12.5L12.5 4.5Z"
        fill={props.color || props.fill || "white"}
      />
    </Svg>
  );
}

export function Tick(props: Props) {
  return (
    <Svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      color={colors.teal}
      {...props}>
      <Path
        d="M4.91995 7.55559C4.63928 7.83597 4.18451 7.83585 3.90399 7.55533L2.30551 5.95686C2.02532 5.67667 1.57119 5.67618 1.29039 5.95576L0.455622 6.78693C0.173964 7.06738 0.173472 7.5232 0.454523 7.80425L3.90372 11.2535C4.18435 11.5341 4.63932 11.5341 4.91995 11.2535L13.492 2.68143C13.7726 2.40081 13.7726 1.94583 13.492 1.66521L12.6627 0.835974C12.3822 0.555454 11.9274 0.555337 11.6468 0.835712L4.91995 7.55559Z"
        fill={props.color || props.fill || "white"}
      />
    </Svg>
  );
}

export function AllBrightVector(props: Props) {
  return (
    <Svg
      width={props.width ?? "200"}
      height={props.height ?? "200"}
      viewBox="0 0 1903 1716"
      fill="none">
      <Path
        d="M1902 1696.88V1690.97C1744.73 1690.97 1657.3 1557.95 1532.72 1285.17L949.464 0L423.753 1227.8H431.854L733.257 524.755L1067.62 1306.26C1151.7 1502.84 1174.61 1691.25 967.062 1691.25V1697.16H1902.28L1902 1696.88ZM285.482 1412.28C72.0688 1293.05 0 1469.93 0 1555.42C0 1640.91 103.354 1715.72 253.917 1715.72C413.418 1715.72 644.987 1633.88 782.141 1510.99L776.555 1507.05C605.88 1628.54 325.706 1434.5 285.482 1412"
        fill={props.color}
      />
    </Svg>
  );
}

export function LoadingVector(props: Props) {
  return (
    <Svg
      width={props.width ?? "200"}
      height={props.height ?? "200"}
      viewBox="0 0 1903 1716"
      fill="none">
      <defs>
        <linearGradient
          id="logo-gradient"
          gradientUnits="objectBoundingBox"
          x1="0"
          y1="0"
          x2="1"
          y2="1">
          <stop
            offset="0"
            stopColor="#083D39">
            <animate
              attributeName="stop-color"
              values="#083D39;#2C736F;#083D39;"
              dur="5s"
              repeatCount="indefinite"></animate>
          </stop>

          <stop
            offset="1"
            stopColor="#2C736F">
            <animate
              attributeName="stop-color"
              values="#2C736F;#083D39;#2C736F;"
              dur="5s"
              repeatCount="indefinite"></animate>
          </stop>
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 1 -.5"
            to="360 1 -.5"
            dur="5s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <Path
        d="M1902 1696.88V1690.97C1744.73 1690.97 1657.3 1557.95 1532.72 1285.17L949.464 0L423.753 1227.8H431.854L733.257 524.755L1067.62 1306.26C1151.7 1502.84 1174.61 1691.25 967.062 1691.25V1697.16H1902.28L1902 1696.88ZM285.482 1412.28C72.0688 1293.05 0 1469.93 0 1555.42C0 1640.91 103.354 1715.72 253.917 1715.72C413.418 1715.72 644.987 1633.88 782.141 1510.99L776.555 1507.05C605.88 1628.54 325.706 1434.5 285.482 1412"
        fill="url('#logo-gradient')"
      />
    </Svg>
  );
}

export function Location(props: Props) {
  return (
    <Svg
      viewBox="0 0 18 18"
      width="20"
      height="20"
      fill={props.color}
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 6.75A5.246 5.246 0 019 1.5a5.246 5.246 0 015.25 5.25C14.25 10.688 9 16.5 9 16.5s-5.25-5.813-5.25-9.75zm3.375 0a1.876 1.876 0 103.751-.001 1.876 1.876 0 00-3.751.001z"
        fill={props.color}></Path>
    </Svg>
  );
}
