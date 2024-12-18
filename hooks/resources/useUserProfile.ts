import { useQuery } from "@tanstack/react-query";

import { UserModel } from "@/types/user";
import UserClient from "@/utils/client/user/UserClient";

export const useUserProfile = () => {
  return useQuery({
    enabled: false,
    queryKey: ["user"],
    queryFn: async () => {
      const data = await new UserClient().getMe();
      return data || null;
    },
    select: (data: UserModel | undefined | null) => ({
      ...data,
      ethnicGroups: data?.ethnicGroups ?? [],
      careerGoals: data?.careerGoals ?? [],
      goals: data?.goals ?? [],
    }),
  });
};
