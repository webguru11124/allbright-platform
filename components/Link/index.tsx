import { Href, Link as NativeLink } from "expo-router";
import _ from "lodash";
import React, { ReactNode } from "react";
import { Platform, View } from "react-native";
import styled from "styled-components/native";
import * as T from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type LinkProps = {
  isLoading?: boolean;
  isSecondary?: boolean;
  isWhite?: boolean;
  isCta?: boolean;
  background?: string;
  name?: string;
  disabled?: boolean;
  href: Href;
  theme: Theme;
  children?: ReactNode;
};

type ContainerProps = Omit<LinkProps, "href">;

function Link(props: LinkProps) {
  return (
    <S.Container
      {..._.omit(props, ["href"])}
      background={props.theme.colors.button?.background || "#FFF"}>
      <S.NativeLink href={props.href as Href}>{getChildren()}</S.NativeLink>
    </S.Container>
  );

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
          ? getFontColour(props.background, props.theme)
          : "white";
    return <T.CM color={fontColour}>{props.name || props.children}</T.CM>;
  }
}

function getFontColour(bgColour: string, theme: any) {
  const colour =
    bgColour.charAt(0) === "#" ? bgColour.substring(1, 7) : bgColour;
  const r = parseInt(colour.substring(0, 2), 16);
  const g = parseInt(colour.substring(2, 4), 16);
  const b = parseInt(colour.substring(4, 6), 16);

  return r * 0.299 + g * 0.587 + b * 0.114 > 186
    ? theme.colors.button.primary
    : "white";
}

const S = {
  NativeLink: styled(NativeLink)`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: ${Platform.OS === "web" ? "auto" : "center"};
    padding-top: ${Platform.OS === "web" ? 0 : 13}px;
  `,

  Container: styled(View)<ContainerProps>`
    width: 100%;
    height: 45px;
    border-radius: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.disabled ? 0.4 : 1)};
    background: ${(props) => props.background};
  `,

  ActivityIndicator: styled.ActivityIndicator.attrs((p) => ({
    size: "small",
    color: p.theme.bg.card,
  }))``,

  TinyContainer: styled(View)<ContainerProps>`
    border-radius: 24px;
    background: ${(p) =>
      p.isCta ? p.theme.colors.secondary : p.theme.bg.overlay};
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
  `,
};

export default withTheme(Link);
