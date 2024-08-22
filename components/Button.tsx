import * as T from "@/components/Typography";
import * as theme from "@/theme";
import React, { ReactNode } from "react";
import RN from "react-native";
import styled from "styled-components/native";

type ButtonProps = {
  isLoading?: boolean;
  isSecondary?: boolean;
  isWhite?: boolean;
  isCta?: boolean;
  background?: string;
  name?: string;
  theme?: Theme;
  children?: ReactNode;
  onPress?: GestureEvent;
};

export default function Button(props: ButtonProps) {
  return <S.Container {...props}>{getChildren()}</S.Container>;

  function getChildren() {
    if (props.isLoading) return <S.ActivityIndicator />;

    const arrayChildren = React.Children.toArray(props.children);
    if (
      arrayChildren.length > 0 &&
      arrayChildren.every((el) => React.isValidElement(el))
    ) {
      return props.children;
    }

    const fontColour =
      props.isWhite || props.isSecondary
        ? "#FFF50"
        : props.background
          ? getFontColour(props.background)
          : "white";
    return <T.CM color={fontColour}>{props.name || props.children}</T.CM>;
  }
}

export function TinyButton(props: ButtonProps) {
  const currScheme = RN.useColorScheme() || "dark";

  const subProps = {
    onPress: props.onPress,
    ...props,
  };

  return <S.TinyContainer {...subProps}>{getChildren()}</S.TinyContainer>;

  function getChildren() {
    if (props.isLoading) return <S.ActivityIndicator />;

    if (React.isValidElement(props.children)) return props.children;

    // eslint-disable-next-line import/namespace
    const defaultFont = theme[currScheme].txt.primo;
    const fontColour = props.isCta
      ? "white"
      : props.background
        ? getFontColour(props.background)
        : defaultFont;
    return <T.CM color={fontColour}>{props.name || props.children}</T.CM>;
  }
}

function getFontColour(bgColour: string) {
  const colour =
    bgColour.charAt(0) === "#" ? bgColour.substring(1, 7) : bgColour;
  const r = parseInt(colour.substring(0, 2), 16); // hexToR
  const g = parseInt(colour.substring(2, 4), 16); // hexToG
  const b = parseInt(colour.substring(4, 6), 16); // hexToB

  return r * 0.299 + g * 0.587 + b * 0.114 > 186
    ? theme.colors.charcoal
    : "white";
}

const S = {
  Container: styled.Pressable<ButtonProps>`
    width: 100%;
    height: 45px;
    border-radius: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.disabled ? 0.4 : 1)};
    background: ${(props) => {
      if (props.background) return props.background;
      if (props.isSecondary) return props?.theme?.dark.bg.overlay;
      if (props.isWhite) return props?.theme?.dark.bg.card;
      return theme.colors.teal;
    }};
  `,

  ActivityIndicator: styled.ActivityIndicator.attrs((p) => ({
    size: "small",
    color: p.theme.bg.card,
  }))``,

  TinyContainer: styled.TouchableOpacity<ButtonProps>`
    border-radius: 24px;
    background: ${(p) => (p.isCta ? p.theme.colors.teal : p.theme.bg.overlay)};
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
  `,
};
