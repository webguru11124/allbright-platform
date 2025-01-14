import React from "react";

import useMemberCard from "@/features/Member/hooks/useMemberCard";
import Member from "@/features/Member/Member";
import withTheme from "@/hocs/withTheme";
import { useUserFetch } from "@/hooks/resources/useUserFetch";
import { UserModel } from "@/types/user";

import MemberLoading from "./components/MemberLoading";

type Props = {
  userId: string;
  theme: Theme;
};

function MemberContainer({ userId, theme }: Props) {
  const { data, isLoading } = useUserFetch({ id: userId });
  const { id, name, initials, imageSrc, occupation, location, bioFields, lightBackground, isMentor } = useMemberCard({
    theme: theme,
    user: data as UserModel,
  });

  if (isLoading) {
    return <MemberLoading />;
  }

  return (
    <Member
      lightBackground={lightBackground}
      id={id}
      name={name}
      initials={initials}
      imageSrc={imageSrc}
      occupation={occupation}
      location={location}
      bioFields={bioFields}
      theme={theme}
      isMentor={isMentor}
    />
  );
}

export default withTheme(MemberContainer);
