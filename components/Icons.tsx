import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

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
