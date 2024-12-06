import { useRouter } from "expo-router";
import { useContext } from "react";

import { UserContext } from "@/contexts/UserContext";
import { UserModel } from "@/types/user";

export const useApprove = () => {
  const { refetch } = useContext<{
    user: Partial<UserModel> | undefined;
    refetch: Function;
  }>(UserContext);
  const router = useRouter();

  const onClick = async () => {
    await refetch();
    router.replace("/home");
  };

  return { onClick };
};
