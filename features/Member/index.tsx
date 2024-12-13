import React from "react";

import useMemberCard from "@/features/Member/hooks/useMemberCard";
import Member from "@/features/Member/Member";
import withTheme from "@/hocs/withTheme";
import { useUserFetch } from "@/hooks/resources/useUserFetch";
import { UserModel } from "@/types/user";

type Props = {
  userId: string;
  theme: Theme;
};

function MemberContainer({ userId, theme }: Props) {
  const { data } = useUserFetch({ id: userId });
  const { id, name, firstName, lastName, imageSrc, occupation, location, bioFields, lightBackground } = useMemberCard({
    theme: theme,
    user: data as UserModel,
  });

  return (
    <Member
      lightBackground={lightBackground}
      id={id}
      name={name}
      firstName={firstName}
      lastName={lastName}
      imageSrc={imageSrc}
      occupation={occupation}
      location={location}
      bioFields={bioFields}
      theme={theme}
    />
  );
}

export default withTheme(MemberContainer);
