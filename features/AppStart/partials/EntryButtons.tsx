import React from "react";
import { Animated } from "react-native";

import Link from "@/components/Link";
import Space from "@/components/Space";
import { CM } from "@/components/Typography";
import { EntryButtonsProps } from "@/features/AppStart/types";
import withTheme from "@/hocs/withTheme";
import { recommendationColor } from "@/theme";

const EntryButtons = ({ nameAnim, theme }: EntryButtonsProps) => {
  return (
    <Animated.View style={{ opacity: nameAnim, width: "100%" }}>
      <Link href="/register">
        <CM style={{ color: theme.colors.button.primary, fontWeight: 600 }}>Join AllBright</CM>
      </Link>
      <Space height={10} />
      <Link
        href="/login"
        background={recommendationColor.btBgColor}
        isSecondary={true}>
        <CM style={{ color: theme.colors.button.primary, fontWeight: 600 }}>Log in</CM>
      </Link>
      <Space height={10} />
    </Animated.View>
  );
};

export default withTheme(EntryButtons);
