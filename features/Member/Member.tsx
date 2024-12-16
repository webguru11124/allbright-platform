import { router } from "expo-router";
import { useEffect } from "react";

import { MemberCardProps } from "@/features/Member/types";

const Member = ({ name }: MemberCardProps) => {
  useEffect(() => {
    router.navigate("/home");
  }, []);

  return `${name}`;
};

export default Member;
