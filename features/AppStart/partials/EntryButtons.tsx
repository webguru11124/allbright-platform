import { CM } from "@/components/Typography";
import React from "react";
import { Animated } from "react-native";
import Link from "@/components/Link";
import Space from "@/components/Space";
import { EntryButtonsProps } from "@/features/AppStart/types";
import { recommendationColour } from "@/theme";

const EntryButtons = ({ nameAnim }: EntryButtonsProps) => {
  return (
    <Animated.View style={{ opacity: nameAnim, width: "100%" }}>
      <Link href="/register">Join AllBright</Link>
      <Space height={10} />
      <Link
        href="/login"
        background={recommendationColour.btBgColor}
        isSecondary={true}>
        <CM color={recommendationColour.btColor}>Log in</CM>
      </Link>
      <Space height={10} />
      <Link
        href="/onboarding/welcome"
        background={recommendationColour.btBgColor}
        isSecondary={true}>
        <CM color={recommendationColour.btColor}>Onboarding</CM>
      </Link>
    </Animated.View>
  );
};

export default EntryButtons;
