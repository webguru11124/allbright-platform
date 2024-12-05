import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

import FlipCard from "@/components/FlipCard";
import { AllBrightVector } from "@/components/Icons/index";
import Row from "@/components/Row";
import { CS, H4 } from "@/components/Typography";
import { businessCardAdaptor } from "@/features/BusinessCard/adaptors";
import withTheme from "@/hocs/withTheme";
import { UserModel } from "@/types/user";

// type StyleProps = {
//   colour?: string;
//   isOpaque?: boolean;
//   isBold?: boolean;
//   isGraphLayer?: boolean;
//   href?: string;
//   isStatic?: boolean;
// };

type BusinessCardProps = {
  member: UserModel;
  isStatic?: boolean;
  theme: Theme;
};

const whiteTextColours = ["#525858", "#834973", "#6D8868", "#955C5C", "#617595", "#886BB7", "#50968D"];

const BusinessCard: FunctionComponent<BusinessCardProps> = ({ member, isStatic, theme }) => {
  if (!member) return null;

  const card = businessCardAdaptor(member);

  const textColor = whiteTextColours.includes(stripTags(card.businessCardColor))
    ? theme.colors.background
    : theme.colors.text;

  const Front = () => (
    <View style={[styles.root, { backgroundColor: card?.businessCardColor }]}>
      <View style={styles.headerContent}>
        <Row>
          <AllBrightVector
            color={textColor}
            width={20}
            height={20}
          />
          <CS style={{ fontWeight: 600, letterSpacing: 2, color: textColor }}>BUSINESS CARD</CS>
        </Row>
        <H4>{card.displayName}</H4>
      </View>
    </View>
  );

  const Back = () => <View style={[styles.root, { backgroundColor: "red" }]}></View>;

  return (
    <FlipCard
      frontComponent={<Front />}
      backComponent={<Back />}
      width={300}
      height={260}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    width: 300,
    height: 260,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "yellow",
    shadowColor: "#ddd",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  headerContent: {
    flexDirection: "column",
    gap: 10,
    width: "70%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

const stripTags = <T extends string>(item: T): T => item && (item.replace(/<[^>]+>/g, "") as T);

export default withTheme(BusinessCard);
