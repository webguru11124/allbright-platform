import { useQuery } from "@tanstack/react-query";

import { UserModel } from "@/types/user";
import UserClient from "@/utils/client/user/UserClient";
import { getUserId } from "@/utils/token";

export const useUserProfile = () => {
  return useQuery({
    enabled: false,
    queryKey: ["user"],
    queryFn: async () => {
      const userId = await getUserId();
      if (!userId) throw new Error("User ID not available");
      return await new UserClient().findUserById(userId);
    },
    select: (data: UserModel | undefined | null) => ({
      ...data,
      ethnicGroups: data?.ethnicGroups ?? [],
      careerGoals: data?.careerGoals ?? [],
      goals: data?.goals ?? [],
    }),
  });
};
