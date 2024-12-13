import React from "react";

import Member from "@/features/Member/Member";
import { useUserFetch } from "@/hooks/resources/useUserFetch";
import { UserModel } from "@/types/user";

type Props = {
  userId: string;
};

export default function MemberContainer({ userId }: Props) {
  const { data } = useUserFetch({ id: userId });

  return <Member user={data as UserModel} />;
}
