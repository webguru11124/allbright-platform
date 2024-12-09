import React, { FunctionComponent } from "react";

import { businessCardAdaptor } from "@/features/BusinessCard/adaptors";
import withTheme from "@/hocs/withTheme";
import { UserModel } from "@/types/user";
import { InterestTitles } from "@/types/user/interests";
import GOALS from "@/utils/data/goals";
import { interests } from "@/utils/data/interests";

import BusinessCard from "./BusinessCard";

type Props = {
  member: UserModel;
  theme: Theme;
};

const whiteTextColours = ["#525858", "#834973", "#6D8868", "#955C5C", "#617595", "#886BB7", "#50968D"];

const BusinessCardContainer: FunctionComponent<Props> = ({ member, theme }) => {
  if (!member) return null;

  const WIDTH = 300;
  const HEIGHT = 260;

  const card = businessCardAdaptor(member);
  const job = card.job || card.jobLevel;
  const jobCompany = card.jobCompany || card.jobIndustry;
  const role = [job, jobCompany].filter(Boolean).join(" • ");
  const userInterests = (card.interests || ([] as any))
    .filter((item: InterestTitles) => interests.includes(stripTags(item as unknown as string)))
    .join(" • ");
  const goals = (card.goals || []).filter((item) => GOALS.includes(stripTags(item))).join(" • ");

  const textColor = whiteTextColours.includes(stripTags(card.businessCardColor))
    ? theme.colors.background
    : theme.colors.text;

  return (
    <BusinessCard
      WIDTH={WIDTH}
      HEIGHT={HEIGHT}
      card={card}
      textColor={textColor}
      role={role}
      userInterests={userInterests}
      goals={goals}
    />
  );
};

const stripTags = <T extends string>(item: T): T => item && (item.replace(/<[^>]+>/g, "") as T);

export default withTheme(BusinessCardContainer);
