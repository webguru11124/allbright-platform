import { router } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

import { MemberCardProps } from "@/features/Member/types";

const Member = ({ name }: MemberCardProps) => {
  useEffect(() => {
    router.navigate("/home");
  }, []);

  return <Text>{`${name}`}</Text>;
};

export default Member;
