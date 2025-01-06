import React, { FunctionComponent, useState } from "react";
import { Pressable } from "react-native";

import { businessCardAdaptor } from "@/features/BusinessCard/adaptors";
import MemberCardModalWithId from "@/features/Member/components/MemberCardModalWithId";
import withTheme from "@/hocs/withTheme";
import { UserModel } from "@/types/user";
import { InterestTitles } from "@/types/user/interests";
import GOALS from "@/utils/data/goals";
import { interests } from "@/utils/data/interests";

import BusinessCard from "./BusinessCard";

type Props = {
  member: UserModel;
  canViewQrCode?: boolean;
  theme: Theme;
  isStatic?: boolean;
};

const whiteTextColours = ["#525858", "#834973", "#6D8868", "#955C5C", "#617595", "#886BB7", "#50968D"];

const BusinessCardContainer: FunctionComponent<Props> = ({ member, theme, canViewQrCode = false }) => {
  const [showModal, setShowModal] = useState(false);
  if (!member.id && !member.objectID) return null;

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

  const textColor = whiteTextColours.includes(stripTags(card.businessCardColour))
    ? theme.colors.background
    : theme.colors.inputs.text;

  const BusinessCardContent = (
    <BusinessCard
      WIDTH={WIDTH}
      HEIGHT={HEIGHT}
      card={card}
      textColor={textColor}
      role={role}
      userInterests={userInterests}
      goals={goals}
      canViewQrCode={canViewQrCode}
    />
  );

  const handleBusinessCardPress = () => {
    setShowModal(true);
  };

  if (canViewQrCode)
    return (
      <>
        {showModal && (
          <MemberCardModalWithId
            showModal={showModal}
            setShowModal={setShowModal}
            userId={member.id || member.objectID || ""}
          />
        )}
        <Pressable onPress={handleBusinessCardPress}>{BusinessCardContent}</Pressable>
      </>
    );

  return BusinessCardContent;
};

const stripTags = <T extends string>(item: T): T => item && (item.replace(/<[^>]+>/g, "") as T);

export default withTheme(BusinessCardContainer);
