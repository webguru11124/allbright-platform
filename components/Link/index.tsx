import { Href, Link as NativeLink } from "expo-router";
import _ from "lodash";
import React, { ReactNode } from "react";
import { ActivityIndicator, Platform, StyleSheet, View } from "react-native";

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

function Link(props: LinkProps) {
  return (
    <View
      {..._.omit(props, ["href"])}
      style={[
        styles.container,
        { backgroundColor: props.theme.colors.button?.background || "#FFF", opacity: props.disabled ? 0.4 : 1 },
      ]}>
      <NativeLink
        style={[
          styles.nativeLink,
          {
            textAlign: Platform.OS === "web" ? "center" : "center",
            paddingTop: Platform.OS === "web" ? 0 : 13,
          },
        ]}
        href={props.href as Href}>
        {getChildren()}
      </NativeLink>
    </View>
  );

  function getChildren() {
    if (props.isLoading)
      return (
        <ActivityIndicator
          size={"small"}
          color={props.theme.colors.card}
        />
      );

    const arrayChildren = React.Children.toArray(props.children);
    if (arrayChildren.length > 0 && arrayChildren.every((el) => React.isValidElement(el))) {
      return props.children;
    }

    const fontColor =
      props.isWhite || props.isSecondary
        ? "#FFF50"
        : props.background
          ? getFontColor(props.background, props.theme)
          : "white";
    return <T.CM color={fontColor}>{props.name || props.children}</T.CM>;
  }
}

function getFontColor(bgColor: string, theme: any) {
  const color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? theme.colors.button.primary : "white";
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    backgroundColor: "transparent",
  },
  nativeLink: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 13,
  },
});

export default withTheme(Link);
