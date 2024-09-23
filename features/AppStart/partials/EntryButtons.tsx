import { CM } from "@/components/Typography";
import React from "react";
import { Animated } from "react-native";

import Link from "@/components/Link";
import Space from "@/components/Space";
import { EntryButtonsProps } from "@/features/AppStart/types";

const EntryButtons = ({ nameAnim }: EntryButtonsProps) => {
  return (
    <Animated.View style={{ opacity: nameAnim, width: "100%" }}>
      <Link href="/register">Join AllBright</Link>
      <Space height={10} />
      <Link
        href="/login"
        background={"rgb(58, 59, 61)"}
        isSecondary={true}>
        <CM color={"rgb(228, 230, 235)"}>Log in</CM>
      </Link>
      <Space height={10} />
      <Link href="/onboarding/public-profile" background={"rgb(58, 59, 61)"} isSecondary={true}>
        <CM color={"rgb(228, 230, 235)"}>Onboarding</CM>
      </Link>
    </Animated.View>
  );
};

export default EntryButtons;
