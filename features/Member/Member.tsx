import { router } from "expo-router";
import { useEffect } from "react";

import { UserModel } from "@/types/user";

type Props = {
  user: UserModel;
};

const Member = ({ user }: Props) => {
  useEffect(() => {
    router.navigate("/home");
  }, []);

  return `${user?.name}`;
};

export default Member;
